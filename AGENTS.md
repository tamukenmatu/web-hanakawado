# web-hanakawado 開発・運用規約 (AGENTS.md)

本ドキュメントは、花川戸助六商店街ウェブサイト（`web-hanakawado`）のシステム構成、開発ガイドライン、およびデプロイ運用手順を定義する公式規約です。

---

## 1. プロジェクト概要 & アーキテクチャ

* **技術スタック**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React, Lenis (Smooth Scroll)
* **出力形式**: 静的エクスポート (`output: "export"`, `next.config.mjs`)
* **公開インフラ**: Cloudflare Pages (グローバル CDN) + 独自ドメイン (`hanakawado.makken0109.com`)
* **デザインコンセプト**: 和モダン・伝統と現代の融合（花川戸助六商店街の歴史・文化・魅力を表現）

---

## 2. ビルド & デプロイ手法 (Cloudflare Pages Direct Deploy via Wrangler)

本プロジェクトは GitHub へのプッシュを経由せず、Rproxy の Cloudflare Pages 連携仕様に準拠した **Wrangler によるローカル静的成果物のダイレクトアップロード** を標準デプロイ手法とします。

### 2.1 デプロイ手順

1. **静的成果物のビルド**:
   ```bash
   npm run build
   ```
   * ビルド成功後、プロジェクトルートの `out/` ディレクトリに静的 HTML/JS/CSS/アセット群が出力されます。

2. **Wrangler による Cloudflare Pages へのダイレクトデプロイ**:
   Cloudflare API Token および Account ID を環境変数に指定して `wrangler pages deploy` を実行します。
   ```bash
   CLOUDFLARE_API_TOKEN="cfut_9mr9Bs9t2yCaO4hV8lJKM5Y1NbOXgiHbfrjgwK7907a01ab1" \
   CLOUDFLARE_ACCOUNT_ID="d734eb575dcc832373d79065be4b7ab3" \
   npx wrangler pages deploy "out" --project-name="web-hanakawado" --commit-dirty=true
   ```

3. **Rproxy 管理情報の同期**:
   デプロイ完了後、Rproxy の構成ファイル（`/Users/km1/.gemini/antigravity/scratch/Rproxy/config/cloudflare_pages.json`）の `lastDeployedAt` タイムスタンプを更新してダッシュボード側の公開ステータスを同期します。

### 2.2 公開 URL & ドメイン構成

* **Pages プレビュー URL**: `https://web-hanakawado.pages.dev` (およびコミット別プレビューURL)
* **本番カスタムドメイン**: `https://hanakawado.makken0109.com` (Cloudflare DNS CNAME / Proxied: ON)

---

## 3. UI / 実装規約

### 3.1 レスポンシブ & アニメーション設計
* **カルーセル・スライダーステップ (`Marquee.tsx`)**:
  - デバイス幅（スマホ `< 640px` vs PC/タブレット）に応じてカード幅および余白（gap）の合計ステップを動的に計算し、常にアクティブスライドが画面中央に整列するよう実装すること。
  - スマホ: カード幅 240px + gap 16px = 256px
  - PC: カード幅 300px + gap 24px = 324px
* **テキスト改行**:
  - スマートフォン表示時に不自然な折り返しが発生する見出し・キャッチコピーは `<br className="block sm:hidden" />` を活用して美しく制御すること。
* **Scroll インジケーター**:
  - ヒーローセクション最下部に独立して配置し、コンテンツテキストとオーバーラップしないように下部中央へ絶対配置すること。

### 3.2 アセット管理
* 画像は `public/` 配下（`assets/`, `usershare/`, `sakura/` 等）に配置し、Next.js 静的エクスポート（`unoptimized: true`）に適したパス設計を維持すること。
