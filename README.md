# kdg.social(仮称)のフロントエンド

## 概要

kdg.social(仮称)のフロントエンドのリポジトリです。

## 扱う技術

|     技術      | 用途            | バージョン  | リンク                                               |
|:-----------:|---------------|--------|---------------------------------------------------|
|   Node.js   | ランタイム         | 20     | https://nodejs.org/                               |
|    pnpm     | パッケージ管理       | 9.1.4  | https://pnpm.io/                                  |
|   Vue.js    | フロントエンド       | 3.4.27 | https://v3.vuejs.org/                             |
|    Pinia    | ストア           |        | https://pinia.esm.dev/                            |
| TypeScript  | 型システム         | 5.4.5  | https://www.typescriptlang.org/                   |
|    Nuxt     | SSR、ルーティング    | 3.11.2 | https://nuxt.com/                                 |
|   Ark UI    | コンポーネントロジック   |        | https://ark-ui.com/                               |
|    Vite     | ビルドツール        |        | https://vitejs.dev/                               |
|    Husky    | Gitフック        |        | https://typicode.github.io/husky/                 |
|   ESLint    | コード解析         |        | https://eslint.org/                               |
|  Prettier   | コードフォーマッタ     |        | https://prettier.io/                              |
|   Vitest    | テストランナー       |        | https://vitest.dev/                               |
| Lint Staged | ステージング時のコード解析 |        | https://github.com/lint-staged/lint-staged#readme |
|   Vue Use   | Vueのカスタムフック   |        | https://vueuse.org/                               |
|  date-fns   | 日付操作          |        | https://date-fns.org/                             |
|   Lucide    | アイコン          |        | https://lucide.dev/                               |

## 環境構築

```bash
# パッケージのインストール
pnpm install
# 開発サーバーの起動
pnpm dev
```

## ディレクトリ構成

| ディレクトリ      | 説明              |
|-------------|-----------------|
| assets      | 静的ファイル          |
| composables | Vueのコンポーネントロジック |
| public      | 静的ファイル          |
| stores      | Piniaのストア       |
| types       | TypeScript の型定義 |
| components  | Vueのコンポーネント     |
| layouts     | ページのレイアウト       |
| pages       | ページ             |
| server      | サーバーサイドのコード     |
| test        | テストコード          |
