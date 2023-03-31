import * as fs from 'fs'
import ethPriceFeeds from './cl-price-feeds/price-feeds-eth.json'
import * as Mustache from 'mustache'

function capitalizeFirstLetter(item: string) {
    return item.charAt(0).toUpperCase() + item.slice(1);
}


const view = {
    feeds: ethPriceFeeds.map(feed => {
        return {...feed, path: feed.path.replace("1", "one")
            .split("-")
            .map(x => x.toUpperCase()).join("_")} 
    })
}


const output = Mustache.render(
    `
    import { PriceFeedModel } from "../types/price-feeds-model"

    export class PriceFeeds {
        {{#feeds}}
            static {{path}}: PriceFeedModel = {
                address: "{{contractAddress}}",
                name: "{{{name}}}",
                assetName: "{{assetName}}",
                feedType: "{{feedType}}"
            }

        {{/feeds}}
    }`, view
)

fs.writeFile("./data-feeds/eth-data-feed.ts", output, () => {
    console.log("done")
})






