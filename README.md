# OpenRTB Typings

OpenRTB Typings is a type definition package for the OpenRTB (Real-Time Bidding) specification. By using TypeScript, it ensures type safety during development and helps with early bug detection.

## Provided Type Definitions

- Type definitions for OpenRTB v2.5
- Type definitions for OpenRTB v2.6
- Enum definitions for IAB Categories

## Installation

You can install type definitions for each version separately:

v2.5:
```bash
npm install @openrtb-typings/v2.5
```

v2.6:
```bash
npm install @openrtb-typings/v2.6
```

IAB Category:
```bash
npm install @openrtb-typings/iab-category
```

## Recommended Installation Method

For bundle size optimization, v2.5 and v2.6 packages are designed to work with the IAB Category package using the 'as const' pattern.
To utilize full functionality, it is recommended to install related packages together as follows:

v2.5:
```bash
npm install @openrtb-typings/v2.5 @openrtb-typings/iab-category
```

v2.6:
```bash
npm install @openrtb-typings/v2.6 @openrtb-typings/iab-category
```

## Detailed Documentation

For detailed usage specifications of each package, please refer to the following documentation:

- [How to use OpenRTB v2.5](./packages/v2.5/README.md)
- [How to use OpenRTB v2.6](./packages/v2.6)
- [How to use OpenRTB IAB Category](./packages/iab-category)