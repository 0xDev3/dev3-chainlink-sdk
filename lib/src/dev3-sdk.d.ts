import { ETHPriceFeeds } from '../data-feeds/eth-data-feed';
import { PriceFeedModel, RoundDataModel } from "../types/price-feeds-model";
export declare class Dev3ChainlinkSDK {
    ethFeeds: typeof ETHPriceFeeds;
    private _aggregatorV3Interface;
    private _provider;
    constructor(rpcURL: string);
    getFromOracle(feed: PriceFeedModel): Promise<RoundDataModel>;
}
