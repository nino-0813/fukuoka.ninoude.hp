import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { concern } = await request.json();
    if (!concern || typeof concern !== 'string') {
      return NextResponse.json({ text: null }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        text: '現在AI診断は準備中です。まずは初回体験コースでご相談くださいね。LINEまたはお電話でお気軽にどうぞ。',
      });
    }

    const prompt = `あなたは「二の腕痩せ専門サロン ジプソフィル」のAIカウンセラーです。
お客様の悩み:「${concern}」

以下の制約を守って、専門的かつ優しくアドバイスをしてください：
1. 150字程度で回答。
2. 二の腕痩せにはリンパの滞りや肩甲骨周りのケアが重要であることに触れる。
3. ジプソフィル福岡店への来店を優しく促す。
4. 返信の最後には「まずは初回体験コースでご相談くださいね。」と入れる。`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 256 },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('Gemini API error:', err);
      return NextResponse.json({
        text: 'AIが混み合っています。直接LINEでお問い合わせいただくのが確実です。',
      });
    }

    const data = await res.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      'まずは初回体験コースでご相談くださいね。';

    return NextResponse.json({ text });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      text: 'AI診断中にエラーが発生しました。直接LINEでお問い合わせください。',
    });
  }
}
