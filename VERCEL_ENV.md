# Vercel 環境変数の設定

Vercel のダッシュボード → プロジェクト → **Settings** → **Environment Variables** で以下を設定できます。

## 必須（サイトは動くが、機能によっては未設定なら制限あり）

- 特になし（このプロジェクトは未設定でも表示・表示系は動作します）

---

## 任意：初回体験予約フォーム → Google スプレッドシート連携

予約フォームの送信をスプレッドシートに保存したい場合に設定します。未設定の場合は「LINEからお申し込みください」と表示されます。

| 変数名 | 説明 | 例 |
|--------|------|-----|
| `GOOGLE_SHEET_ID` | スプレッドシートの ID（URL の `/d/` と `/edit` の間の文字列） | `1abc...` |
| `GOOGLE_SHEET_NAME` | シートのタブ名（1行目がヘッダー） | `シート1` または `Sheet1` |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | サービスアカウントの JSON を **1行** にした文字列 | `{"type":"service_account",...}` |

**設定の流れ（要約）**

1. Google Cloud Console でプロジェクト作成 → Sheets API 有効化
2. サービスアカウント作成 → JSON キーをダウンロード
3. スプレッドシートを新規作成し、サービスアカウントのメールに編集権限を付与
4. 1行目にヘッダー: `送信日時, お名前, メール, 電話番号, 希望日, 希望時間, ご要望`
5. JSON を1行にしたものを `GOOGLE_SERVICE_ACCOUNT_JSON` に貼り付け（クォートは不要）

※ Vercel ではローカルファイルが使えないため、`GOOGLE_SERVICE_ACCOUNT_JSON_PATH` は使わず、必ず `GOOGLE_SERVICE_ACCOUNT_JSON` を設定してください。

---

## 任意：AI 無料診断（Gemini）

AI 診断機能を使う場合のみ設定します。

| 変数名 | 説明 |
|--------|------|
| `GEMINI_API_KEY` | Google AI (Gemini) の API キー |

---

## 本番 URL について

`lib/constants.ts` の `BASE_URL` はコード内で `https://gypsofil-fukuoka.example.com` になっています。  
Vercel の本番 URL（例: `https://xxxx.vercel.app` や独自ドメイン）に合わせて、デプロイ後にこの値を差し替えてください。  
（将来的に `NEXT_PUBLIC_BASE_URL` のような環境変数にすると、Vercel の Environment Variables だけで切り替えできます。）

---

## 設定後の注意

- 環境変数を追加・変更したあとは、**Redeploy**（再デプロイ）しないと反映されません。
- **Production / Preview / Development** のどれに適用するか選択できます。本番だけ変えたい場合は Production のみに設定してください。
