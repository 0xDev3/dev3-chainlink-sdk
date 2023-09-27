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
    roundID: BigInt,
    answer: BigInt,
    formattedAnswer?: string,
    startedAt: BigInt,
    updatedAt: BigInt,
    answeredInRound: BigInt
    assetName?: string
    dataFeedName?: string
}
