# ニュースPWAアプリ

カテゴリ別にニュースを取得するPWA（Progressive Web App）です。

## 特徴

- ✅ **完全無料** - APIキー不要
- ✅ **本番環境対応** - GitHub Pagesで動作
- ✅ **高品質ニュース** - The Guardian提供
- ✅ **PWA対応** - iPhoneでアプリのように使用可能
- ✅ **オフライン対応** - Service Worker搭載
- ✅ **モバイル最適化** - レスポンシブデザイン

## セットアップ手順

### 1. GitHub Pagesでの公開
1. GitHubリポジトリを作成
2. ファイルをアップロード
3. Settings → Pages → Source: Deploy from a branch
4. Branch: main を選択
5. 数分後に `https://[ユーザー名].github.io/[リポジトリ名]/` でアクセス可能

### 2. iPhoneでの使用方法
1. iPhoneのSafariで上記URLにアクセス
2. 共有ボタン → 「ホーム画面に追加」
3. アプリアイコンがホーム画面に追加される

## 機能
- ✅ カテゴリ別ニュース表示（英語ニュース）
- ✅ オフライン対応
- ✅ モバイル最適化
- ✅ PWA対応（ホーム画面追加可能）
- ✅ リアルタイムニュース取得

## カテゴリ
- 世界
- ビジネス
- テクノロジー
- スポーツ
- カルチャー
- 社会
- 科学

## 使用API
- **The Guardian API** - 無料、制限なし、高品質な英語ニュース

## 技術スタック
- HTML5 / CSS3 / JavaScript
- Service Worker（PWA機能）
- The Guardian Content API

## 注意事項
- ニュースは英語で表示されます
- HTTPSが必要（GitHub Pagesは自動対応）
- APIキーの設定は不要です

## トラブルシューティング
- **ニュースが表示されない**: ブラウザの開発者ツールでエラーを確認
- **PWAが動作しない**: HTTPS環境（GitHub Pages）で実行してください
- **オフラインで動作しない**: 一度オンラインでアクセスしてからお試しください