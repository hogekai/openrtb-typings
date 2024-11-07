# OpenRTB v2.5 Type Definitions

OpenRTB v2.5のTypeScript型定義を提供するパッケージです。型安全性を確保しながら、プログラマティック広告の入札リクエストとレスポンスを扱うことができます。

## インストール

```ch
npm install @openrtb-typings/v2.5
```

バンドルサイズの最適化のため、IAB Categoryの定義は別パッケージとして提供しています。

```ch
npm install @openrtb-typings/iab-category
```

一緒にインストールする場合:

```ch
npm install @openrtb-typings/v2.5 @openrtb-typings/iab-category
```

## ドキュメント

### BidRequest

入札リクエストに関連する型定義群です。

```typescript
// 使用例
import { BidRequest, App, Site } from '@openrtb-typings/v2.5';

// 型安全な入札リクエストの作成
const request: BidRequest = {
  id: "bid-request-123",
  imp: [{
    id: "1",
    // ...
  }]
};
```

提供している型定義：

`App`: モバイルアプリケーション関連の情報
`Audio`: 音声広告のスペック
`Banner`: バナー広告のスペック
`BidRequest`: 入札リクエストのルート要素
`Content`: 広告が表示されるコンテンツの情報
`Data`: ユーザーデータセグメント
`Device`: デバイス情報
`Geo`: 地理情報
`Imp`: Impression（広告表示枠）の詳細
`Metric`: KPIメトリクス
`Native`: ネイティブ広告のスペック
`Pmp`: プライベートマーケットプレイスの設定
`Publisher`: パブリッシャー情報
`Regs`: 規制関連の情報
`Site`: Webサイト関連の情報
`Source`: 入札リクエストの配信経路情報
`User`: ユーザー情報
`Video`: 動画広告のスペック

詳細は[OpenRTB v2.5ドキュメント](https://www.iab.com/wp-content/uploads/2016/03/OpenRTB-API-Specification-Version-2-5-FINAL.pdf)を参照してください。

### BidResponse

入札レスポンスに関連する型定義群です。

提供している型定義：

`Bid`: 個別の入札情報
`BidResponse`: 入札レスポンスのルート要素
`SeatBid`: 入札者グループ

### Enum

OpenRTBプロトコルで使用される列挙型と定数を提供します。

```typescript
// 使用例
import { APIFramework, CreativeAttribute } from '@openrtb-typings/v2.5';

const framework: APIFramework = APIFramework.VPAID_1_0;
const attribute: CreativeAttribute = CreativeAttribute.AUDIO_AUTO_PLAY;
```

#### 広告表示関連

- `BannerAdType`
    - バナー広告の種類を示す（例: XHTML, HTML5など）
    - 広告クリエイティブのレンダリング方式を指定

- `CreativeAttribute`
    - 広告クリエイティブの特性（音声自動再生、展開可能など）
    - 広告の動作や表示方法に関する制約を定義

- `AdPosition`
    - 広告の表示位置（ページ上部、下部、サイドバーなど）
    - ビューアビリティに影響する配置情報を指定

- `ExpandableDirection`
    - 広告が展開する方向（左、右、上、下、フルスクリーン）
    - インタラクティブ広告の動作方向を制御

#### API・プロトコル関連

- `APIFramework`
    - 広告実行環境（VPAID、MRAID、OMIDなど）
    - クリエイティブの実行に必要なAPIフレームワークを指定


- `Protocol`
    - 動画広告配信プロトコル（VAST、DAAST）
    - バージョン別の広告配信規格を指定


#### 動画広告関連

- `VideoLinearity`
    - 動画広告の表示形式（リニア/ノンリニア）
    - メインコンテンツとの関係性を定義

- `VideoPlacement`
    - 動画広告の配置タイプ（インストリーム、インバナーなど）
    - 動画広告の表示コンテキストを指定

- `PlaybackMethod` 
    - 動画再生の開始方法（自動再生、クリック開始など）
    - ユーザーエクスペリエンスに影響する再生挙動を制御

- `PlaybackCessationMode`
    - 動画広告の終了条件（完了時、ユーザーアクション時など）
    - 広告再生の終了タイミングを制御

- `StartDelay`
    - 動画広告の開始タイミング（プリロール、ミッドロール、ポストロール）
    - メインコンテンツとの時間的関係を定義

#### 品質・コンテンツ関連

- `ProductionQuality`
    - コンテンツの制作品質（プロフェッショナル、ユーザー生成など）
    - 広告掲載環境の品質レベルを示す

- `CompanionType`
    - コンパニオン広告のタイプ（静的画像、HTML等）
    - 主広告に付随する補助的な広告の形式を指定

- `ContentDeliveryMethod`
    - コンテンツ配信方式（ストリーミング、プログレッシブダウンロード）
    - 技術的な配信方式を指定

- `FeedType`
    - コンテンツフィードの種類（音楽、ラジオ、ポッドキャストなど）
    - 広告が挿入されるメディアタイプを指定

- `VolumeNormalizationMode`
    - 音量の正規化方式
    - 広告音声の制御方法を指定

- `ContentContext`
    - コンテンツのコンテキスト（ゲーム、音楽、ニュースなど）
    - 広告表示環境のカテゴリを示す

- `IQGMediaRating`
    - メディアコンテンツの品質評価
    - IABの品質基準に基づく格付け

#### デバイス・位置情報関連

- `LocationType`
    - 位置情報の取得方法（GPS、IPアドレス推定など）
    - 地理情報の精度と信頼性を示す

- `DeviceType`
    - デバイスの種類（モバイル、PC、CTVなど）
    - 広告表示デバイスの特性を指定

- `ConnectionType`
    - ネットワーク接続タイプ（WiFi、セルラーなど）
    - 配信可能な広告の品質や種類に影響

- `IPLocationService`
    - IP位置情報サービスプロバイダ
    - 地理情報データの提供元を指定

#### 入札関連

- `NoBidReasonCode`
    - 入札不参加の理由（技術エラー、在庫なし、無効リクエストなど）
    - デバッグや最適化に使用

- `LossReasonCode`
    - 入札失敗の理由（価格不足、遅延など）
    - 入札戦略の改善に使用
