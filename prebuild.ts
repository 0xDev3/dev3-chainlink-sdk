import * as fs from 'fs'
import ethPriceFeeds from './cl-price-feeds/price-feeds-eth.json'
import bscPriceFeeds from './cl-price-feeds/price-feeds-bsc.json'
import avaxPriceFeeds from './cl-price-feeds/price-feeds-avalanche.json'

import * as Mustache from 'mustache'

function createFile(networkName: string, view: any, networkID: number) {
    const feed = Mustache.render(
        `
        import { PriceFeedItemModel, PriceFeedModel } from "../types/price-feeds-model"
    
    
        export class PriceFeeds${networkName.charAt(0).toUpperCase() + networkName.slice(1)} implements PriceFeedModel {

            network = ${networkID}

            {{#feeds}}
                {{path}}: PriceFeedItemModel = {
                    address: "{{contractAddress}}",
                    name: "{{{name}}}",
                    assetName: "{{assetName}}",
                    feedType: "{{feedType}}"
                }
    
            {{/feeds}}
        }`, view
    )
    fs.writeFile(`./data-feeds/${networkName.toLowerCase()}-data-feed.ts`, feed, () => {
        console.log("done")
    })
}


const ethView = {
    feeds: ethPriceFeeds.map(feed => {
        return {...feed, path: feed.path.replace("1", "one").replace(".","")
            .split("-")
            .map(x => x.toUpperCase()).join("_")} 
    })
}

const bscView = {
    feeds: bscPriceFeeds.map(feed => {
        return {...feed, path: feed.path.replace("1", "one").replace(".","")
            .split("-")
            .map(x => x.toUpperCase()).join("_")} 
    })
}

const avaxView = {
    feeds: avaxPriceFeeds.map(feed => {
        return {...feed, path: feed.path.replace("1", "one").replace(".","")
            .split("-")
            .map(x => x.toUpperCase()).join("_")} 
    })
}

createFile("ETH", ethView, 1)
createFile("BSC", bscView, 56)
createFile("AVAX", avaxView, 43114)
