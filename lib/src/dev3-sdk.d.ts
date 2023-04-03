import { PriceFeedItemModel, PriceFeedModel, RoundDataModel } from "../types/price-feeds-model";
export declare class Dev3ChainlinkSDK<T extends PriceFeedModel> {
    feeds: T;
    private _aggregatorV3Interface;
    private _provider;
    constructor(rpcURL: string, feeds: T);
    getFromOracle(feed: PriceFeedItemModel): Promise<RoundDataModel>;
}
