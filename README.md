# OpenRTB Typings

OpenRTB TypingsはOpenRTB（リアルタイムビディング）規格のための型定義パッケージです。TypeScriptを使用することで、開発時の型安全性を確保し、バグの早期発見を支援します。

## 提供している型定義

OpenRTB v2.5用の型定義
OpenRTB v2.6用の型定義
IAB Category（広告カテゴリー）の列挙型（Enum）定義

## インストール

各バージョンの型定義を個別にインストールできます：

2.5:
```bash
npm install @openrtb-typings/v2.5
```

2.6:
```bash
npm install @openrtb-typings/v2.6
```

IAB Category
```bash
npm install @openrtb-typings/iab-category
```

## 推奨インストール方法

バンドルサイズの最適化のため、v2.5とv2.6のパッケージはas const patternを使用したIAB Categoryパッケージと連携するように設計されています。
完全な機能を利用するには、以下のように関連パッケージを一緒にインストールすることを推奨します：

2.5:
```bash
npm install @openrtb-typings/v2.5 @openrtb-typings/iab-category
```

2.6:
```bash
npm install @openrtb-typings/v2.6 @openrtb-typings/iab-category
```

## 詳細ドキュメント

各パッケージの詳細な仕様方法について、以下のドキュメントをご参照ください。

- [OpenRTB v2.5の使用方法](./packages/v2.5/README.md)
- [OpenRTB v.2.6の使用方法](./packages/v2.6)
- [OpenRTB IAB Categoryの使用方法](./packages/iab-category)
