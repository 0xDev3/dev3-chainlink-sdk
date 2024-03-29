# Dev3 Chainlink SDK

Dev3 Chainlink SDK is a fully open source Typescript SDK which enables any frontend developer to fetch the prices of various assets through Chainlink DataFeeds.
Users can fetch price pairs, NFT floor price information & more...

## Getting started

Install the SDK by typing in your npm project (Angular, React, vanilla npm, ...)

```sh
npm install dev3-chainlink-feeds
```

In your JavaScript or TypeScript file import the SDK with:

```ts
import { Dev3ChainlinkSDK } from 'dev3-chainlink-feeds'
```

Then import all the Price Feeds you want:

```ts
import { PriceFeedsETH } from 'dev3-chainlink-feeds'
import { PriceFeedsAVAX } from 'dev3-chainlink-feeds'
import { PriceFeedsBSC } from 'dev3-chainlink-feeds'
```

Initialize the SDK by calling:

```ts
const ethSDK = new Dev3ChainlinkSDK('https://rpc-node-url.xx', new PriceFeedsETH())
const avaxSDK = new Dev3ChainlinkSDK('https://avax-rpc-url.xx', new PriceFeedsAVAX())
```

And simply fetch a price pair by calling the price feeds functionality on the SDK:

```ts
ethSDK.getFromOracle(ethSDK.feeds.AAVE_ETH).then(res => { console.log(res) })
```

## Modern development

Dev3 Chainlink SDK extracts all the pair contracts addresses for all networks that are compatible into code generated classes, so all 
modern editors will support full code autocomplete.

![Screenshot 2023-03-31 at 17 48 26](https://user-images.githubusercontent.com/42938691/229169473-409e6fec-d183-416c-b0b3-db12f34fcf3c.png)

## Reading data

The data is returned in the form of an RoundDataModel object:

```ts
export interface RoundDataModel {
    roundID: BigNumber;
    answer: BigNumber;
    formattedAnswer?: string;
    startedAt: BigNumber;
    updatedAt: BigNumber;
    answeredInRound: BigNumber;
    assetName?: string;
    dataFeedName?: string;
}
```

## Example app

Take a look at [Example React App](https://github.com/0xDev3/chainlink-sdk-example-react-app) too see how to use Chainlink Dev3 SDK inside your project!

## License

Dev3 Chainlink SDK is fully open source, clonable & re-usable. Dev3 retains no rights to the code or implementations. 
