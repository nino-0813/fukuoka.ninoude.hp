import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { google } from 'googleapis';

type BookingBody = {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  message?: string;
};

function getCredentialsJson(): { json: string; fromFile: boolean } | { error: string } {
  const pathOrJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_PATH?.trim();
  if (pathOrJson) {
    // Vercel などで PATH に JSON を貼った場合も受け付ける（先頭が { なら JSON として扱う）
    if (pathOrJson.startsWith('{')) {
      return { json: pathOrJson, fromFile: false };
    }
    const fullPath = resolve(process.cwd(), pathOrJson);
    if (!existsSync(fullPath)) {
      return { error: `JSONファイルが見つかりません: ${pathOrJson}（プロジェクト直下にありますか？Vercel の場合は GOOGLE_SERVICE_ACCOUNT_JSON に JSON を貼ってください）` };
    }
    try {
      const json = readFileSync(fullPath, 'utf-8');
      return { json, fromFile: true };
    } catch (e) {
      console.error('Failed to read GOOGLE_SERVICE_ACCOUNT_JSON_PATH:', e);
      return { error: `JSONファイルを読み込めません: ${pathOrJson}` };
    }
  }
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON ?? null;
  return json ? { json, fromFile: false } : { error: 'GOOGLE_SERVICE_ACCOUNT_JSON または GOOGLE_SERVICE_ACCOUNT_JSON_PATH を設定してください' };
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingBody = await request.json();
    const { name, email, phone = '', date, time, message = '' } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { message: 'お名前・メールアドレス・ご希望日・ご希望時間は必須です。' },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const credentialsResult = getCredentialsJson();

    if (!sheetId) {
      return NextResponse.json(
        { message: '予約機能の設定が完了していません。GOOGLE_SHEET_ID を設定してください。' },
        { status: 503 }
      );
    }
    if ('error' in credentialsResult) {
      console.error('Credentials error:', credentialsResult.error);
      return NextResponse.json(
        { message: `予約機能の設定エラー: ${credentialsResult.error}` },
        { status: 503 }
      );
    }
    const credentialsJson = credentialsResult.json;
    // ファイルから読んだ場合はそのまま。.env に貼った JSON は replace すると壊れるので trim のみ
    const normalizedJson = credentialsResult.fromFile
      ? credentialsJson.trim()
      : credentialsJson.trim();
    let credentials: Record<string, unknown>;
    try {
      credentials = JSON.parse(normalizedJson) as Record<string, unknown>;
    } catch {
      console.error('Invalid GOOGLE_SERVICE_ACCOUNT_JSON');
      return NextResponse.json(
        { message: '送信に失敗しました。しばらく経ってからお試しください。' },
        { status: 500 }
      );
    }
    // .env に貼った場合、private_key が \n 二文字のままのことがあるので改行に直す
    if (typeof credentials.private_key === 'string') {
      credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    // シート名はタブ名と完全一致させる（「シート1」の場合は GOOGLE_SHEET_NAME=シート1 を .env に設定）
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1';
    // 日本語やスペースなどはシート名を単一引用符で囲む必要がある
    const quotedName = /^[a-zA-Z0-9_]+$/.test(sheetName) ? sheetName : `'${sheetName.replace(/'/g, "''")}'`;
    const range = `${quotedName}!A:G`;
    // 送信日時は日本時間（JST）で記録
    const now = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    // 希望日は YYYY-MM-DD のまま（スプレッドシート上でも日本時間の日付として扱う）
    const row = [now, name, email, phone, date, time, message];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    let detail = '';
    const errObj = err as { message?: string; response?: { data?: unknown }; code?: string };
    if (errObj?.message) detail = errObj.message;
    if (typeof err === 'object' && err !== null && errObj.response?.data) {
      const data = errObj.response.data as { error?: { message?: string; status?: string; errors?: Array<{ message?: string }> } };
      if (data?.error?.message) detail = data.error.message;
      else if (data?.error?.errors?.[0]?.message) detail = data.error.errors[0].message;
      else if (data?.error?.status) detail = data.error.status;
      if (process.env.NODE_ENV === 'development') {
        console.error('Booking API error (response.data):', JSON.stringify(errObj.response.data, null, 2));
      }
    } else if (process.env.NODE_ENV === 'development' && err) {
      console.error('Booking API error (full):', err);
    }
    const message = detail
      ? `送信に失敗しました: ${detail}`
      : '送信に失敗しました。しばらく経ってからお試しください。';
    return NextResponse.json({ message }, { status: 500 });
  }
}
