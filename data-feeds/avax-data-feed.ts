
        import { PriceFeedItemModel, PriceFeedModel } from "../types/price-feeds-model"
    
    
        export class PriceFeedsAVAX implements PriceFeedModel {

            network = 43114

                SPELL_USD: PriceFeedItemModel = {
                    address: "0x0a58227E7D7A8175E4F5f8a0D32968d153B9ce59",
                    name: "SPELL / USD",
                    assetName: "Spell Token",
                    feedType: "Crypto"
                }
    
                CAKE_USD: PriceFeedItemModel = {
                    address: "0x0aCcDFd55026873CB12F75f66513b42fB4974245",
                    name: "CAKE / USD",
                    assetName: "PancakeSwap",
                    feedType: "Crypto"
                }
    
                BTC_USD: PriceFeedItemModel = {
                    address: "0x154baB1FC1D87fF641EeD0E9Bc0f8a50D880D2B6",
                    name: "BTC / USD",
                    assetName: "Bitcoin",
                    feedType: "Crypto"
                }
    
                JOE_USD: PriceFeedItemModel = {
                    address: "0x15811F91fAb76Bd240CAeC783a32f1BAAE41c513",
                    name: "JOE / USD",
                    assetName: "Trader Joe",
                    feedType: "Crypto"
                }
    
                XAVA_USD: PriceFeedItemModel = {
                    address: "0x1872758F3635aa3CFA58CA30Bc2Ec84e5A2C493F",
                    name: "XAVA / USD",
                    assetName: "Avalaunch",
                    feedType: "Crypto"
                }
    
                BRL_USD: PriceFeedItemModel = {
                    address: "0x1F847C386D97B2a03625bC449Bc7ded815426000",
                    name: "BRL / USD",
                    assetName: "Brazilian Real",
                    feedType: "Forex"
                }
    
                AAVEE_POR: PriceFeedItemModel = {
                    address: "0x1a53159F3366c9FaED485B9D7D4078CCd1569D22",
                    name: "AAVE.e PoR",
                    assetName: "AAVE token",
                    feedType: "Crypto"
                }
    
                WETHE_POR: PriceFeedItemModel = {
                    address: "0x1d29baE52280D3B49FA31aF7dFdb61f9dC5040Af",
                    name: "WETH.e PoR",
                    assetName: "wETH token",
                    feedType: "Crypto"
                }
    
                CALCULATED_SAVAX_USD: PriceFeedItemModel = {
                    address: "0x2223338267fF42814d53aE1c02979164b0528fA4",
                    name: "Calculated SAVAX / USD",
                    assetName: "Calculated Liquid Staked AVAX",
                    feedType: "Crypto"
                }
    
                YFI_USD: PriceFeedItemModel = {
                    address: "0x27355dF92298c785440a4D16574DF736Eb0627d0",
                    name: "YFI / USD",
                    assetName: "Yearn Finance",
                    feedType: "Crypto"
                }
    
                OHM_INDEX: PriceFeedItemModel = {
                    address: "0x2E7574C025add37FCE2EB88bB0EF34289f50af91",
                    name: "OHM Index",
                    assetName: "OHM Index",
                    feedType: "Crypto"
                }
    
                TUSD_USD: PriceFeedItemModel = {
                    address: "0x2EBa2C3CDF50f5BC20fc23F533B227dB6b10A725",
                    name: "TUSD / USD",
                    assetName: "True USD",
                    feedType: "Crypto"
                }
    
                DAIE_POR: PriceFeedItemModel = {
                    address: "0x32d4055c609b63375427172db799b9dAfBb6cEEd",
                    name: "DAI.e PoR",
                    assetName: "DAI token",
                    feedType: "Crypto"
                }
    
                ZRX_USD: PriceFeedItemModel = {
                    address: "0x347F6cdbD9514284b301456956c846b7B21F375B",
                    name: "ZRX / USD",
                    assetName: "0x",
                    feedType: "Crypto"
                }
    
                DOT_USD: PriceFeedItemModel = {
                    address: "0x372367702b83ff993E954cB3f06b44607c5d3c9C",
                    name: "DOT / USD",
                    assetName: "Polkadot",
                    feedType: "Crypto"
                }
    
                TUSD_RESERVES: PriceFeedItemModel = {
                    address: "0x375B72E40c1A16424EAd361eC308b1cBCf5CB721",
                    name: "TUSD PoR",
                    assetName: "US Dollar (USD)",
                    feedType: "Fiat"
                }
    
                GMX_USD: PriceFeedItemModel = {
                    address: "0x3Ec39652e73337350a712Fb418DBb4C2a8247673",
                    name: "GMX / USD",
                    assetName: "GMX",
                    feedType: "Crypto"
                }
    
                CVX_USD: PriceFeedItemModel = {
                    address: "0x3FfF4d373C588f8975f3312E1Ba6F70A39Ce3f94",
                    name: "CVX / USD",
                    assetName: "Convex Finance",
                    feedType: "Crypto"
                }
    
                LINK_AVAX: PriceFeedItemModel = {
                    address: "0x3aadC82b68784b49a9e01C0af4c9221b16282e7e",
                    name: "LINK / AVAX",
                    assetName: "Chainlink",
                    feedType: "Crypto"
                }
    
                APE_USD: PriceFeedItemModel = {
                    address: "0x3caF1C0C388384e87d170c00A781fc767Ac44C61",
                    name: "APE / USD",
                    assetName: "APECoin",
                    feedType: "Crypto"
                }
    
                TSLA_USD: PriceFeedItemModel = {
                    address: "0x3f9fd480148A2741FF2478Def8353D7A9AE75838",
                    name: "TSLA / USD",
                    assetName: "Tesla",
                    feedType: "Equities"
                }
    
                COMP_USD: PriceFeedItemModel = {
                    address: "0x498A8B3E1B7582Ae3Ca3ae22AC544a02dB86D4c5",
                    name: "COMP / USD",
                    assetName: "Compound",
                    feedType: "Crypto"
                }
    
                BTCB_POR: PriceFeedItemModel = {
                    address: "0x4CDE5134F7DA75A71E3E46614B8E220d86802AD5",
                    name: "BTC.b PoR",
                    assetName: "Bitcoin (BTC)",
                    feedType: "Crypto"
                }
    
                QI_USD: PriceFeedItemModel = {
                    address: "0x4bc3BeBb7eB60155f8b38771D9926d9A23dad5B5",
                    name: "QI / USD",
                    assetName: "Benqi",
                    feedType: "Crypto"
                }
    
                LINKE_POR: PriceFeedItemModel = {
                    address: "0x5006C56a2967eF6c9d856704669d2421D3189Be4",
                    name: "LINK.e PoR",
                    assetName: "LINK token",
                    feedType: "Crypto"
                }
    
                KNC_USD: PriceFeedItemModel = {
                    address: "0x5474cFC8E5Fa684728bAABBFC95B161134c32758",
                    name: "KNC / USD",
                    assetName: "Kyber Network Crystal v2",
                    feedType: "Crypto"
                }
    
                BAT_USD: PriceFeedItemModel = {
                    address: "0x553BDc8a55569756Bd4bAB24e545752474A2Cd5a",
                    name: "BAT / USD",
                    assetName: "Basic Attention Token",
                    feedType: "Crypto"
                }
    
                CHF_USD: PriceFeedItemModel = {
                    address: "0x55d0a1b961bB75c010970A380f32A94965c3A7E9",
                    name: "CHF / USD",
                    assetName: "Swiss Franc",
                    feedType: "Forex"
                }
    
                MIMATIC_USD: PriceFeedItemModel = {
                    address: "0x5aF11EEC59e1BaC3F4e2565621B43Cfbe748e698",
                    name: "MIMATIC / USD",
                    assetName: "MAI",
                    feedType: "Crypto"
                }
    
                FRAX_USD: PriceFeedItemModel = {
                    address: "0x5eDC2538E11b67cf93ED145b04E5E457d9F9Cc0B",
                    name: "FRAX / USD",
                    assetName: "FRAX",
                    feedType: "Crypto"
                }
    
                USDT_E_POR: PriceFeedItemModel = {
                    address: "0x615049D0F6441b8bF09876A97A28B7719A951f46",
                    name: "USDT.e PoR",
                    assetName: "USDT",
                    feedType: "Crypto"
                }
    
                WOO_ETH: PriceFeedItemModel = {
                    address: "0x6339dfD6433C305661B060659922a70fC4eEbAC6",
                    name: "WOO / ETH",
                    assetName: "WOO Network",
                    feedType: "Crypto"
                }
    
                GOOGL_USD: PriceFeedItemModel = {
                    address: "0x64f7ab24f5E2aF4274F9AD200F8892bb83fB9776",
                    name: "GOOGL / USD",
                    assetName: "Alphabet",
                    feedType: "Equities"
                }
    
                MANA_USD: PriceFeedItemModel = {
                    address: "0x7609db691E5Db62651466DCcC87AFa8703758942",
                    name: "MANA / USD",
                    assetName: "Decentraland",
                    feedType: "Crypto"
                }
    
                NEAR_USD: PriceFeedItemModel = {
                    address: "0x780dE5B35E13e848abc59FA7F532c35De6B1207f",
                    name: "NEAR / USD",
                    assetName: "NEAR Protocol",
                    feedType: "Crypto"
                }
    
                XAU_USD: PriceFeedItemModel = {
                    address: "0x8B050c37B0c8De8f91C1BF648c6c0A4E4Ed7C6eC",
                    name: "XAU / USD",
                    assetName: "Gold",
                    feedType: "Commodities"
                }
    
                JPY_USD: PriceFeedItemModel = {
                    address: "0x8F937bBaA8508268cC2c3d2A54c8d01d30eEd679",
                    name: "JPY / USD",
                    assetName: "Japanese Yen",
                    feedType: "Forex"
                }
    
                AAPL_USD: PriceFeedItemModel = {
                    address: "0x8dEDEb1295e946D23B934c66964d7D402B684450",
                    name: "AAPL / USD",
                    assetName: "Apple",
                    feedType: "Equities"
                }
    
                FXS_USD: PriceFeedItemModel = {
                    address: "0x92398CAF00D65e9A63b5d50D1CBD53223137A400",
                    name: "FXS / USD",
                    assetName: "Frax Share",
                    feedType: "Crypto"
                }
    
                MATIC_USD: PriceFeedItemModel = {
                    address: "0x92655bd2627C17D36b35f20dA3F4A4084E0ABd6F",
                    name: "MATIC / USD",
                    assetName: "Polygon (MATIC)",
                    feedType: "Crypto"
                }
    
                FIL_USD: PriceFeedItemModel = {
                    address: "0x934C2eAE6fF26103EE50020b1F452944097F90C4",
                    name: "FIL / USD",
                    assetName: "Filecoin",
                    feedType: "Crypto"
                }
    
                AVAX_USD: PriceFeedItemModel = {
                    address: "0x9450A29eF091B625e976cE66f2A5818e20791999",
                    name: "AVAX / USD",
                    assetName: "Avalanche",
                    feedType: "Crypto"
                }
    
                EUR_USD: PriceFeedItemModel = {
                    address: "0x95Edda00bCE60f99Fb0bE38fE500eBd879AB651a",
                    name: "EUR / USD",
                    assetName: "Euro",
                    feedType: "Forex"
                }
    
                FTT_USD: PriceFeedItemModel = {
                    address: "0x971Ff919f91fFd1Faa847e1a773e8a547e3eFc82",
                    name: "FTT / USD",
                    assetName: "FTX Token",
                    feedType: "Crypto"
                }
    
                ALPHA_USD: PriceFeedItemModel = {
                    address: "0x9C81461B6B821407E0a2968F9CEc23e3C7063F84",
                    name: "ALPHA / USD",
                    assetName: "Alpha Finance",
                    feedType: "Crypto"
                }
    
                BUSD_USD: PriceFeedItemModel = {
                    address: "0x9Cb8E5EA1404d5012C0fc01B7B927AE6Aa09164f",
                    name: "BUSD / USD",
                    assetName: "Binance USD",
                    feedType: "Crypto"
                }
    
                MIM_USD: PriceFeedItemModel = {
                    address: "0x9D0aabA64B0BA4650419a37D14175dA05471793c",
                    name: "MIM / USD",
                    assetName: "Magic Internet Money",
                    feedType: "Crypto"
                }
    
                AMPL_USD: PriceFeedItemModel = {
                    address: "0x9e107262620CfC6E0e2445df6C0ca0a9aD9Ba627",
                    name: "AMPL / USD",
                    assetName: "Ampleforth",
                    feedType: "Crypto"
                }
    
                META_USD: PriceFeedItemModel = {
                    address: "0x9e943dd8416adCa7710B976FAC4F70F394151f3b",
                    name: "META / USD",
                    assetName: "Meta",
                    feedType: "Equities"
                }
    
                UNI_USD: PriceFeedItemModel = {
                    address: "0xA0326D3AD91D7724380c096AA62Ae1d5A8d260A8",
                    name: "UNI / USD",
                    assetName: "Uniswap",
                    feedType: "Crypto"
                }
    
                LINK_USD: PriceFeedItemModel = {
                    address: "0xA2e5d3254F7d6E8C051Afb7F2aeea0dABf21F750",
                    name: "LINK / USD",
                    assetName: "Chainlink",
                    feedType: "Crypto"
                }
    
                FTM_USD: PriceFeedItemModel = {
                    address: "0xAec3e48648C46B9eda4C8832E2f0A6B23289915d",
                    name: "FTM / USD",
                    assetName: "Fantom",
                    feedType: "Crypto"
                }
    
                WBTCE_POR: PriceFeedItemModel = {
                    address: "0xAfde05b14dd17cA71bc484bcEf565746D7938eFE",
                    name: "WBTC.e PoR",
                    assetName: "wBTC token",
                    feedType: "Crypto"
                }
    
                MKR_USD: PriceFeedItemModel = {
                    address: "0xB3752dC7c1D71A1B381925EC5e6bbf2950519Aa2",
                    name: "MKR / USD",
                    assetName: "Maker",
                    feedType: "Crypto"
                }
    
                AXS_USD: PriceFeedItemModel = {
                    address: "0xB7579A25A3394dEef5edb4b72535bE9c67316a41",
                    name: "AXS / USD",
                    assetName: "Axie Infinity",
                    feedType: "Crypto"
                }
    
                USDC_E_POR: PriceFeedItemModel = {
                    address: "0xBe865442c3A0042f6d619027c697CA409513fFb4",
                    name: "USDC.e PoR",
                    assetName: "USDC",
                    feedType: "Crypto"
                }
    
                DAI_USD: PriceFeedItemModel = {
                    address: "0xCC4633a1a85d553623bAC7945Bd87CFad6E6a8c8",
                    name: "DAI / USD",
                    assetName: "DAI",
                    feedType: "Crypto"
                }
    
                AMZN_USD: PriceFeedItemModel = {
                    address: "0xD974a467454DC34d7a0942977474767c05aBfC7d",
                    name: "AMZN / USD",
                    assetName: "Amazon",
                    feedType: "Equities"
                }
    
                TRY_USD: PriceFeedItemModel = {
                    address: "0xEF320d919F4DF79c6f4206eB89f78A0b8f21F496",
                    name: "TRY / USD",
                    assetName: "Turkish Lira",
                    feedType: "Forex"
                }
    
                ETH_USD: PriceFeedItemModel = {
                    address: "0xEfaa69f461E0aaf0be1798b01371Daf14AC55eA8",
                    name: "ETH / USD",
                    assetName: "Ethereum",
                    feedType: "Crypto"
                }
    
                SNX_USD: PriceFeedItemModel = {
                    address: "0xF01826625694D04A30285355A5F3aEf567E6F676",
                    name: "SNX / USD",
                    assetName: "Synthetix Network",
                    feedType: "Crypto"
                }
    
                CRV_USD: PriceFeedItemModel = {
                    address: "0xFf6e2c3C9E9a174824a764dbb8222454f6A3ecb1",
                    name: "CRV / USD",
                    assetName: "Curve DAO",
                    feedType: "Crypto"
                }
    
                UST_USD: PriceFeedItemModel = {
                    address: "0xa01516869D8325Fd18a77b307cA38Cab1Eb8Fdeb",
                    name: "UST / USD",
                    assetName: "Terra USD",
                    feedType: "Crypto"
                }
    
                CHZ_USD: PriceFeedItemModel = {
                    address: "0xa6C851d8721Fa322C8f578E132782e3B93D02D70",
                    name: "CHZ / USD",
                    assetName: "Chiliz",
                    feedType: "Crypto"
                }
    
                OHMV2_USD: PriceFeedItemModel = {
                    address: "0xa94FbCBE967E25CFB132182dd57fbBbEdE765799",
                    name: "OHMv2 / USD",
                    assetName: "Olympus v2",
                    feedType: "Crypto"
                }
    
                WBTC_USD: PriceFeedItemModel = {
                    address: "0xb50D5dB75a844365995C29B534a31536a4C56513",
                    name: "WBTC / USD",
                    assetName: "Wrapped Bitcoin",
                    feedType: "Crypto"
                }
    
                SAND_USD: PriceFeedItemModel = {
                    address: "0xb650e28712E26Dd9A34B084DDC32aaC2Ac348e20",
                    name: "SAND / USD",
                    assetName: "The Sandbox",
                    feedType: "Crypto"
                }
    
                USDT_USD: PriceFeedItemModel = {
                    address: "0xb8AEB9160385fa2D1B63B5E88351238593ba0127",
                    name: "USDT / USD",
                    assetName: "Tether USD",
                    feedType: "Crypto"
                }
    
                AAVE_USD: PriceFeedItemModel = {
                    address: "0xcb7f6eF54bDc05B704a0aCf604A6A16C53d359e1",
                    name: "AAVE / USD",
                    assetName: "Aave",
                    feedType: "Crypto"
                }
    
                NFLX_USD: PriceFeedItemModel = {
                    address: "0xd6d8CAfD8c7842DfB447346957d22D5b7Edd49ed",
                    name: "NFLX / USD",
                    assetName: "Netflix",
                    feedType: "Equities"
                }
    
                SUSHI_USD: PriceFeedItemModel = {
                    address: "0xdE672241200B9309f86AB79fd082423f32fD8f0D",
                    name: "SUSHI / USD",
                    assetName: "Sushi",
                    feedType: "Crypto"
                }
    
                USDC_USD: PriceFeedItemModel = {
                    address: "0xfBd998938f8f7210eEC3D1e12E80A10972F02aEd",
                    name: "USDC / USD",
                    assetName: "Circle USD",
                    feedType: "Crypto"
                }
    
        }