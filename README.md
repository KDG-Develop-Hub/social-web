# kdg.social(仮称)のフロントエンド

## 概要

kdg.social(仮称)のフロントエンドのリポジトリです。

## 扱う技術

### dependencies
1. **@ark-ui/vue**: Vue.js用のUIコンポーネントライブラリ。
   - URL: [@ark-ui/vue](https://ark-ui.com/docs/vue)

2. **@nuxt/kit**: N\uxt.jsのプラグインやモジュールを作成するためのツールキット。
   - URL: [@nuxt/kit](https://nuxt.com/docs/guide/going-further/kit)

3. **@vueuse/core**: Vue.jsのためのユーティリティコレクション。
   - URL: [@vueuse/core](https://vueuse.org/)

4. **@zag-js/file-upload**: ファイルアップロードのためのUIコンポーネント。
   - URL: [@zag-js/file-upload](https://zagjs.com/)

5. **date-fns**: JavaScriptの日付操作ライブラリ。
   - URL: [date-fns](https://date-fns.org/)

6. **lucide-vue-next**: Vue 3用のアイコンライブラリ。
   - URL: [lucide-vue-next](https://lucide.dev/docs/libraries/vue-next)

7. **normalize.css**: ブラウザ間のスタイルの違いを標準化するCSSファイル。
   - URL: [normalize.css](https://necolas.github.io/normalize.css/)

8. **nuxt**: Vue.jsベースのフレームワーク。
   - URL: [nuxt](https://nuxt.com/)

9. **vue**: JavaScriptフレームワーク。
   - URL: [vue](https://vuejs.org/)

10. **vue-router**: Vue.js用のルーティングライブラリ。
    - URL: [vue-router](https://router.vuejs.org/)

### devDependencies
1. **@nuxt/eslint**: Nuxt.jsプロジェクト用のESLint設定。
   - URL: [@nuxt/eslint](https://nuxt.com/modules/eslint)

2. **@nuxt/fonts**: Nuxt.jsでフォントを簡単に使用するためのモジュール。
   - URL: [@nuxt/fonts](https://nuxt.com/modules/fonts)

3. **@nuxt/test-utils**: Nuxt.jsアプリケーションのテストユーティリティ。
   - URL: [@nuxt/test-utils](https://nuxt.com/modules/test-utils)

4. **@pinia/nuxt**: PiniaをNuxt.jsで使用するためのモジュール。
   - URL: [@pinia/nuxt](https://pinia.vuejs.org/ssr/nuxt.html)

5. **@types/eslint**: ESLintの型定義。
   - URL: [@types/eslint](https://www.npmjs.com/package/@types/eslint)

6. **@typescript-eslint/eslint-plugin**: TypeScript用のESLintプラグイン。
   - URL: [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/)

7. **@typescript-eslint/parser**: TypeScript用のESLintパーサー。
   - URL: [@typescript-eslint/parser](https://typescript-eslint.io/)

8. **@vueuse/nuxt**: VueUseをNuxt.jsで使用するためのモジュール。
   - URL: [@vueuse/nuxt](https://vueuse.org/nuxt/)

9. **eslint-plugin-simple-import-sort**: インポート文を自動でソートするESLintプラグイン。
   - URL: [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

10. **husky**: Gitフックを管理するためのツール。
    - URL: [husky](https://typicode.github.io/husky/)

11. **lint-staged**: ステージングされたファイルに対してのみリンティングを行うツール。
    - URL: [lint-staged](https://github.com/okonet/lint-staged)

12. **prettier**: コードフォーマッター。
    - URL: [prettier](https://prettier.io/)

13. **typescript**: TypeScript言語のコンパイラ。
    - URL: [typescript](https://www.typescriptlang.org/)

14. **vitest**: Viteベースのテストランナー。
    - URL: [vitest](https://vitest.dev/)

15. **vue-tsc**: VueファイルのTypeScript型チェックを行うツール。
    - URL: [vue-tsc](https://github.com/johnsoncodehk/volar)

## 環境構築

```bash
# パッケージのインストール
pnpm install
# 開発サーバーの起動
pnpm dev
```

## ディレクトリ構成

| ディレクトリ | 説明                        |
| ------------ | --------------------------- |
| assets       | 静的ファイル                |
| composables  | Vueのコンポーネントロジック |
| public       | 静的ファイル                |
| stores       | Piniaのストア               |
| types        | TypeScript の型定義         |
| components   | Vueのコンポーネント         |
| layouts      | ページのレイアウト          |
| pages        | ページ                      |
| server       | サーバーサイドのコード      |
| test         | テストコード                |
