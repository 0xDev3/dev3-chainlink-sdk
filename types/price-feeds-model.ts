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

// address: "0x01A1F73b1f4726EB6EB189FFA5CBB91AF8E14025",
//                     name: "JPY / USD",
//                     assetName: "Japanese Yen",
//                     feedType: "Forex"

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