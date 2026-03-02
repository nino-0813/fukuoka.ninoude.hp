# 二の腕痩せ専門ジプソフィル®︎ | 福岡の二の腕ダイエット専門サロン

Next.js（App Router）で構築したSEO最適化済みの公式サイトです。

## 技術スタック

- **Next.js 15**（App Router）
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **next/image**（画像最適化）
- **JSON-LD**（LocalBusiness・FAQPage・BreadcrumbList）

## 開発

### 前提条件

- Node.js 18+

### 手順

1. 依存関係のインストール  
   `npm install`

2. 環境変数（任意）  
   - AI無料診断を使う場合: `.env.local` に `GEMINI_API_KEY` を設定  
   - 本番の絶対URL: `lib/constants.ts` の `BASE_URL` を本番URLに変更

3. 開発サーバー起動  
   `npm run dev`  
   → http://localhost:3000

4. 本番ビルド  
   `npm run build`  
   `npm start`

## サイト構成（SEO設計）

| URL | 想定キーワード | 内容 |
|-----|----------------|------|
| `/` | 二の腕痩せ 福岡 | トップ・コンセプト・症例・メニュー概要・アクセス・FAQ |
| `/bridal-arm-slim-fukuoka` | ブライダル二の腕 福岡 | 挙式前ケア専用ページ |
| `/menu` | 二の腕痩せ 料金 福岡 | メニュー・料金一覧 |
| `/monitor-recruitment` | モニター募集 二の腕 | モニター募集要項・応募 |
| `/access` | ジプソフィル 福岡 アクセス | 店舗案内・営業時間 |
| `/faq` | 二の腕痩せ よくある質問 | FAQ一覧（FAQPageスキーマ） |

## SEO・構造化データ

- **メタデータ**: 各ページで `title`・`description`・OGタグ・canonical を設定
- **Semantic HTML**: `header` / `main` / `section` / `article` / `footer` と見出し階層（H1→H2→H3）
- **JSON-LD**
  - 全ページ: **LocalBusiness**（店舗名・住所・営業時間・電話・URL）
  - トップ・FAQ: **FAQPage**
  - 下層ページ: **BreadcrumbList**
- **画像**: `next/image` で最適化・遅延読み込み
- **パフォーマンス**: AI診断ブロックはクライアントのみ動的インポート（`dynamic` + `ssr: false`）

## 本番デプロイ時の確認

1. **`lib/constants.ts`**  
   - `BASE_URL`: 本番の絶対URL（例: `https://gypsofil-fukuoka.jp`）  
   - `LINE_URL` / `INSTAGRAM_URL` / `TELEPHONE`: 実運用の値に変更

2. **環境変数**  
   - Vercel 等では `GEMINI_API_KEY` を設定（AI診断を使う場合）

3. **OG画像**  
   - `lib/schema.ts` の `image` で参照している `og-image.jpg` を `public/` に配置するか、パスを修正

## 旧版（Vite + React）について

ルートの `App.tsx`・`index.tsx`・`constants.tsx`・`vite.config.ts` は旧Vite版のため、Next ビルドからは除外しています。必要ならバックアップ後に削除してください。
