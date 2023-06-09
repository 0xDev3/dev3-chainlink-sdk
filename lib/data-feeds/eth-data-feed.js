"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceFeedsETH = void 0;
var PriceFeedsETH = /** @class */ (function () {
    function PriceFeedsETH() {
        this.network = 1;
        this.JPY_USD = {
            address: "0x01A1F73b1f4726EB6EB189FFA5CBB91AF8E14025",
            name: "JPY / USD",
            assetName: "Japanese Yen",
            feedType: "Forex"
        };
        this.UST_USD = {
            address: "0x01b87e7fF78022A70394d3C6Dd127D0c709e3beA",
            name: "UST / USD",
            assetName: "Terra USD",
            feedType: "Crypto"
        };
        this.FOX_USD = {
            address: "0x02E59cE2921e982A481c6ddb709B76C33397Eb14",
            name: "FOX / USD",
            assetName: "Shapeshift FOX",
            feedType: "Crypto"
        };
        this.EUR_USD = {
            address: "0x02F878A94a1AE1B15705aCD65b5519A46fe3517e",
            name: "EUR / USD",
            assetName: "Euro",
            feedType: "Forex"
        };
        this.OCEAN_USD = {
            address: "0x06812A2035BDa4707107539725902e065622CEE7",
            name: "OCEAN / USD",
            assetName: "Ocean Protocol",
            feedType: "Crypto"
        };
        this.SNX_USD = {
            address: "0x06ce8Be8729B6bA18dD3416E3C223a5d4DB5e755",
            name: "SNX / USD",
            assetName: "Synthetix Network",
            feedType: "Crypto"
        };
        this.SPELL_USD = {
            address: "0x070f15084600Aceace6D639CDDd0e341975D1e30",
            name: "SPELL / USD",
            assetName: "Spell Token",
            feedType: "Crypto"
        };
        this.GTC_ETH = {
            address: "0x0E27a36B2dFc0935A99Ba0c9C8E0F764c2da606C",
            name: "GTC / ETH",
            assetName: "GitCoin",
            feedType: "Crypto"
        };
        this.HBAR_USD = {
            address: "0x0F486F358b3D04AeA6800eFa260e01286d8A50F1",
            name: "HBAR / USD",
            assetName: "Hedera Hashgraph",
            feedType: "Crypto"
        };
        this.GBPT_POR = {
            address: "0x0a0aba8efAB65fDD3fa7e6afcb8128bCd6ffbdBF",
            name: "GBPT PoR",
            assetName: "British Pound (GBP)",
            feedType: "Fiat"
        };
        this.ETC_USD = {
            address: "0x0c7907d97B7F708Ecda1A0B3124D32cd8b1e3920",
            name: "ETC / USD",
            assetName: "Ethereum Classic",
            feedType: "Crypto"
        };
        this.WTI_USD = {
            address: "0x0dEaf87519D434DCF74551B2E907aF18D2304946",
            name: "WTI / USD",
            assetName: "WTI Crude",
            feedType: "Commodities"
        };
        this.BRL_USD = {
            address: "0x0eBDc65E7e9132Cb41ac5cbD0101B799D7aDb475",
            name: "BRL / USD",
            assetName: "Brazilian Real",
            feedType: "Forex"
        };
        this.ETH_BTC = {
            address: "0x0f00392FcB466c0E4E4310d81b941e07B4d5a079",
            name: "ETH / BTC",
            assetName: "Ethereum",
            feedType: "Crypto"
        };
        this.AVAX_USD = {
            address: "0x0fC3657899693648bbA4dbd2d8b33b82E875105D",
            name: "AVAX / USD",
            assetName: "Avalanche",
            feedType: "Crypto"
        };
        this.PLA_USD = {
            address: "0x10341666434880065495f5b3C69621CcAc43bc82",
            name: "PLA / USD",
            assetName: "Playdapp",
            feedType: "Crypto"
        };
        this.SUSD_USD = {
            address: "0x1187272A0E3A603eC4734CeC73a0880055eCC593",
            name: "sUSD / USD",
            assetName: "sUSD (Synthetix)",
            feedType: "Crypto"
        };
        this.EURS_RESERVES = {
            address: "0x14EAf768906587468f438755CfFb91227C14B8E5",
            name: "EURS RESERVES",
            assetName: "Euro (EUR)",
            feedType: "Fiat"
        };
        this.IDR_USD = {
            address: "0x156710f56dC5F0C022505A9ffE95b0b51A7c5c9A",
            name: "IDR / USD",
            assetName: "Indonesian Rupiah",
            feedType: "Forex"
        };
        this.DAI_ETH = {
            address: "0x158228e08C52F3e2211Ccbc8ec275FA93f6033FC",
            name: "DAI / ETH",
            assetName: "DAI",
            feedType: "Crypto"
        };
        this.SRM_ETH = {
            address: "0x162aa56EF75ab11cE2573ECe62B579f4B40A58dB",
            name: "SRM / ETH",
            assetName: "Serum",
            feedType: "Crypto"
        };
        this.AXS_ETH = {
            address: "0x16423B2B6873225e26564b182b3318aFCdBFcade",
            name: "AXS / ETH",
            assetName: "Axie Infinity",
            feedType: "Crypto"
        };
        this.MIM_USD = {
            address: "0x18f0112E30769961AF90FDEe0D1c6B27E6d72D92",
            name: "MIM / USD",
            assetName: "Magic Internet Money",
            feedType: "Crypto"
        };
        this.MUTANTAPES_FLOOR_ETH = {
            address: "0x19Dfc7d6262D609fedA883C08BaF3F5273E5bCC3",
            name: "JPEGd Mutant Ape Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.CAKE_USD = {
            address: "0x1C026C25271c1bFbA95B65c848F734a23eA62D4e",
            name: "CAKE / USD",
            assetName: "Pancakeswap",
            feedType: "Crypto"
        };
        this.FEI_USD = {
            address: "0x1D244648d5a63618751d006886268Ae3550d0Dfd",
            name: "FEI / USD",
            assetName: "FEI Protocol",
            feedType: "Crypto"
        };
        this.MOONBIRDS_FLOOR_ETH = {
            address: "0x1D34488e7e347e1F1F7ca6E8d7Ec9Ab4b912E85a",
            name: "JPEGd Moonbirds Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.INJ_USD = {
            address: "0x1a4E4B344125E7ef78de22b55FCeF5a4bc45f605",
            name: "INJ / USD",
            assetName: "Injective Protocol",
            feedType: "Crypto"
        };
        this.FTT_ETH = {
            address: "0x2006d56F8DDB210ad009cf8d71aEe4F6488cFA49",
            name: "FTT / ETH",
            assetName: "FTX Token",
            feedType: "Crypto"
        };
        this.TOMO_USD = {
            address: "0x20086D92838C475fc3aDE8B745EfB33213793080",
            name: "TOMO / USD",
            assetName: "Tomochain",
            feedType: "Crypto"
        };
        this.YFII_ETH = {
            address: "0x20dF77bB4cE1478e89a7461CAcE8dc016f9198e4",
            name: "YFII / ETH",
            assetName: "YFII Finance",
            feedType: "Crypto"
        };
        this.RARI_ETH = {
            address: "0x25C32A551C188Cb88a7067c254905191e83C712C",
            name: "RARI / ETH",
            assetName: "Rarible",
            feedType: "Crypto"
        };
        this.BTC_DIFFICULTY = {
            address: "0x2659dbe2d2E6F88063027Af4eEc9D1D1b2fc9789",
            name: "BTC Difficulty",
            assetName: "Bitcoin mining difficulty",
            feedType: "Crypto"
        };
        this.CHROMIE_FLOOR_ETH = {
            address: "0x271C5B4542eEEb78b08681D30168B4E4359a893e",
            name: "JPEGd Chromie Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.LUSD_USD = {
            address: "0x27b97a63091d185cE056e1747624b9B92BAAD056",
            name: "LUSD / USD",
            assetName: "Liquity USD",
            feedType: "Crypto"
        };
        this.SWAP_ETH = {
            address: "0x29236dFcae0aEE2D6da157F3B6835830c75875Ad",
            name: "SWAP / ETH",
            assetName: "Trustswap",
            feedType: "Crypto"
        };
        this.GNO_ETH = {
            address: "0x299e74895b4De8dF505C43146D0555983859034B",
            name: "GNO / ETH",
            assetName: "Gnosis",
            feedType: "Crypto"
        };
        this.ARPA_USD = {
            address: "0x29D9CEA993A2d54B1C959cCF233023B853098ac8",
            name: "ARPA / USD",
            assetName: "ARPA Chain",
            feedType: "Crypto"
        };
        this.RAI_USD = {
            address: "0x2Abfc56AaA39be7a946ec39aAC5d452e30614dF1",
            name: "RAI / USD",
            assetName: "RAI Reflex Index",
            feedType: "Crypto"
        };
        this.ATOM_ETH = {
            address: "0x2E3Bc7624a3B44954b53e08c436be44f7f16fD00",
            name: "ATOM / ETH",
            assetName: "Cosmos",
            feedType: "Crypto"
        };
        this.BAL_ETH = {
            address: "0x2f2c0C1727Ce8C429A237DDFBBb87357893fBD5D",
            name: "BAL / ETH",
            assetName: "Balancer",
            feedType: "Crypto"
        };
        this.OTHERDEED_FLOOR_ETH = {
            address: "0x308b6ECf13e90Ba323aFC9c678B13A94f84F77ca",
            name: "JPEGd Otherdeed Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.CSPR_USD = {
            address: "0x30F3037f0E13d6bdeD3c5B7809994F47e9656b4a",
            name: "CSPR / USD",
            assetName: "Casper Network",
            feedType: "Crypto"
        };
        this.METIS_HC = {
            address: "0x31c8b5A8F0d286a4Bfcf669E18393b18E22B140D",
            name: "Metis Healthcheck",
            assetName: "",
            feedType: ""
        };
        this.INR_USD = {
            address: "0x32a54C3376BbD9f1A9F03500Ed54A6ae957eB9Da",
            name: "INR / USD",
            assetName: "Indian Rupee",
            feedType: "Forex"
        };
        this.DOGE_USD = {
            address: "0x33CCa8E7420114dB103d61bd39A72ff65E46352D",
            name: "DOGE / USD",
            assetName: "Dogecoin",
            feedType: "Crypto"
        };
        this.OMG_USD = {
            address: "0x34B41725Cf934866A4b89d65395F15af2Cb9aE89",
            name: "OMG / USD",
            assetName: "Omisego",
            feedType: "Crypto"
        };
        this.DODO_USD = {
            address: "0x3600713c848dE06c8346900E3deDd3CAc21c06ff",
            name: "DODO / USD",
            assetName: "Dodo",
            feedType: "Crypto"
        };
        this.FB_USD = {
            address: "0x365796aBDeC8b93963E76e4107417E71C46b22a0",
            name: "FB / USD",
            assetName: "Meta",
            feedType: "Equities"
        };
        this.DPI_ETH = {
            address: "0x36e4f71440EdF512EB410231e75B9281d4FcFC4c",
            name: "DPI / ETH",
            assetName: "DeFi Pulse Index",
            feedType: "Crypto"
        };
        this.BORING_USD = {
            address: "0x37674e9881f173D4f5441e6Fc7ed3C6Cf57435ce",
            name: "BORING / USD",
            assetName: "BoringDAO",
            feedType: "Crypto"
        };
        this.ETH_USD = {
            address: "0x37bC7498f4FF12C19678ee8fE19d713b87F6a9e6",
            name: "ETH / USD",
            assetName: "Ethereum",
            feedType: "Crypto"
        };
        this.BIT_USD = {
            address: "0x382db44bCfb92C398b93e5fF6Cc100FC321140c9",
            name: "BIT / USD",
            assetName: "BitDAO",
            feedType: "Crypto"
        };
        this.FLOW_USD = {
            address: "0x3C640c857f1fF57ff4E24CfF1924F14A9bB9F2Ad",
            name: "FLOW / USD",
            assetName: "Flow",
            feedType: "Crypto"
        };
        this.CRYPTOPUNKS_FLOOR_ETH = {
            address: "0x3D1fDFB6C9579D249d2bA6D85043C53Cac77fB3a",
            name: "JPEGd Cryptopunks Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.REN_USD = {
            address: "0x3d0bB55D0D2F255d7A0EAb8A53a91b3369728E36",
            name: "REN / USD",
            assetName: "Ren",
            feedType: "Crypto"
        };
        this.ZRX_USD = {
            address: "0x3d47eF9690Bd00C77c568b73140dC20F34453766",
            name: "ZRX / USD",
            assetName: "0x",
            feedType: "Crypto"
        };
        this.CRO_ETH = {
            address: "0x3dAfE91e795409576Ddb983D891E5fb5c61439a1",
            name: "CRO / ETH",
            assetName: "Cronos",
            feedType: "Crypto"
        };
        this.IMX_USD = {
            address: "0x3f00247Dc3bc14A8dCfA682318Ce566b1f34343A",
            name: "IMX / USD",
            assetName: "Immutable X",
            feedType: "Crypto"
        };
        this.TSLA_USD = {
            address: "0x404BE42e956990b1295cF2405F0945b942b32055",
            name: "TSLA / USD",
            assetName: "Tesla",
            feedType: "Equities"
        };
        this.N225_JPY = {
            address: "0x40c0bC7BFB90a29426121ba133A9352B84c5f2cF",
            name: "N225 / JPY",
            assetName: "Nikkei 225",
            feedType: "Equities"
        };
        this.GOOGL_USD = {
            address: "0x43cBd8be1EbD180107f1e0E8fAcD80941F0c5075",
            name: "GOOGL / USD",
            assetName: "Alphabet",
            feedType: "Equities"
        };
        this.COINBASE_DOODLES_FLOOR_PRICE = {
            address: "0x440C8fc45C7f00E09c2F437b95FC123888a3d951",
            name: "Doodles Floor Price",
            assetName: "Doodles",
            feedType: ""
        };
        this.COINBASE_WORLDOFWOMEN_FLOOR_PRICE = {
            address: "0x45B68d24Df514BF13a838d88bE4363F8011719de",
            name: "World of Women Floor Price",
            assetName: "World of Women",
            feedType: ""
        };
        this.SUSD_ETH = {
            address: "0x45bb69B89D60878d1e42522342fFCa9F2077dD84",
            name: "SUSD / ETH",
            assetName: "sUSD (Synthetix)",
            feedType: "Crypto"
        };
        this.MANA_ETH = {
            address: "0x46b77070f9256523c2F31c333b72C3E102f8A8A7",
            name: "MANA / ETH",
            assetName: "Decentraland",
            feedType: "Crypto"
        };
        this.MATIC_USD = {
            address: "0x4B35F7854e1fd8291f4EC714aC3EBB1DeA450585",
            name: "MATIC / USD",
            assetName: "Polygon (MATIC)",
            feedType: "Crypto"
        };
        this.UST_ETH = {
            address: "0x4a81f77C8BBcA2CbA8110279cDbC9F1A8D3eAE6B",
            name: "UST / ETH",
            assetName: "Terra USD",
            feedType: "Crypto"
        };
        this.OCEAN_ETH = {
            address: "0x4b75FE6e4a53A510AbC39c7328B0b06E74a3F624",
            name: "OCEAN / ETH",
            assetName: "Ocean Protocol",
            feedType: "Crypto"
        };
        this.FEI_ETH = {
            address: "0x4bE991B4d560BBa8308110Ed1E0D7F8dA60ACf6A",
            name: "FEI / ETH",
            assetName: "FEI Protocol",
            feedType: "Crypto"
        };
        this.TUSD_RESERVES = {
            address: "0x4d76Ae11EEF9cEf363300Abf66b599BDE4aBb33e",
            name: "TUSD PoR",
            assetName: "US Dollar (USD) Ethereum specific reserves",
            feedType: "Fiat"
        };
        this.XRP_USD = {
            address: "0x4d839a486EC0B1C9b0D9e9D397993Ba5B150cB34",
            name: "XRP / USD",
            assetName: "Ripple",
            feedType: "Crypto"
        };
        this.OGN_ETH = {
            address: "0x51aa283a37771B33101e88658C440951ee0AE02d",
            name: "OGN / ETH",
            assetName: "Origin Protocol",
            feedType: "Crypto"
        };
        this.FTSE_GBP = {
            address: "0x5306b60fe2598d268732Ffe1FA37065931DE127C",
            name: "FTSE / GBP",
            assetName: "FTSE 100",
            feedType: "Equities"
        };
        this.CAD_USD = {
            address: "0x549aE844Ab6B4a6Eb466F98dFFbc1FC9224e316d",
            name: "CAD / USD",
            assetName: "Canadian Dollar",
            feedType: "Forex"
        };
        this.FIDENZA_FLOOR_ETH = {
            address: "0x54d2AB141e69bfA42E0808fAdD40ba1135f8591b",
            name: "JPEGd Fidenza Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.BOND_ETH = {
            address: "0x5667eE03110045510897aDa33DC561cEfCBcC904",
            name: "BOND / ETH",
            assetName: "Barnbridge",
            feedType: "Crypto"
        };
        this.GBP_USD = {
            address: "0x568B8FD03992F56bF240958D22f5a6fcf7Bd850b",
            name: "GBP / USD",
            assetName: "Pound Sterling",
            feedType: "Forex"
        };
        this.FRAX_ETH = {
            address: "0x56f98706C14DF5C290b02Cec491bB4c20834Bb51",
            name: "FRAX / ETH",
            assetName: "FRAX",
            feedType: "Crypto"
        };
        this.BADGER_ETH = {
            address: "0x586524Ef790f7357c6cb8461b20d788Da14A636B",
            name: "BADGER / ETH",
            assetName: "Badger DAO",
            feedType: "Crypto"
        };
        this.BUSD_ETH = {
            address: "0x5952c7F1Ab270D22d677762Be3dAd0BA9e5cd23d",
            name: "BUSD / ETH",
            assetName: "Binance USD",
            feedType: "Crypto"
        };
        this.MEEBITS_FLOOR_ETH = {
            address: "0x5957c8962f9CA8BeDea67541F73aA72A5E90f9BF",
            name: "JPEGd Meebits Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.SYNTHETIX_AGGREGATOR_ISSUED_SYNTHS = {
            address: "0x59CCf62B862f99B5aEd8857FBAdB7F895f6c59D5",
            name: "Synthetix Aggregator Issued Synths",
            assetName: "",
            feedType: ""
        };
        this.CONSUMER_PRICE_INDEX = {
            address: "0x5a0efD6D1a058A46D3Ac4511861adB8F3540BD49",
            name: "Consumer Price Index",
            assetName: "Personal Consumption Expenditures (PCE) US Monthly Index",
            feedType: "Economic index"
        };
        this.KP3R_ETH = {
            address: "0x61B5793cd5f454D2B25bA1AcB5C1aA1728f67E1c",
            name: "KP3R / ETH",
            assetName: "Keep3r v1",
            feedType: "Crypto"
        };
        this.FRAX_USD = {
            address: "0x61eB091ea16A32ea5B880d0b3D09d518c340D750",
            name: "FRAX / USD",
            assetName: "FRAX",
            feedType: "Crypto"
        };
        this.KSM_USD = {
            address: "0x630163B84674B2B404fB6036A510574F259c5Cb7",
            name: "KSM / USD",
            assetName: "Kusama",
            feedType: "Crypto"
        };
        this.ORCHID_BANDWIDTH = {
            address: "0x63c856B816dCFA22FA403d8f62e0517DB6F3A891",
            name: "Orchid",
            assetName: "Orchid bandwidth",
            feedType: "Crypto"
        };
        this.FLUENT_US_POR = {
            address: "0x646d61986f45DEeC2477a3a355EdBA60B4C16D6B",
            name: "US+ PoR (Moonstone Bank)",
            assetName: "USD",
            feedType: "Fiat"
        };
        this.ZCN_USD = {
            address: "0x647323612C9daE101a69791710f4FEfD5Ef4a015",
            name: "ZCN / USD",
            assetName: "0Chain",
            feedType: "Crypto"
        };
        this.ALCX_ETH = {
            address: "0x64a119DCf78E7E3FcED89c429f6F47Bf0cd80250",
            name: "ALCX / ETH",
            assetName: "Alchemix",
            feedType: "Crypto"
        };
        this.PAXG_ETH = {
            address: "0x66d35ccD808317870198793a96b88ab69dCAe53B",
            name: "PAXG / ETH",
            assetName: "Pax Gold",
            feedType: "Crypto"
        };
        this.UNI_USD = {
            address: "0x68577f915131087199Fe48913d8b416b3984fd38",
            name: "UNI / USD",
            assetName: "Uniswap",
            feedType: "Crypto"
        };
        this.UMA_ETH = {
            address: "0x68a371D12213a1EbDd5fa9a2EE5519E6B73F1E37",
            name: "UMA / ETH",
            assetName: "Uma",
            feedType: "Crypto"
        };
        this.DYDX_USD = {
            address: "0x6A0cCCA35f6ca00146547B949233C63441B34d7a",
            name: "DYDX / USD",
            assetName: "dYdX",
            feedType: "Crypto"
        };
        this.ZRX_ETH = {
            address: "0x6B39588D2FC7990CC81544DFd4674C909E9EFeea",
            name: "ZRX / ETH",
            assetName: "0x",
            feedType: "Crypto"
        };
        this.CACHEGOLD_POR_USD = {
            address: "0x6CeA38508B186DE36AAfd0f3B513E708691bc0C4",
            name: "CacheGold PoR USD",
            assetName: "Gold in grams (g)",
            feedType: "Commodities"
        };
        this.COINBASE_BORED_APE_YACHT_CLUB_FLOOR_PRICE_ETH = {
            address: "0x6DBD8100fBbfF754831Aa90A53c466d431651885",
            name: "Bored Ape Yacht Club Floor Price / ETH",
            assetName: "Bored Ape Yacht Club",
            feedType: ""
        };
        this.GUSD_USD = {
            address: "0x6a805f2580b8D75d40331c26C074c2c42961E7F2",
            name: "GUSD / USD",
            assetName: "Gemini Dollar",
            feedType: "Crypto"
        };
        this.HBTC_POR = {
            address: "0x6aa553CB870a54BD62bb54E11f0B2c919925E726",
            name: "HBTC PoR",
            assetName: "BTC",
            feedType: "Crypto"
        };
        this.AMZN_USD = {
            address: "0x6e450877FCbFA655722ed5Df6902c979c099A852",
            name: "AMZN / USD",
            assetName: "Amazon",
            feedType: "Equities"
        };
        this.COMP_USD = {
            address: "0x6eaC850f531d0588c0114f1E93F843B78669E6d2",
            name: "COMP / USD",
            assetName: "Compound",
            feedType: "Crypto"
        };
        this.DASH_USD = {
            address: "0x7002049FDCa829ED7082EFA03860b078aD4B5Efe",
            name: "DASH / USD",
            assetName: "Dash",
            feedType: "Crypto"
        };
        this.STETH_ETH = {
            address: "0x716BB759A5f6faCdfF91F0AfB613133d510e1573",
            name: "STETH / ETH",
            assetName: "Lido Staked ETH",
            feedType: "Crypto"
        };
        this.ALPHA_ETH = {
            address: "0x71c8D42d35eD9276543FCa95d80Ae0858553Bf44",
            name: "ALPHA / ETH",
            assetName: "Alpha Finance",
            feedType: "Crypto"
        };
        this.APE_ETH = {
            address: "0x72002129A3834d63C57d157DDF069deE37b08F24",
            name: "APE / ETH",
            assetName: "APECoin",
            feedType: "Crypto"
        };
        this.CTSI_ETH = {
            address: "0x720192921a4b6fb026fA52bf03F991b65b740147",
            name: "CTSI / ETH",
            assetName: "Cartesi",
            feedType: "Crypto"
        };
        this.ATOM_USD = {
            address: "0x736E09DE064A2a461F197643A26bC1ab7Dc4D5D3",
            name: "ATOM / USD",
            assetName: "Cosmos",
            feedType: "Crypto"
        };
        this.BUSD_USD = {
            address: "0x73dc1b226f7DfAc353bdB41A27C4212213e6aF07",
            name: "BUSD / USD",
            assetName: "Binance USD",
            feedType: "Crypto"
        };
        this.MLN_ETH = {
            address: "0x751d87122c81f0eCe576338C400ebB978D039188",
            name: "MLN / ETH",
            assetName: "Melon",
            feedType: "Crypto"
        };
        this.GRT_ETH = {
            address: "0x7531f77095Bed9d63cB3E9EA305111a7DCE969A2",
            name: "GRT / ETH",
            assetName: "The Graph",
            feedType: "Crypto"
        };
        this.FTT_USD = {
            address: "0x75d22BEabc2365E039Cf3c6D9a9fFF925e7204d4",
            name: "FTT / USD",
            assetName: "FTX Token",
            feedType: "Crypto"
        };
        this.BORED_APE_KENNEL_CLUB_FLOOR_ETH = {
            address: "0x75e7c3D9ccDae31D560Aba6d34d6d47BbA814De8",
            name: "JPEGd Bored Ape Kennel Club Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.ENS_USD = {
            address: "0x780f1bD91a5a22Ede36d4B2b2c0EcCB9b1726a28",
            name: "ENS / USD",
            assetName: "Ethereum Name Service",
            feedType: "Crypto"
        };
        this.ORN_ETH = {
            address: "0x782EE2B86316d04F226Ba416d5dF5358a2D6102f",
            name: "ORN / ETH",
            assetName: "Orion Protocol",
            feedType: "Crypto"
        };
        this.FAST_GAS_GWEI = {
            address: "0x785433d8b06D77D68dF6be63944742130A4530d1",
            name: "Fast Gas / Gwei",
            assetName: "Fast Gas",
            feedType: "Crypto"
        };
        this.USDC_USD = {
            address: "0x789190466E21a8b78b8027866CBBDc151542A26C",
            name: "USDC / USD",
            assetName: "Circle USD",
            feedType: "Crypto"
        };
        this.LDO_ETH = {
            address: "0x7898AcCC83587C3C55116c5230C17a6Cd9C71bad",
            name: "LDO / ETH",
            assetName: "Lido DAO",
            feedType: "Crypto"
        };
        this.MANA_USD = {
            address: "0x7Be21AeF96E2FAeB8Dc0d07306814319cA034cad",
            name: "MANA / USD",
            assetName: "Decentraland",
            feedType: "Crypto"
        };
        this.CHF_USD = {
            address: "0x7C8719f3683585A242a67c73F6f3C98362004Da4",
            name: "CHF / USD",
            assetName: "Swiss Franc",
            feedType: "Forex"
        };
        this.USDT_ETH = {
            address: "0x7De0d6fce0C128395C488cb4Df667cdbfb35d7DE",
            name: "USDT / ETH",
            assetName: "Tether",
            feedType: "Crypto"
        };
        this.AUD_USD = {
            address: "0x7F7B323291C052De18926396176d384C4A8e19E2",
            name: "AUD / USD",
            assetName: "Australian Dollar",
            feedType: "Forex"
        };
        this.HT_USD = {
            address: "0x7a4297b2fd0Ba2F5687EFAC4df487B1C7B71392b",
            name: "HT / USD",
            assetName: "Huobi Token",
            feedType: "Crypto"
        };
        this.ANT_ETH = {
            address: "0x7b14dF2fb3e02215Fa5525aC8A5abdAaA6314aC0",
            name: "ANT / ETH",
            assetName: "Aragon",
            feedType: "Crypto"
        };
        this.CRV_ETH = {
            address: "0x7f67Ca2ce5299a67acd83D52A064C5b8e41dDb80",
            name: "CRV / ETH",
            assetName: "Curve DAO",
            feedType: "Crypto"
        };
        this.PAX_ETH = {
            address: "0x8034d486Fc2620F87A9C32a1fB746D20Ed9BFB96",
            name: "PAX / ETH",
            assetName: "Pax Dollar",
            feedType: "Crypto"
        };
        this.BADGER_USD = {
            address: "0x8093150EC164753994A1F65616E04Ae92a9Ef8c5",
            name: "BADGER / USD",
            assetName: "Badger DAO",
            feedType: "Crypto"
        };
        this.BTC_ETH = {
            address: "0x81076d6Ff2620Ea9Dd7bA9c1015f0d09A3A732E6",
            name: "BTC / ETH",
            assetName: "Bitcoin",
            feedType: "Crypto"
        };
        this.REQ_USD = {
            address: "0x8127087BaD4fd28e1DAcbAfc3d3040E701b2B9A2",
            name: "REQ / USD",
            assetName: "Request Network",
            feedType: "Crypto"
        };
        this.BAT_ETH = {
            address: "0x821f24DAcA9Ad4910c1EdE316D2713fC923Da698",
            name: "BAT / ETH",
            assetName: "Basic Attention Token",
            feedType: "Crypto"
        };
        this.BNT_USD = {
            address: "0x82263275FBF3fa92c6eE81632725b6BFbE4B02Da",
            name: "BNT / USD",
            assetName: "Bancor",
            feedType: "Crypto"
        };
        this.NMR_ETH = {
            address: "0x861334DEC28b3ba71DFFb1ABf4E57D4AD3964b5f",
            name: "NMR / ETH",
            assetName: "Numeraire",
            feedType: "Crypto"
        };
        this.KRW_USD = {
            address: "0x86e345D4113E1105053A81240C75b56B437dA6Ef",
            name: "KRW / USD",
            assetName: "Korean Won",
            feedType: "Forex"
        };
        this.OHM_ETH = {
            address: "0x87831da9319260B0B38dD39A73EBD4c2C10C588c",
            name: "OHM / ETH",
            assetName: "Olympus",
            feedType: "Crypto"
        };
        this.FARM_ETH = {
            address: "0x883Ba661FD9824778FF14a97F3A03eb324540201",
            name: "FARM / ETH",
            assetName: "Harvest Finance",
            feedType: "Crypto"
        };
        this.DNT_ETH = {
            address: "0x8A25A79dc89e594D2E1209797Bf874172d3168c9",
            name: "DNT / ETH",
            assetName: "District 0x",
            feedType: "Crypto"
        };
        this.ONT_USD = {
            address: "0x8B1668905367a2EFB610e7aA1DC6F4F26d1f7268",
            name: "ONT / USD",
            assetName: "Ontology",
            feedType: "Crypto"
        };
        this.YFI_USD = {
            address: "0x8a4D74003870064d41D4f84940550911FBfCcF04",
            name: "YFI / USD",
            assetName: "Yearn Finance",
            feedType: "Crypto"
        };
        this.OM_USD = {
            address: "0x8c318F865790CA448B99Cd22160089F921060d5b",
            name: "OM / USD",
            assetName: "Mantra DAO",
            feedType: "Crypto"
        };
        this.RAI_ETH = {
            address: "0x8d6d808eC1f8803b54e2286BD6992f5601fCF3a8",
            name: "RAI / ETH",
            assetName: "RAI Reflex Index",
            feedType: "Crypto"
        };
        this.CVX_USD = {
            address: "0x8d73Ac44Bf11CadCDc050BB2BcCaE8c519555f1a",
            name: "CVX / USD",
            assetName: "Convex Finance",
            feedType: "Crypto"
        };
        this.MKR_USD = {
            address: "0x908EDc7E1974Ecab1cA7164424BC4Cac287D83Ad",
            name: "MKR / USD",
            assetName: "Maker",
            feedType: "Crypto"
        };
        this.OPTIMISM_HC = {
            address: "0x90f07EDF949673732178D9F305B8183524120ea8",
            name: "Optimism Healthcheck",
            assetName: "",
            feedType: ""
        };
        this.IOTX_USD = {
            address: "0x910BD38d1C8D06d9c32b92AED3833DD503eE1321",
            name: "IOTX / USD",
            assetName: "IoTeX",
            feedType: "Crypto"
        };
        this.ADX_USD = {
            address: "0x910e014bBA427e9FCB48B4D314Dc81f840d7b6E3",
            name: "ADX / USD",
            assetName: "Adex",
            feedType: "Crypto"
        };
        this.EURT_USD = {
            address: "0x920E5DC12E7500c6571C63D4Bba19c62e99d6883",
            name: "EURT / USD",
            assetName: "Tether Euro",
            feedType: "Crypto"
        };
        this.MCAP_USD = {
            address: "0x9257D83A0DdA413cA24F66dD32A056Bc2eBAFd2e",
            name: "Total Marketcap / USD",
            assetName: "Total cryptocurrency market cap",
            feedType: "Crypto"
        };
        this.OXT_USD = {
            address: "0x932354AeA65a17B265bf22D29f7132ECfE86747d",
            name: "OXT / USD",
            assetName: "Orchid Protocol",
            feedType: "Crypto"
        };
        this.DOODLE_FLOOR_ETH = {
            address: "0x9359397f078D1A186C74E1963e861eB109B30D3b",
            name: "JPEGd Doodle Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.LRC_ETH = {
            address: "0x9405e02996Aa6f2176E2748EEfbCedd405870cee",
            name: "LRC / ETH",
            assetName: "Loopring",
            feedType: "Crypto"
        };
        this.AUTOGLYPHS_FLOOR_ETH = {
            address: "0x941D96CEdd9869890382B5Dab781E0BF83a20b74",
            name: "JPEGd Autoglyphs Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.TUSD_ETH = {
            address: "0x9534df8F2C9289bbDB0c736E9FeF402B20f1828E",
            name: "TUSD / ETH",
            assetName: "TrueUSD",
            feedType: "Crypto"
        };
        this.APY_TVL = {
            address: "0x953DA51613067981ff15695695994DD8B1310F6d",
            name: "APY TVL",
            assetName: "APY",
            feedType: "Crypto"
        };
        this.TUSD_USD = {
            address: "0x98953e9C76573e06ec265Bdde1dbB89fa02d56d3",
            name: "TUSD / USD",
            assetName: "True USD",
            feedType: "Crypto"
        };
        this.FIL_ETH = {
            address: "0x9965AD91B4877d29c246445011Ce370b3890C5C2",
            name: "FIL / ETH",
            assetName: "Filecoin",
            feedType: "Crypto"
        };
        this.MSFT_USD = {
            address: "0x99a9422bdBf888fAd917b3a714103E896D3e2011",
            name: "MSFT / USD",
            assetName: "Microsoft",
            feedType: "Equities"
        };
        this.BNT_ETH = {
            address: "0x9A4458D02449eF9B42562205718679a8B4204962",
            name: "BNT / ETH",
            assetName: "Bancor",
            feedType: "Crypto"
        };
        this.OHMV2_ETH = {
            address: "0x9Aae856973A0Cafa084b82F7BC4C6C2893A9139b",
            name: "OHMv2 / ETH",
            assetName: "Olympus v2",
            feedType: "Crypto"
        };
        this.REP_USD = {
            address: "0x9AdF01321833A5Cba51B9f8A4C420C7e62481Ae5",
            name: "REP / USD",
            assetName: "Augur",
            feedType: "Crypto"
        };
        this.COMP_ETH = {
            address: "0x9D6acD34D481512586844fD65328BD358d306752",
            name: "COMP / ETH",
            assetName: "Compound",
            feedType: "Crypto"
        };
        this.GUSD_ETH = {
            address: "0x9c2C487DAd6C8e5bb49dC6908a29D95a234FaAd8",
            name: "GUSD / ETH",
            assetName: "Gemini Dollar",
            feedType: "Crypto"
        };
        this.RETH_ETH = {
            address: "0x9cB248E68fb81d0CFE7D6B3265Fe6Bf123A71FE0",
            name: "RETH / ETH",
            assetName: "",
            feedType: ""
        };
        this.FXS_USD = {
            address: "0x9d78092775DFE715dFe1b0d71aC1a4d6e3652559",
            name: "FXS / USD",
            assetName: "Frax Share",
            feedType: "Crypto"
        };
        this.DPI_USD = {
            address: "0xA122f84935477142295F7451513e502D49316285",
            name: "DPI / USD",
            assetName: "DefiPulse Index",
            feedType: "Crypto"
        };
        this.OMG_ETH = {
            address: "0xA1b2e83815723e4e4BBF437E56f65b6AAFd5754b",
            name: "OMG / ETH",
            assetName: "Omisego",
            feedType: "Crypto"
        };
        this.RSR_USD = {
            address: "0xA27CfD69345a6e121284a3C0ae07BB64b707cDD2",
            name: "RSR / USD",
            assetName: "Reserve Rights",
            feedType: "Crypto"
        };
        this.GRT_USD = {
            address: "0xA6FA156482a3028846c886Fcc94cA8ec607187B4",
            name: "GRT / USD",
            assetName: "The Graph",
            feedType: "Crypto"
        };
        this.CALC_XSUSHI_USD = {
            address: "0xAB5041D720ab0CDB3342F5bC7Ac6Cc14B6c70727",
            name: "Calculated XSUSHI / USD",
            assetName: "Calculated xSushi",
            feedType: "Crypto"
        };
        this.TUSD_POR = {
            address: "0xAC099D59755982757537F13c7c4Ae8c8d9F030B9",
            name: "TUSD Reserves",
            assetName: "US Dollar (USD) total reserves",
            feedType: "Fiat"
        };
        this.CV_INDEX = {
            address: "0xAC28f6D70c6C6d5089e506eFb80624B8ECb666F8",
            name: "CV / Index",
            assetName: "Crypto Volatility Index",
            feedType: "Crypto"
        };
        this.YFI_ETH = {
            address: "0xAa5aa80e416f9d32ffE6C390e24410d02D203F70",
            name: "YFI / ETH",
            assetName: "Yearn Finance",
            feedType: "Crypto"
        };
        this.TRU_USD = {
            address: "0xAbA1EACE8627c15324890315E942A4FBD73b70E0",
            name: "TRU / USD",
            assetName: "Truefi",
            feedType: "Crypto"
        };
        this.PERP_USD = {
            address: "0xAcD3657b1D552623992aea368D9192C780B9d441",
            name: "PERP / USD",
            assetName: "Perpetual Protocol",
            feedType: "Crypto"
        };
        this.USDK_USD = {
            address: "0xAe395258FbcE63ecEeB2Cc0B73D4875797F4598d",
            name: "USDK / USD",
            assetName: "USDK",
            feedType: "Crypto"
        };
        this.BTC_USD = {
            address: "0xAe74faA92cB67A95ebCAB07358bC222e33A34dA7",
            name: "BTC / USD",
            assetName: "Bitcoin",
            feedType: "Crypto"
        };
        this.CBETH_USD = {
            address: "0xB0E6f1372687B279ba6Ce9faF1732DD4f6eF28b7",
            name: "CBETH / USD",
            assetName: "Coinbase Wrapped Staked ETH",
            feedType: "Crypto"
        };
        this.COINBASE_CLONEX_FLOOR_PRICE = {
            address: "0xB187B5A5A4B0A2Ae32FaEDf0FE4845203E0B7b11",
            name: "CloneX Floor Price",
            assetName: "CloneX",
            feedType: ""
        };
        this.KNC_ETH = {
            address: "0xB3B1882C0A7eB5097F12547bCD20Dc6FAE7aC8a6",
            name: "KNC / ETH",
            assetName: "Kyber Network Crystal",
            feedType: "Crypto"
        };
        this.WBTC_POR = {
            address: "0xB622b7D6d9131cF6A1230EBa91E5da58dbea6F59",
            name: "WBTC PoR",
            assetName: "Bitcoin (BTC)",
            feedType: "Crypto"
        };
        this.LON_ETH = {
            address: "0xB82A0803DF982412dAeE9D82826395E3F0BeD1A2",
            name: "LON / ETH",
            assetName: "Tokenlon",
            feedType: "Crypto"
        };
        this.SHIB_ETH = {
            address: "0xB895192F5a49914ae760F01Ef92DB285d94C783E",
            name: "SHIB / ETH",
            assetName: "Shiba Inu",
            feedType: "Crypto"
        };
        this.SNX_ETH = {
            address: "0xBAFe3CB0E563E914806A99D547bdBF2Cfcf5fDF6",
            name: "SNX / ETH",
            assetName: "Synthetix Network",
            feedType: "Crypto"
        };
        this.ANKR_USD = {
            address: "0xBbC9Ab3F66d0b934089FdCceda3615a6bb879633",
            name: "ANKR / USD",
            assetName: "Ankr",
            feedType: "Crypto"
        };
        this.REP_ETH = {
            address: "0xC2EAfb9Df3a063a3A610f66B30aD0185A6c34f9D",
            name: "REP / ETH",
            assetName: "Augur",
            feedType: "Crypto"
        };
        this.BTC_HEIGHT = {
            address: "0xC330D2437d40E3618864C52A540E21A09cFDcc73",
            name: "BTC Height",
            assetName: "Bitcoin block height",
            feedType: "Crypto"
        };
        this.BNB_USD = {
            address: "0xC45eBD0F901bA6B2B8C7e70b717778f055eF5E6D",
            name: "BNB / USD",
            assetName: "BNB",
            feedType: "Crypto"
        };
        this.PERP_ETH = {
            address: "0xC4aA0d2237A823f99fe2Dc74F993eEbDf5524489",
            name: "PERP / ETH",
            assetName: "Perpetual Protocol",
            feedType: "Crypto"
        };
        this.PAXG_RESERVES = {
            address: "0xC84E8CF8C30775d4639364C759fd0aBDb941Db9C",
            name: "PAXG / RESERVES",
            assetName: "Gold in troy ounces (oz t)",
            feedType: "Commodities"
        };
        this.RINGERS_FLOOR_ETH = {
            address: "0xC90ab15E9127c4E2DAE9aC370c2Fd0c768C20ac2",
            name: "JPEGd Ringers Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.NEXUS_WETH_POR = {
            address: "0xCA71bBe491079E138927f3f0AB448Ae8782d1DCa",
            name: "Nexus wETH Reserves",
            assetName: "wETH token",
            feedType: "Crypto"
        };
        this.PHA_USD = {
            address: "0xCB00334A422FC8538794f3CE0149540a95f9e228",
            name: "PHA / USD",
            assetName: "Phala Network",
            feedType: "Crypto"
        };
        this.ENJ_USD = {
            address: "0xCBbe4ff0d8add07CCe71afC0CcdF3492b8eaA76A",
            name: "ENJ / USD",
            assetName: "Enjin Coin",
            feedType: "Crypto"
        };
        this.ARBITRUM_HC = {
            address: "0xCCf6947cCbAF84988E1C2B16cEe9fCc15428c2D4",
            name: "Arbitrum Healthcheck",
            assetName: "Arbitrum Health Sequencer Flag",
            feedType: "Crypto"
        };
        this.SXP_USD = {
            address: "0xCFC1C64e721bC034ab894302B78149b3C7a1066d",
            name: "SXP / USD",
            assetName: "Swipe",
            feedType: "Crypto"
        };
        this.ALUSD_USD = {
            address: "0xD0C576383d8479407eAb872a08DeabcF69602fFd",
            name: "ALUSD / USD",
            assetName: "Alchemix USD",
            feedType: "Crypto"
        };
        this.EFIL_POR = {
            address: "0xD423C9A9AD8c21C97bdeE2E74F8098625aa4f329",
            name: "eFIL PoR",
            assetName: "Wrapped Filecoin",
            feedType: "Crypto"
        };
        this.XCN_USD = {
            address: "0xD6A3a9Bb4bd49DdB2374CA58Edf47a8bB63Af3d2",
            name: "XCN / USD",
            assetName: "Chain",
            feedType: "Crypto"
        };
        this.WBTC_BTC = {
            address: "0xD7623f1d24b35c392862fB67C9716564A117C9DE",
            name: "WBTC / BTC",
            assetName: "Wrapped Bitcoin",
            feedType: "Crypto"
        };
        this.DAI_USD = {
            address: "0xDEc0a100eaD1fAa37407f0Edc76033426CF90b82",
            name: "DAI / USD",
            assetName: "DAI",
            feedType: "Crypto"
        };
        this.SAND_USD = {
            address: "0xDF627aa5B9C024818c6950fDAD7e4C16D93b10Ca",
            name: "SAND / USD",
            assetName: "The Sandbox",
            feedType: "Crypto"
        };
        this.BAND_ETH = {
            address: "0xDF9F750A94bF2Faea84Ab783927290FE5e0F7606",
            name: "BAND / ETH",
            assetName: "Band Protocol",
            feedType: "Crypto"
        };
        this.SOL_USD = {
            address: "0xDf30249744A419891f822ea4a9E80cd76d7Fbd23",
            name: "SOL / USD",
            assetName: "Solana",
            feedType: "Crypto"
        };
        this.LINK_USD = {
            address: "0xDfd03BfC3465107Ce570a0397b247F546a42D0fA",
            name: "LINK / USD",
            assetName: "Chainlink",
            feedType: "Crypto"
        };
        this.PAX_RESERVES = {
            address: "0xE7b27118b92d3a23afEa153953FeD8853dbFa8FA",
            name: "PAX / RESERVES",
            assetName: "US Dollar (USD)",
            feedType: "Fiat"
        };
        this.REN_ETH = {
            address: "0xEe34b3Ce92A6B635450B9cC6FAa976F70a106BE7",
            name: "REN / ETH",
            assetName: "Ren",
            feedType: "Crypto"
        };
        this.NFLX_USD = {
            address: "0xEfCbEa1e97888793896458DC79FCe7AD36A70FEf",
            name: "NFLX / USD",
            assetName: "Netflix",
            feedType: "Equities"
        };
        this.UMEE_ETH = {
            address: "0xF0aaD281faE14Fe35eE30074D881863c0CdD5B03",
            name: "UMEE / ETH",
            assetName: "Umee",
            feedType: "Crypto"
        };
        this.COINBASE_AZUKI_FLOOR_PRICE_ETH = {
            address: "0xF0c3668756b9d9590B334768640FC5ACA02aE739",
            name: "Azuki Floor Price / ETH",
            assetName: "Azuki",
            feedType: ""
        };
        this.COINBASE_CRYPTOPUNKS_FLOOR_PRICE_ETH = {
            address: "0xF0c85c0F7dC37e1605a0Db446a2A0e33Df7a3358",
            name: "CryptoPunks Floor Price / ETH",
            assetName: "Cryptopunks",
            feedType: ""
        };
        this.USDP_USD = {
            address: "0xF3d70857B489Ecc6768D0982B773E1Cba9E1f00b",
            name: "USDP / USD",
            assetName: "Pax Dollar",
            feedType: "Crypto"
        };
        this.BNB_ETH = {
            address: "0xF9Bf9ca442e15c607b2d4b6Fe01f7fa59a016554",
            name: "BNB / ETH",
            assetName: "BNB",
            feedType: "Crypto"
        };
        this.MKR_ETH = {
            address: "0xFFC14A3B26708545BcCf8e915e2e8348123f5460",
            name: "MKR / ETH",
            assetName: "Maker",
            feedType: "Crypto"
        };
        this.LTC_USD = {
            address: "0xFe3d09D8bAd5DA65E0160cF0cB53F6115Fb6EA8b",
            name: "LTC / USD",
            assetName: "Litecoin",
            feedType: "Crypto"
        };
        this.GLM_USD = {
            address: "0xa39b675ECc48E0681163f8788430e16b750d0f69",
            name: "GLM / USD",
            assetName: "Golem",
            feedType: "Crypto"
        };
        this.RUNE_ETH = {
            address: "0xa8156eFf735Dce35Eb01B119F6a7f4B55944184a",
            name: "RUNE / ETH",
            assetName: "THORChain",
            feedType: "Crypto"
        };
        this.USDT_USD = {
            address: "0xa964273552C1dBa201f5f000215F5BD5576e8f93",
            name: "USDT / USD",
            assetName: "Tether USD",
            feedType: "Crypto"
        };
        this.APE_USD = {
            address: "0xa99999b1475F24037e8b6947aBBC7710676E77dd",
            name: "APE / USD",
            assetName: "APECoin",
            feedType: "Crypto"
        };
        this.COINBASE_COOLCATS_FLOOR_PRICE = {
            address: "0xaBd6dc0E14bdC628E62Cc946897C7fEfDCDdcD10",
            name: "CoolCats Floor Price",
            assetName: "Cool Cats",
            feedType: ""
        };
        this.TRY_USD = {
            address: "0xadcD1B19a0190E18d961993c5671d3F5D47c13Ea",
            name: "TRY / USD",
            assetName: "Turkish Lira",
            feedType: "Forex"
        };
        this.COINBASE_MAYC_FLOOR_PRICE = {
            address: "0xb17Eac46CF1B9C5fe2F707c8A47AFc4d208b3E83",
            name: "MAYC Floor Price",
            assetName: "Mutant Ape Yacht Club",
            feedType: ""
        };
        this.ONEINCH_ETH = {
            address: "0xb2F68c82479928669B0487D1dAeD6Ef47b63411e",
            name: "1INCH / ETH",
            assetName: "1inch",
            feedType: "Crypto"
        };
        this.CRO_USD = {
            address: "0xb2aD164c008Da54FCEaC79Ef18C0a8fE2d935865",
            name: "CRO / USD",
            assetName: "Cronos",
            feedType: "Crypto"
        };
        this.ALCX_USD = {
            address: "0xb49322fF269d67A5aF0718C19463eC9EE7BF821E",
            name: "ALCX / USD",
            assetName: "Alchemix",
            feedType: "Crypto"
        };
        this.CRV_USD = {
            address: "0xb4c4a493AB6356497713A78FFA6c60FB53517c63",
            name: "CRV / USD",
            assetName: "Curve DAO",
            feedType: "Crypto"
        };
        this.FLUENT_US_POR_NEW = {
            address: "0xb6F94457113A091959E492Ef38bc3aE3cc475C63",
            name: "Fluent US+ PoR",
            assetName: "USD",
            feedType: "Fiat"
        };
        this.AMPL_ETH = {
            address: "0xb92EE05E7514FfEDDDbcd76F5e3064691F6eC79e",
            name: "AMPL / ETH",
            assetName: "Ampleforth",
            feedType: "Crypto"
        };
        this.ADA_USD = {
            address: "0xbC3C868763b7C15d0ce527af455041919E9c07B1",
            name: "ADA / USD",
            assetName: "Cardano",
            feedType: "Crypto"
        };
        this.KNC_USD = {
            address: "0xbC60258F775683eA28048030806Ad3A80c4A33Ae",
            name: "KNC / USD",
            assetName: "Kyber Network",
            feedType: "Crypto"
        };
        this.ERN_USD = {
            address: "0xbDa0c715E5F153092A0d9d6dBBbDCc2beF892618",
            name: "ERN / USD",
            assetName: "Ethernity Chain",
            feedType: "Crypto"
        };
        this.FTM_ETH = {
            address: "0xbDb80D19dEA36EB7f63bdFD2bdD4033B2b7e8e4d",
            name: "FTM / ETH",
            assetName: "Fantom",
            feedType: "Crypto"
        };
        this.DOT_USD = {
            address: "0xbE4274DfB7801948e2cc2a913744e9498dDC8d20",
            name: "DOT / USD",
            assetName: "Polkadot",
            feedType: "Crypto"
        };
        this.PUDGYPENGUINS_FLOOR_ETH = {
            address: "0xbFbCc713B8320D924079eff26fcC773353275F10",
            name: "JPEGd Pudgy Penguins Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.LINK_ETH = {
            address: "0xbba12740DE905707251525477bAD74985DeC46D2",
            name: "LINK / ETH",
            assetName: "Chainlink",
            feedType: "Crypto"
        };
        this.WNXM_ETH = {
            address: "0xbd624B453d0a882B87Cbf85FeBdcf493cFFBd8D9",
            name: "WNXM / ETH",
            assetName: "Wrapped NXM",
            feedType: "Crypto"
        };
        this.SUSHI_USD = {
            address: "0xbd6C554554834ee97828B6DA732dCa7461DDf9d4",
            name: "SUSHI / USD",
            assetName: "Sushi",
            feedType: "Crypto"
        };
        this.BAL_USD = {
            address: "0xbd9350a3a2fd6e3Ad0a053a567f2609a1bf6c505",
            name: "BAL / USD",
            assetName: "Balancer",
            feedType: "Crypto"
        };
        this.UNI_ETH = {
            address: "0xc1D1d0Da0fCf78157EA25D0E64e3BE679813a1F7",
            name: "UNI / ETH",
            assetName: "Uniswap",
            feedType: "Crypto"
        };
        this.TRIBE_ETH = {
            address: "0xc1D757bee6BCDD45093979bFE60d341B833B2dB0",
            name: "TRIBE / ETH",
            assetName: "Tribe",
            feedType: "Crypto"
        };
        this.ILV_ETH = {
            address: "0xc1F2929b9449Ef97c5A75fd10fD0542984422f8b",
            name: "ILV / ETH",
            assetName: "Illuvium",
            feedType: "Crypto"
        };
        this.WING_USD = {
            address: "0xc29d104A418a08407f9f2CDb614c1CDCf82986e0",
            name: "WING / USD",
            assetName: "Wing Finance",
            feedType: "Crypto"
        };
        this.COINBASE_CRYPTOADZ_FLOOR_PRICE = {
            address: "0xc609c4fADdA31980769c9C6716F438f0a6059547",
            name: "Cryptoadz Floor Price",
            assetName: "Cryptoadz",
            feedType: ""
        };
        this.AAPL_USD = {
            address: "0xc697FCA98f961169B53e80b718155b55fc1a17d5",
            name: "AAPL / USD",
            assetName: "Apple",
            feedType: "Equities"
        };
        this.SYNTHETIX_AGGREGATOR_DEBT_RATIO = {
            address: "0xc7BB32a4951600FBac701589C73e219b26Ca2DFC",
            name: "Synthetix Aggregator Debt Ratio",
            assetName: "",
            feedType: ""
        };
        this.BOREDAPES_FLOOR_ETH = {
            address: "0xc9460800d678cD6be9374c023A72ed0c2017AFF9",
            name: "JPEGd Bored Ape Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.SGD_USD = {
            address: "0xc96129C796F03bb21AC947EfC5329CD1F560305B",
            name: "SGD / USD",
            assetName: "Singapore Dollar",
            feedType: "Forex"
        };
        this.SUSHI_ETH = {
            address: "0xd01BBB3Afed2cb5ca92Ca3834d441dc737F0Da70",
            name: "SUSHI / ETH",
            assetName: "Sushi",
            feedType: "Crypto"
        };
        this.BCH_USD = {
            address: "0xd054be48Ae13A89a82744373f647A755dF7CaE17",
            name: "BCH / USD",
            assetName: "Bitcoin Cash",
            feedType: "Crypto"
        };
        this.CEL_ETH = {
            address: "0xd0BB178dEdC71470BA68380CBd99c4A963d01507",
            name: "CEL / ETH",
            assetName: "Celsius",
            feedType: "Crypto"
        };
        this.ONEINCH_USD = {
            address: "0xd2bdD1E01fd2F8d7d42b209c111c7b32158b5a42",
            name: "1INCH / USD",
            assetName: "1inch",
            feedType: "Crypto"
        };
        this.XHV_USD = {
            address: "0xd39A20810c2297BDA9277AAfa5d70A802703d3EA",
            name: "XHV / USD",
            assetName: "Haven Protocol",
            feedType: "Crypto"
        };
        this.NZD_USD = {
            address: "0xd48aA1699f49760611D6E1Af7a4588998deD42bD",
            name: "NZD / USD",
            assetName: "New Zealand Dollar",
            feedType: "Forex"
        };
        this.AMPL_USD = {
            address: "0xd5090674b4653240cd94eE886484ca808c6E6694",
            name: "AMPL / USD",
            assetName: "Ampleforth",
            feedType: "Crypto"
        };
        this.CBETH_ETH = {
            address: "0xd74FF3f1b565597E59D44320F53a5C5c8BA85f7b",
            name: "CBETH / ETH",
            assetName: "Coinbase Wrapped Staked ETH",
            feedType: "Crypto"
        };
        this.AZUKI_FLOOR_ETH = {
            address: "0xd7Ca5ad3704150348E7Ddff8aa890A440f3b25CF",
            name: "JPEGd Azuki Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.RLC_ETH = {
            address: "0xd7Fc11b34D7BaE2E94B958C4ab06D950f0bD4C3E",
            name: "RLC / ETH",
            assetName: "iExec RLC",
            feedType: "Crypto"
        };
        this.BAT_USD = {
            address: "0xd90CA9ac986e453CF51d958071D68B82d17a47E6",
            name: "BAT / USD",
            assetName: "Basic Attention Token",
            feedType: "Crypto"
        };
        this.NEAR_USD = {
            address: "0xd9701835dC47837B53D5Cfe95eB5a66f42B56901",
            name: "NEAR / USD",
            assetName: "NEAR Protocol",
            feedType: "Crypto"
        };
        this.AUDIO_USD = {
            address: "0xd9B4Ac554e3eefE84Ae80F5Dee0D45926233160b",
            name: "AUDIO / USD",
            assetName: "Audius",
            feedType: "Crypto"
        };
        this.STETH_USD = {
            address: "0xdA31bc2B08F22AE24aeD5F6EB1E71E96867BA196",
            name: "STETH / USD",
            assetName: "Lido Staked ETH",
            feedType: "Crypto"
        };
        this.ENJ_ETH = {
            address: "0xdBd66e8D31F506e0cc8CB2f346De4C7FA3f655DE",
            name: "ENJ / ETH",
            assetName: "Enjin Coin",
            feedType: "Crypto"
        };
        this.CALC_XSUSHI_ETH = {
            address: "0xdEaa4288c85e7e0be40BCE49E76D4e321d20fC36",
            name: "Calculated XSUSHI / ETH",
            assetName: "Calculated xSushi",
            feedType: "Crypto"
        };
        this.XAG_USD = {
            address: "0xdEb43523E2857b7ec29D078c77b73709D958c62F",
            name: "XAG / USD",
            assetName: "Silver",
            feedType: "Commodities"
        };
        this.AAVE_ETH = {
            address: "0xdF0da6B3d19E4427852F2112D0a963d8A158e9c7",
            name: "AAVE / ETH",
            assetName: "Aave",
            feedType: "Crypto"
        };
        this.COINBASE_VEEFRIENDS_FLOOR_PRICE = {
            address: "0xe0552DC960366F67Da00CB3d9DF441F24B5C2AC1",
            name: "VeeFriends Floor Price",
            assetName: "VeeFriends",
            feedType: ""
        };
        this.FORTH_USD = {
            address: "0xe2d6D8e799Df0a377FD14Ee18b95fd7cAa389017",
            name: "FORTH / USD",
            assetName: "Ampleforth Governance",
            feedType: "Crypto"
        };
        this.CLONEX_FLOOR_ETH = {
            address: "0xe3cEFdBf16950B171cb2Ad68F047d3BA2d92f91e",
            name: "JPEGd CloneX Floor Price ETH",
            assetName: "",
            feedType: ""
        };
        this.AAVE_USD = {
            address: "0xe3f0dEdE4B499c07e12475087AB1A084b5F93bc0",
            name: "AAVE / USD",
            assetName: "Aave",
            feedType: "Crypto"
        };
        this.NMR_USD = {
            address: "0xe4E345594375B54F395B54C41bD8b370A302bf69",
            name: "NMR / USD",
            assetName: "Numeraire",
            feedType: "Crypto"
        };
        this.USDC_ETH = {
            address: "0xe5BbBdb2Bb953371841318E1Edfbf727447CeF2E",
            name: "USDC / ETH",
            assetName: "Circle USD",
            feedType: "Crypto"
        };
        this.HIGH_USD = {
            address: "0xeA23780dc14d1aC9eb3AB203A9bb7C1A6660615E",
            name: "HIGH / USD",
            assetName: "Highstreet",
            feedType: "Crypto"
        };
        this.XAU_USD = {
            address: "0xea5f70faa03f5C30B96029635C8d431d1A3cD1b8",
            name: "XAU / USD",
            assetName: "Gold",
            feedType: "Commodities"
        };
        this.EOS_USD = {
            address: "0xea7C55976844396f3bD4C89F66988b8b5Be5E96a",
            name: "EOS / USD",
            assetName: "EOS",
            feedType: "Crypto"
        };
        this.XMR_USD = {
            address: "0xf09828103D306f50aF7e3132adb6DeF77c6d96f7",
            name: "XMR / USD",
            assetName: "Monero",
            feedType: "Crypto"
        };
        this.CVX_ETH = {
            address: "0xf1F7F7BFCc5E9D6BB8D9617756beC06A5Cbe1a49",
            name: "CVX / ETH",
            assetName: "Convex Finance",
            feedType: "Crypto"
        };
        this.FOR_USD = {
            address: "0xf649bC5C0e99BDEb06702e3db242B9F93DE44462",
            name: "FOR / USD",
            assetName: "ForTube",
            feedType: "Crypto"
        };
        this.CREAM_ETH = {
            address: "0xf8efB55FbF6E7f48637561182dac1Ef09F38d767",
            name: "CREAM / ETH",
            assetName: "CREAM Finance",
            feedType: "Crypto"
        };
        this.CNY_USD = {
            address: "0xfe67209f6FE3BA6cE36d0941700085C194e958DF",
            name: "CNY / USD",
            assetName: "Chinese Yuan",
            feedType: "Forex"
        };
        this.CELO_ETH = {
            address: "0xffDb505cAd574AF3B73e0f4005CcF54a2da100ae",
            name: "CELO / ETH",
            assetName: "Celo",
            feedType: "Crypto"
        };
    }
    return PriceFeedsETH;
}());
exports.PriceFeedsETH = PriceFeedsETH;
