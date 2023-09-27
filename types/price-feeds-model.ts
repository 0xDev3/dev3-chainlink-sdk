import { BigNumber } from "ethers"

export interface PriceFeedItemModel {
    address: string
    name: string
    assetName: string
    feedType: string
}

export interface PriceFeedModel {
    network: number
}

export interface RoundDataModel {
    roundID: BigNumber,
    answer: BigNumber,
    formattedAnswer?: string,
    startedAt: BigNumber,
    updatedAt: BigNumber,
    answeredInRound: BigNumber
    assetName?: string
    dataFeedName?: string
}
