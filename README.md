# blog-core

複数ブログで共有する VitePress の共通設定と共通テーマです。

## 含まれるもの

- `vitepress/config.ts`: 共通 `createBlogConfig()` と GA 設定
- `vitepress/theme/`: 共通テーマ（タイトル/日付表示、SPA 遷移時の `page_view` 送信）

## 想定運用

このディレクトリは将来的に Git submodule (`blog-core`) へ置き換える想定です。

```bash
git submodule add <blog-core-repo-url> blog-core
git submodule update --init --recursive
```
