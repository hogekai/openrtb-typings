# OpenRTB Typings

This repository contains TypeScript type definitions for the OpenRTB (Real-Time Bidding) protocol. It aims to provide accurate and up-to-date type information for developers working with OpenRTB in TypeScript projects.

## Supported Versions

Currently, this project supports the following OpenRTB versions:

- [OpenRTB 2.5](./packages/v2.5)

## Installation

To install the type definitions for a specific OpenRTB version, use npm:

```bash
npm install @openrtb-typings/v2.5
```

## Usage

After installation, you can import and use the types in your TypeScript project:

```typescript
import { BidRequest, BidResponse } from '@openrtb-typings/v2.5';

const bidRequest: BidRequest = {
  // ... your bid request object
};

const bidResponse: BidResponse = {
  // ... your bid response object
};
```

## Documentation

For detailed information about each supported OpenRTB version, please refer to the README in the respective package directory:

- [OpenRTB 2.5 Documentation](./packages/v2.5/README.md)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenRTB Specification: [https://www.iab.com/guidelines/openrtb/](https://www.iab.com/guidelines/openrtb/)