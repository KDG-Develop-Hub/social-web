# kdg.social(仮称)のフロントエンド

kdg.social(仮称)のフロントエンドのリポジトリです。

## 開発環境

### 必須ツール

| ツール | バージョン | リンク |
| --- | --- | --- |
| Node.js | 20以降 | <https://nodejs.org/> |
| pnpm | 9.1.4以降 | <https://pnpm.io/> |

### セットアップ

以下のコマンドを実行して、開発サーバーのセットアップをします。

```bash
pnpm install
pnpm postinstall
pnpm dev
```

プロダクションの設定を使った開発サーバーを立ち上げたい場合は、以下のコマンドを実行します。

```bash
pnpm dev:prod
```

実行すると、ブラウザで `http://localhost:3000` にアクセスして、開発サーバーが起動します。

### ビルド

以下のコマンドを実行して、ビルドをします。

```bash
pnpm build
```
