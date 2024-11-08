# OpenRTB v2.6 Type Definitions

This package provides TypeScript type definitions for OpenRTB v2.6. It allows you to handle programmatic advertising bid requests and responses while ensuring type safety.

## Installation

```bash
npm install @openrtb-typings/v2.6
```

For bundle size optimization, IAB Category definitions are provided as a separate package:

```bash
npm install @openrtb-typings/iab-category
```

To install both packages together:

```bash
npm install @openrtb-typings/v2.6 @openrtb-typings/iab-category
```

## Documentation

### BidRequest

Type definitions related to bid requests.

```typescript
// Usage example
import { BidRequest, App, Site } from '@openrtb-typings/v2.6';

// Creating a type-safe bid request
const request: BidRequest = {
  id: "bid-request-123",
  imp: [{
    id: "1",
    // ...
  }]
};
```

Provided type definitions:

- `App`: Mobile application related information
- `Audio`: Audio ad specifications
- `Banner`: Banner ad specifications
- `BidRequest`: Root element of bid request
- `Content`: Information about content where ad is displayed
- `Data`: User data segments
- `Device`: Device information
- `Geo`: Geographic information
- `Imp`: Impression (ad slot) details
- `Metric`: KPI metrics
- `Native`: Native ad specifications
- `Pmp`: Private marketplace settings
- `Publisher`: Publisher information
- `Regs`: Regulatory information (extended in v2.6)
- `Site`: Website related information
- `Source`: Bid request delivery path information
- `User`: User information (extended in v2.6)
- `Video`: Video ad specifications (extended in v2.6)

For details, refer to the [OpenRTB v2.6 documentation](https://iabtechlab.com/wp-content/uploads/2022/04/OpenRTB-2-6_FINAL.pdf).

### BidResponse

Type definitions related to bid responses, including major changes in v2.6.

Provided type definitions:

`Bid`: Individual bid information (extended in v2.6)
`BidResponse`: Root element of bid response
`SeatBid`: Bidder group

### Enum

Provides enums and constants used in the OpenRTB v2.6 protocol, including items added and updated in v2.6.

```typescript
// Usage example
import { APIFramework, CreativeAttribute } from '@openrtb-typings/v2.6';

const framework: APIFramework = APIFramework.VPAID_2_0;
const attribute: CreativeAttribute = CreativeAttribute.AUDIO_AUTO_PLAY;
```

#### Ad Display Related

- `BannerAdType`
    - Indicates banner ad types (e.g., XHTML, HTML5)
    - Specifies ad creative rendering method

- `CreativeAttribute`
    - Ad creative characteristics (audio autoplay, expandable, etc.)
    - Includes attributes added in v2.6
    - Defines constraints on ad behavior and display methods

- `AdPosition`
    - Ad display position (page top, bottom, sidebar, etc.)
    - Specifies placement information affecting viewability

- `ExpandableDirection`
    - Direction of ad expansion (left, right, up, down, fullscreen)
    - Controls interactive ad behavior direction

#### API & Protocol Related

- `APIFramework`
    - Ad execution environment (VPAID, MRAID, OMID, etc.)
    - Includes new frameworks added in v2.6
    - Specifies API framework required for creative execution

- `Protocol`
    - Video ad delivery protocol (VAST 4.0, DAAST)
    - Includes latest versions compatible with v2.6
    - Specifies version-specific ad delivery standards

#### Video Ad Related

- `VideoLinearity`
    - Video ad display format (linear/non-linear)
    - Defines relationship with main content

- `VideoPlacement`
    - Video ad placement type (in-stream, in-banner, etc.)
    - Includes new placement options added in v2.6
    - Specifies video ad display context

- `PlaybackMethod`
    - Video playback start method (autoplay, click-to-play, etc.)
    - Controls playback behavior affecting user experience

- `PlaybackCessationMode`
    - Video ad end conditions (on completion, on user action, etc.)
    - Controls ad playback end timing

- `StartDelay`
    - Video ad start timing (pre-roll, mid-roll, post-roll)
    - Defines temporal relationship with main content

#### Quality & Content Related

- `ProductionQuality`
    - Content production quality (professional, user-generated, etc.)
    - Indicates quality level of ad placement environment

- `CompanionType`
    - Companion ad type (static image, HTML, etc.)
    - Includes new types added in v2.6
    - Specifies format of supplementary ads accompanying main ad

- `ContentDeliveryMethod`
    - Content delivery method (streaming, progressive download)
    - Specifies technical delivery method

- `FeedType`
    - Content feed type (music, radio, podcast, etc.)
    - Includes new feed types added in v2.6
    - Specifies media type where ad is inserted

- `VolumeNormalizationMode`
    - Volume normalization method
    - Specifies ad audio control method

- `ContentContext`
    - Content context (game, music, news, etc.)
    - Indicates category of ad display environment

- `IQGMediaRating`
    - Media content quality rating
    - Rating based on IAB quality standards compatible with v2.6

#### Device & Location Related

- `LocationType`
    - Location information acquisition method (GPS, IP address estimation, etc.)
    - Includes new location acquisition methods added in v2.6
    - Indicates geographic information accuracy and reliability

- `DeviceType`
    - Device type (mobile, PC, CTV, etc.)
    - Includes new device types added in v2.6
    - Specifies ad display device characteristics

- `ConnectionType`
    - Network connection type (WiFi, 5G, etc.)
    - Includes connection types updated in v2.6
    - Affects quality and types of deliverable ads

- `IPLocationService`
    - IP location service provider
    - Specifies geographic information data source

#### Bidding Related

- `NoBidReasonCode`
    - Reasons for not participating in bid (technical error, no inventory, invalid request, etc.)
    - Includes new reason codes added in v2.6
    - Used for debugging and optimization

- `LossReasonCode`
    - Reasons for bid failure (insufficient price, delay, etc.)
    - Includes new failure reasons added in v2.6
    - Used for improving bidding strategy

#### Privacy Related (Added in v2.6)

- `ConsentCategory`
    - User consent categories
    - Defines types of consent related to privacy regulations

- `DataDisclosure`
    - Data disclosure levels
    - Specifies data usage restrictions based on privacy requirements