import { ethers, JsonRpcProvider } from 'ethers';
import { PriceFeedItemModel, PriceFeedModel, RoundDataModel } from "../types/price-feeds-model"

import { PriceFeedsETH } from "../data-feeds/eth-data-feed";
import { PriceFeedsAVAX } from "../data-feeds/avax-data-feed";
import { PriceFeedsBSC } from "../data-feeds/bsc-data-feed";

export {
    PriceFeedModel,
    PriceFeedsETH,
    PriceFeedsAVAX,
    PriceFeedsBSC
}

export class Dev3ChainlinkSDK<T extends PriceFeedModel> {

    feeds: T

    private _aggregatorV3Interface = [
        "function decimals() external view returns (uint8)",
        "function description() external view returns (string memory)",
        "function version() external view returns (uint256)",
        "function getRoundData(uint80 _roundId) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)",
        "function latestRoundData() external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"
    ]

    private _provider;

    constructor(rpcURL: string, feeds: T) {
        this._provider = new JsonRpcProvider(rpcURL, feeds.network)
        this.feeds = feeds
    }

    async getFromOracle(feed: PriceFeedItemModel) {
        const AggregatorV3Contract = new ethers.Contract(
            feed.address, 
            this._aggregatorV3Interface, 
            this._provider
        )
        const roundData = await AggregatorV3Contract.latestRoundData()
        const mappedData: RoundDataModel = {
            roundID: roundData[0],
            answer: roundData[1],
            startedAt: roundData[2],
            updatedAt: roundData[3],
            answeredInRound: roundData[4],
            dataFeedName: feed.name ?? ""
        }
        return mappedData
    }
}
