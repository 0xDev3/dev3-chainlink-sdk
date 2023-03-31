import { BigNumber } from "ethers";
export interface PriceFeedModel {
    address: string;
    name: string;
    assetName: string;
    feedType: string;
    decimals?: string;
}
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
