"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceFeedsBSC = void 0;
var PriceFeedsBSC = /** @class */ (function () {
    function PriceFeedsBSC() {
        this.network = 56;
        this.DAI_BNB = {
            address: "0x000f46946d47647c04A5f10269e9084FB8c8637A",
            name: "DAI / BNB",
            assetName: "DAI",
            feedType: "Crypto"
        };
        this.KLAY_USD = {
            address: "0x00865e449e123BA4C3A46D614330dA56b739f723",
            name: "KLAY / USD",
            assetName: "Klaytn",
            feedType: "Crypto"
        };
        this.REEF_USD = {
            address: "0x066D0CD30f981a96e2fE4F958c5E7F4999BE0AdF",
            name: "REEF / USD",
            assetName: "Reef Finance",
            feedType: "Crypto"
        };
        this.WBTC_USD = {
            address: "0x073B2f1E609801CA94be867B2517e5b2C4EA6c36",
            name: "WBTC / USD",
            assetName: "Wrapped Bitcoin",
            feedType: "Crypto"
        };
        this.XRP_BNB = {
            address: "0x0877689c510f099FB968906223ab0a3F556d4f2B",
            name: "XRP / BNB",
            assetName: "Ripple",
            feedType: "Crypto"
        };
        this.DAI_USD = {
            address: "0x09A183232a9184ae07CEee3c0401f7435D42efdF",
            name: "DAI / USD",
            assetName: "DAI",
            feedType: "Crypto"
        };
        this.AAPL_USD = {
            address: "0x09e6B30909AdD72E1E6285F8d7609B882940e3b4",
            name: "AAPL / USD",
            assetName: "Apple",
            feedType: "Equities"
        };
        this.DODO_USD = {
            address: "0x0Ad45915fC60a08dEcD39D27ad69AC10966C82C0",
            name: "DODO / USD",
            assetName: "Dodo",
            feedType: "Crypto"
        };
        this.LINK_USD = {
            address: "0x0B67AD077Fa839F6737A1630c89eE1A1572989c6",
            name: "LINK / USD",
            assetName: "Chainlink",
            feedType: "Crypto"
        };
        this.EOS_USD = {
            address: "0x0C1A3fa6Cc1a91F751A9232cC5D6Be9700a93Fc7",
            name: "EOS / USD",
            assetName: "EOS",
            feedType: "Crypto"
        };
        this.UNI_BNB = {
            address: "0x0Cee6620d87FD023800795D565A71fE214777aeb",
            name: "UNI / BNB",
            assetName: "Uniswap",
            feedType: "Crypto"
        };
        this.ZIL_USD = {
            address: "0x0D14D66DcB20b9EC4e9679AC8E4775a314D2E298",
            name: "ZIL / USD",
            assetName: "Ziliqa",
            feedType: "Crypto"
        };
        this.HIGH_USD = {
            address: "0x0D5aB38D37A5B5427B971E10F99e8c06599260Af",
            name: "HIGH / USD",
            assetName: "Highstreet",
            feedType: "Crypto"
        };
        this.FTT_USD = {
            address: "0x122400b06aAC5ba901492035aFC99d3a5C262330",
            name: "FTT / USD",
            assetName: "FTX Token",
            feedType: "Crypto"
        };
        this.XTZ_BNB = {
            address: "0x1255E2748A3A26b248d654B5194CdeFc4594b90A",
            name: "XTZ / BNB",
            assetName: "Tezos",
            feedType: "Crypto"
        };
        this.BAC_USD = {
            address: "0x12D42e13E69A28e95DbB3F2644eeCDBcFB7cA8C3",
            name: "BAC / USD",
            assetName: "Bank of America",
            feedType: "Equities"
        };
        this.BNB_USD = {
            address: "0x137924D7C36816E0DcAF016eB617Cc2C92C05782",
            name: "BNB / USD",
            assetName: "BNB",
            feedType: "Crypto"
        };
        this.SOL_USD = {
            address: "0x14E9D15c1EcD428606c443Ed715631b5C444a49e",
            name: "SOL / USD",
            assetName: "Solana",
            feedType: "Crypto"
        };
        this.XAG_USD = {
            address: "0x168f55dFe619E37fe2393c3bA3c831647F8617c0",
            name: "XAG / USD",
            assetName: "Silver",
            feedType: "Commodities"
        };
        this.BTC_USD = {
            address: "0x178bA789e24A1d51E9Ea3Cb1Db3B52917963D71D",
            name: "BTC / USD",
            assetName: "Bitcoin",
            feedType: "Crypto"
        };
        this.JPM_USD = {
            address: "0x194007B7A59c8E7105852FC19E18C4A5c344ADEA",
            name: "JPM / USD",
            assetName: "JP Morgan",
            feedType: "Equities"
        };
        this.MCAP_USD = {
            address: "0x1973C429B5f7451d83337061A85ef9cEe2637B24",
            name: "Total Marketcap USD",
            assetName: "Total cryptocurrency market cap",
            feedType: "Crypto"
        };
        this.SHIB_USD = {
            address: "0x19Ec74fd763db58B77E6EC6b556B9c594ca67ABB",
            name: "SHIB / USD",
            assetName: "Shiba Inu",
            feedType: "Crypto"
        };
        this.ADA_USD = {
            address: "0x2028b4a27c14263Ba00C75c42cfe524E705031F4",
            name: "ADA / USD",
            assetName: "Cardano",
            feedType: "Crypto"
        };
        this.KAVA_USD = {
            address: "0x2029297624088ea9e3eE549E40d33d4966Ce1C63",
            name: "KAVA / USD",
            assetName: "Kava",
            feedType: "Crypto"
        };
        this.XLM_USD = {
            address: "0x266C0eefc329bb610B1e79267D836bca88648AaE",
            name: "XLM / USD",
            assetName: "Stellar",
            feedType: "Crypto"
        };
        this.TSLA_USD = {
            address: "0x2719B94Df5a59267D2165c42c59bCa35bf657351",
            name: "TSLA / USD",
            assetName: "Tesla",
            feedType: "Equities"
        };
        this.ETH_BNB = {
            address: "0x2813fAB00b38189AcB8D805A687222Ae1034D53a",
            name: "ETH / BNB",
            assetName: "Ethereum",
            feedType: "Crypto"
        };
        this.WIN_USD = {
            address: "0x2BCBF9e068E889A613A8E4366c88412977869C0A",
            name: "WIN / USD",
            assetName: "WINkLink",
            feedType: "Crypto"
        };
        this.USDT_USD = {
            address: "0x2dc202b56A03667cC240B290c2BE2b8453E89eA1",
            name: "USDT / USD",
            assetName: "Tether USD",
            feedType: "Crypto"
        };
        this.ATOM_USD = {
            address: "0x2e9c2B44D3f5702D2654c20260E8e010656D9777",
            name: "ATOM / USD",
            assetName: "Cosmos",
            feedType: "Crypto"
        };
        this.BRL_USD = {
            address: "0x2f92dc0711AdA3dc255e2197e7c15C8aDC6b6537",
            name: "BRL / USD",
            assetName: "Brazilian Real",
            feedType: "Forex"
        };
        this.BTT_USD = {
            address: "0x322aa7DA39250d891c6F01FF07af1eA164d99280",
            name: "BTT / USD",
            assetName: "BitTorrent",
            feedType: "Crypto"
        };
        this.BAND_BNB = {
            address: "0x3331b2d33E9a472f6b34C150D47017d75b4CD088",
            name: "BAND / BNB",
            assetName: "Band Protocol",
            feedType: "Crypto"
        };
        this.CALCULATED_SAVAX_USD = {
            address: "0x338b40CaAef0267191a1869aC5ef9E7945949aeA",
            name: "Calculated SAVAX / USD",
            assetName: "Calculated Liquid Staked AVAX",
            feedType: "Crypto"
        };
        this.BTC_ETH = {
            address: "0x343FB6A2ED16509a934880Abc82d0251867B70f4",
            name: "BTC / ETH",
            assetName: "Bitcoin",
            feedType: "Crypto"
        };
        this.FXS_USD = {
            address: "0x36Eb75b819dF05FB868b16074dF1A9c4354082c0",
            name: "FXS / USD",
            assetName: "Frax Share",
            feedType: "Crypto"
        };
        this.CAKE_BNB = {
            address: "0x370d7b33330d40c55e8e71aFD88eFB31E9Dcc620",
            name: "CAKE / BNB",
            assetName: "PancakeSwap",
            feedType: "Crypto"
        };
        this.MS_USD = {
            address: "0x3820576866B5cAb5aDD3686c91fD27747b05E616",
            name: "MS / USD",
            assetName: "Morgan Stanley",
            feedType: "Equities"
        };
        this.CFX_USD = {
            address: "0x3889e2FD71BB7a0600Da48D98CD579b2A1d39F51",
            name: "CFX / USD",
            assetName: "Conflux",
            feedType: "Crypto"
        };
        this.BCH_BNB = {
            address: "0x38d0f1dfE37Aac059aD06B2d30Ef60AA537f0b05",
            name: "BCH / BNB",
            assetName: "Bitcoin Cash",
            feedType: "Crypto"
        };
        this.DOT_BNB = {
            address: "0x390B935CdB6fC4924D203a398DA160178efe7b8A",
            name: "DOT / BNB",
            assetName: "Polkadot",
            feedType: "Crypto"
        };
        this.SPY_USD = {
            address: "0x39F96B0B24E8b2D859850c9bfA1CF95c0144592E",
            name: "SPY / USD",
            assetName: "SPY S&amp;P 500 ETF",
            feedType: "Equities"
        };
        this.PHP_USD = {
            address: "0x3D524E10b4C798b94c0d3353C7235f2bA14A5892",
            name: "PHP / USD",
            assetName: "Philippine Peso",
            feedType: "Forex"
        };
        this.TSM_USD = {
            address: "0x3D74545EF2A93a5C71c9c3CbD4a14dFC2BEfDd6E",
            name: "TSM / USD",
            assetName: "Taiwan Semiconductor",
            feedType: "Equities"
        };
        this.THB_USD = {
            address: "0x3ED241a1877D213F70d7DDcaeF5c4995b63ED88D",
            name: "THB / USD",
            assetName: "Thai Baht",
            feedType: "Forex"
        };
        this.CRV_USD = {
            address: "0x3f57d674804DfC9F5CA927531969012C5C9095bd",
            name: "CRV / USD",
            assetName: "Curve",
            feedType: "Crypto"
        };
        this.NEAR_USD = {
            address: "0x40B8039e1A5A831b493C15164228A1839dd5b62a",
            name: "NEAR / USD",
            assetName: "NEAR Protocol",
            feedType: "Crypto"
        };
        this.BIFI_USD = {
            address: "0x43c70DB4018857eB6c4D6aA40880f144033AEAf5",
            name: "BIFI / USD",
            assetName: "Beefy Finance",
            feedType: "Crypto"
        };
        this.COIN_USD = {
            address: "0x4402EE0a557703071bf15F3C2F1743dec9a1600c",
            name: "COIN / USD",
            assetName: "Coinbase",
            feedType: "Equities"
        };
        this.ALPACA_USD = {
            address: "0x481E278Bf87281CF12342A4302e799Bf8515b985",
            name: "ALPACA / USD",
            assetName: "Alpaca Finance",
            feedType: "Crypto"
        };
        this.ARPA_USD = {
            address: "0x4849167844B7c8074B3Da31332AA547a17877b63",
            name: "ARPA / USD",
            assetName: "ARPA Chain",
            feedType: "Crypto"
        };
        this.CREAM_BNB = {
            address: "0x4a2A603d64C807C6532053EF808117048ac9990a",
            name: "CREAM / BNB",
            assetName: "CREAM",
            feedType: "Crypto"
        };
        this.BETH_USD = {
            address: "0x4c935c5C9a6BADC0855AD3B5867BCFf90c8bD5eC",
            name: "BETH / USD",
            assetName: "Binance ETH",
            feedType: "Crypto"
        };
        this.INJ_USD = {
            address: "0x4d70d497CeF3674be370586230F9a2f4b30CFF11",
            name: "INJ / USD",
            assetName: "Injective Protocol",
            feedType: "Crypto"
        };
        this.ADA_BNB = {
            address: "0x50204D36C231CD4F0De67545Cd1E36C01336e46b",
            name: "ADA / BNB",
            assetName: "Cardano",
            feedType: "Crypto"
        };
        this.UNI_USD = {
            address: "0x52Bd76d61D59a4F4B740FD31B97aFaD6217F960D",
            name: "UNI / USD",
            assetName: "Uniswap",
            feedType: "Crypto"
        };
        this.INR_USD = {
            address: "0x577971aa5f4cF0a7f905dB42d612072CfF65077d",
            name: "INR / USD",
            assetName: "Indian Rupee",
            feedType: "Forex"
        };
        this.ONT_USD = {
            address: "0x586E5572217D68643E1de6a0d40Cb37B0961A11a",
            name: "ONT / USD",
            assetName: "Ontology",
            feedType: "Crypto"
        };
        this.XRP_USD = {
            address: "0x5C0F367A778857B36E88B553df132b232AC34901",
            name: "XRP / USD",
            assetName: "Ripple",
            feedType: "Crypto"
        };
        this.AUD_USD = {
            address: "0x5C8c6c45dcF57aEae4D7Ba4F613B6FC38EF7d18B",
            name: "AUD / USD",
            assetName: "Australian Dollar",
            feedType: "Forex"
        };
        this.XTZ_USD = {
            address: "0x5CeefEC70Fb4819B9CE2dEaa6355c77E3243e640",
            name: "XTZ / USD",
            assetName: "Tezos",
            feedType: "Crypto"
        };
        this.DODO_BNB = {
            address: "0x5D22062a0f28C476091D7023E7D2a240bA7e6b96",
            name: "DODO / BNB",
            assetName: "Dodo",
            feedType: "Crypto"
        };
        this.AUTO_USD = {
            address: "0x5Ff27E78AE8fc4C329De7064ebe7FEbdE859af0A",
            name: "AUTO / USD",
            assetName: "Auto",
            feedType: "Crypto"
        };
        this.SXP_USD = {
            address: "0x5ba2B3A2a41141Aa55Fc72C40d6643aEE12BD0B6",
            name: "SXP / USD",
            assetName: "Swipe",
            feedType: "Crypto"
        };
        this.SGD_USD = {
            address: "0x621319Ec1f6AFcb4a9dd91DAB135a1C7E22F46a5",
            name: "SGD / USD",
            assetName: "Singapore Dollar",
            feedType: "Forex"
        };
        this.VET_USD = {
            address: "0x6297c4cd4002F8c1ECe816dF53D5cdeeead10C25",
            name: "VET / USD",
            assetName: "VeChain",
            feedType: "Crypto"
        };
        this.FRAX_USD = {
            address: "0x673DA2F5eaE6860F7b1249e2CbCca433834a1EB3",
            name: "FRAX / USD",
            assetName: "FRAX",
            feedType: "Crypto"
        };
        this.LINK_BNB = {
            address: "0x678f2883BB67104273229463ddA15Ee841584b36",
            name: "LINK / BNB",
            assetName: "Chainlink",
            feedType: "Crypto"
        };
        this.BRKB_USD = {
            address: "0x69fC6A49C914500ba323Ea68C60f979908Cc71FA",
            name: "BRK.B / USD",
            assetName: "Berkshire Hathaway",
            feedType: "Equities"
        };
        this.PAXG_USD = {
            address: "0x6FfA7c72cCd821A4dB68FD75Ee465dd09AA8C088",
            name: "PAXG / USD",
            assetName: "Pax Gold",
            feedType: "Crypto"
        };
        this.MXN_USD = {
            address: "0x6a6eb03007131EAe9D02f66289a82d784c4EeA50",
            name: "MXN / USD",
            assetName: "Mexican Peso",
            feedType: "Forex"
        };
        this.CHF_USD = {
            address: "0x6c9C9757F0478bC38Bf73ABdA27ac42864De0645",
            name: "CHF / USD",
            assetName: "Swiss Franc",
            feedType: "Forex"
        };
        this.JPY_USD = {
            address: "0x6f3f35Cc510232E41179F9010Cf12b1B48538a91",
            name: "JPY / USD",
            assetName: "Japanese Yen",
            feedType: "Forex"
        };
        this.USDC_USD = {
            address: "0x7008fDEd94a8Ce68D01FEB633C4D81C2be7a1B20",
            name: "USDC / USD",
            assetName: "Circle USD",
            feedType: "Crypto"
        };
        this.QQQ_USD = {
            address: "0x70d929aa2975D050abAf125E64cc55e0b0160F8b",
            name: "QQQ / USD",
            assetName: "QQQ Nasdaq 100 ETF",
            feedType: "Equities"
        };
        this.EOS_BNB = {
            address: "0x73D17dbB9d4d520Ca4D260c359994d8a2Aa4cDa3",
            name: "EOS / BNB",
            assetName: "EOS",
            feedType: "Crypto"
        };
        this.AAVE_USD = {
            address: "0x7457f14cE4773EBEb1352D2774Ec384a54c2F665",
            name: "AAVE / USD",
            assetName: "Aave",
            feedType: "Crypto"
        };
        this.SUSHI_USD = {
            address: "0x761Eff952671395708f22c5a7d5673685277A5c3",
            name: "SUSHI / USD",
            assetName: "Sushi",
            feedType: "Crypto"
        };
        this.BUSD_BNB = {
            address: "0x76303936B9DF69474A57352765faCEca2bf9C7Ef",
            name: "BUSD / BNB",
            assetName: "Binance USD",
            feedType: "Crypto"
        };
        this.SPELL_USD = {
            address: "0x76c8Ab236643e68539766CE00eac8Fb582199183",
            name: "SPELL / USD",
            assetName: "Spell Token",
            feedType: "Crypto"
        };
        this.CAKE_USD = {
            address: "0x7935a51aDDaB8550D346FEEf34e02F67C9330109",
            name: "CAKE / USD",
            assetName: "PancakeSwap",
            feedType: "Crypto"
        };
        this.BORING_BNB = {
            address: "0x7A23675a974F6AEf321dBfA442B4231Bf512391F",
            name: "BORING / BNB",
            assetName: "BoringDAO",
            feedType: "Crypto"
        };
        this.BUSD_USD = {
            address: "0x7A6BB3a3C0C99bA43564017D7523a74BA0f7cB5d",
            name: "BUSD / USD",
            assetName: "Binance USD",
            feedType: "Crypto"
        };
        this.BTC_BNB = {
            address: "0x7E90d60D3207A96FAaBB895C9c7DeE2E2CaBa0Fd",
            name: "BTC / BNB",
            assetName: "Bitcoin",
            feedType: "Crypto"
        };
        this.LTC_BNB = {
            address: "0x80519EcaD69B8E43C6690b73554379BfdF0eF79E",
            name: "LTC / BNB",
            assetName: "Litecoin",
            feedType: "Crypto"
        };
        this.ZAR_USD = {
            address: "0x86EB1bb8c66F365Ea3df12a565a46cEA204f6283",
            name: "ZAR / USD",
            assetName: "South African Rand",
            feedType: "Forex"
        };
        this.MIM_USD = {
            address: "0x87a69a2988b33ea745008A47486890232630AABf",
            name: "MIM / USD",
            assetName: "Magic Internet Money",
            feedType: "Crypto"
        };
        this.AMZN_USD = {
            address: "0x87cbA2Da16C453B02BBc70565f8F8a89722DF300",
            name: "AMZN / USD",
            assetName: "Amazon",
            feedType: "Equities"
        };
        this.BAND_USD = {
            address: "0x8A73214adB7a23334371Cb7C0c6165973F45Cd42",
            name: "BAND / USD",
            assetName: "Band Protocol",
            feedType: "Crypto"
        };
        this.BIFI_BNB = {
            address: "0x8d06D8b3a37D9A1BCA3df055bDdD07f1639af4E6",
            name: "BIFI / BNB",
            assetName: "Beefy Finance",
            feedType: "Crypto"
        };
        this.UNH_USD = {
            address: "0x8d35254334e55248eE4D6D65F9CefB924d8D9f3d",
            name: "UNH / USD",
            assetName: "United Health",
            feedType: "Equities"
        };
        this.TWT_BNB = {
            address: "0x8dbb48f934b02E891e19Ec09f76B54f3ED5f01Ee",
            name: "TWT / BNB",
            assetName: "Trust Wallet Token",
            feedType: "Crypto"
        };
        this.FIL_USD = {
            address: "0x8f8289E5CA9a4C867ec7A257b0E9Dd1132093E23",
            name: "FIL / USD",
            assetName: "Filecoin",
            feedType: "Crypto"
        };
        this.TUSD_USD = {
            address: "0x916aaDaCeb786351c7e810C6a4E8071cf00CEeC8",
            name: "TUSD / USD",
            assetName: "True USD",
            feedType: "Crypto"
        };
        this.COMP_USD = {
            address: "0x94069ff23E3a962646638b2Bb44d4d7F664DCCbD",
            name: "COMP / USD",
            assetName: "Compound",
            feedType: "Crypto"
        };
        this.SPCE_USD = {
            address: "0x94ef051e42F4462fB7AE00BbA66E643D1b93dA60",
            name: "SPCE / USD",
            assetName: "Virgin Galactic",
            feedType: "Equities"
        };
        this.DPI_USD = {
            address: "0x97B83b0984B16A57E00a0a819e568632239A7A76",
            name: "DPI / USD",
            assetName: "DefiPulse Index",
            feedType: "Crypto"
        };
        this.KNC_USD = {
            address: "0x982675D04D9c9fA074c702f5AcA3d84D04FE31D5",
            name: "KNC / USD",
            assetName: "Kyber Network Crystal",
            feedType: "Crypto"
        };
        this.ALPHA_BNB = {
            address: "0x9c0Ab19514D52196B09B04294937ECEC2Dc69950",
            name: "ALPHA / BNB",
            assetName: "Alpha Finance",
            feedType: "Crypto"
        };
        this.NULS_USD = {
            address: "0x9e88f327778810E386eB2eBf6619A74d4D7568c6",
            name: "NULS / USD",
            assetName: "Nuls",
            feedType: "Crypto"
        };
        this.CHR_USD = {
            address: "0x9eBB8330dff88F3D9E743E8240177cdCD3292103",
            name: "CHR / USD",
            assetName: "Chromaway",
            feedType: "Crypto"
        };
        this.VT_USD = {
            address: "0xA37567606729CB03F16BAF1611335b6635E4FDDE",
            name: "VT / USD",
            assetName: "Vanguard Total World ETF",
            feedType: "Equities"
        };
        this.NVDA_USD = {
            address: "0xAAADa315B51E29901566664135C228f2CF287F33",
            name: "NVDA / USD",
            assetName: "Nvidia",
            feedType: "Equities"
        };
        this.YFII_USD = {
            address: "0xAB05DFc2e4aF7fb1b512306e3E0a3617992BB6E2",
            name: "YFII / USD",
            assetName: "YFII Finance",
            feedType: "Crypto"
        };
        this.ARKK_USD = {
            address: "0xAD249Db435A301dD9559730b85028D40c933dE63",
            name: "ARKK / USD",
            assetName: "ARK Innovation ETF",
            feedType: "Equities"
        };
        this.AVAX_USD = {
            address: "0xB4C0F8F07a5e5d870bC02457213809B9cb5F56C4",
            name: "AVAX / USD",
            assetName: "Avalanche",
            feedType: "Crypto"
        };
        this.LTC_USD = {
            address: "0xB92B265908775B59517eC1fC6C6635f7E1D60f1D",
            name: "LTC / USD",
            assetName: "Litecoin",
            feedType: "Crypto"
        };
        this.VAI_USD = {
            address: "0xC04121E448DAC0BA66c0C76b28b5512Cf08bD41A",
            name: "VAI / USD",
            assetName: "Vai",
            feedType: "Crypto"
        };
        this.BSW_USD = {
            address: "0xC430481d7f5b670623c70420643AC5EfA0D7c95d",
            name: "BSW / USD",
            assetName: "Biswap",
            feedType: "Crypto"
        };
        this.ONG_USD = {
            address: "0xCB2ac1D2e2582dE7b5EFbB174f04B1D8Ecd2d043",
            name: "ONG / USD",
            assetName: "Ontology Gas",
            feedType: "Crypto"
        };
        this.MBOX_USD = {
            address: "0xCE75B866Ec86Ac261Ea191F0BC7820FB296C2477",
            name: "MBOX / USD",
            assetName: "Mobox",
            feedType: "Crypto"
        };
        this.MRNA_USD = {
            address: "0xD026fB17CC40923D4c155486970A0502C85Cb8E5",
            name: "MRNA / USD",
            assetName: "Moderna",
            feedType: "Equities"
        };
        this.XVS_USD = {
            address: "0xD051e4050dAd55285EEDbC186095C0Ccb7054944",
            name: "XVS / USD",
            assetName: "Venus",
            feedType: "Crypto"
        };
        this.EUR_USD = {
            address: "0xD2528B74ca91Bb07B9bd9685ce533367C6fa657C",
            name: "EUR / USD",
            assetName: "Euro",
            feedType: "Forex"
        };
        this.YFI_BNB = {
            address: "0xD2a2976cdf5098971DaA56878212Cdb24Ecb0CbB",
            name: "YFI / BNB",
            assetName: "Yearn Finance",
            feedType: "Crypto"
        };
        this.GOOGL_USD = {
            address: "0xDd7d114B15b6052750Ed5a9B753858366c01FA67",
            name: "GOOGL / USD",
            assetName: "Alphabet",
            feedType: "Equities"
        };
        this.XVS_BNB = {
            address: "0xE0A0Bc15e8Cbe87e9b6307693A368085E164878a",
            name: "XVS / BNB",
            assetName: "Venus",
            feedType: "Crypto"
        };
        this.GBP_USD = {
            address: "0xE0A34B8FC5e80C877fd568bd22b49E1BCa977B6F",
            name: "GBP / USD",
            assetName: "Pound Sterling",
            feedType: "Forex"
        };
        this.MSFT_USD = {
            address: "0xE4A4ceE270f5113FF17CB5c7798f83780C1e55A6",
            name: "MSFT / USD",
            assetName: "Microsoft",
            feedType: "Equities"
        };
        this.LINA_USD = {
            address: "0xE6Ff236A76594a9A1Da727cA42B29c7B3ac0d45A",
            name: "LINA / USD",
            assetName: "Linear",
            feedType: "Crypto"
        };
        this.GME_USD = {
            address: "0xEF447188e7bd5a7a4E4ceD711ee9de1aF1B11bC3",
            name: "GME / USD",
            assetName: "Gamestop",
            feedType: "Equities"
        };
        this.GMT_USD = {
            address: "0xEFc3be9286c4aE5c712BaB1182204086Ba0c45B6",
            name: "GMT / USD",
            assetName: "STEPN",
            feedType: "Crypto"
        };
        this.USDT_BNB = {
            address: "0xF1703b483822f12Bf0D84296F2266196Ca9C352b",
            name: "USDT / BNB",
            assetName: "Tether USD",
            feedType: "Crypto"
        };
        this.MASK_USD = {
            address: "0xF1eed6F4A9006B3Cf8f547B36d055b97EF50DE8b",
            name: "MASK / USD",
            assetName: "Mask Network",
            feedType: "Crypto"
        };
        this.LIT_USD = {
            address: "0xF23D01646Fe967A6c403Defdff24299040Fd4935",
            name: "LIT / USD",
            assetName: "Litentry",
            feedType: "Crypto"
        };
        this.FB_USD = {
            address: "0xF57A06A342D851E8cE2c9512b20D08331eEc43Ab",
            name: "FB / USD",
            assetName: "Meta",
            feedType: "Equities"
        };
        this.BCH_USD = {
            address: "0xF78feB6c096117Bfb9283aa1eAc304449E04d374",
            name: "BCH / USD",
            assetName: "Bitcoin Cash",
            feedType: "Crypto"
        };
        this.DEGO_USD = {
            address: "0xF9e6F8660649f9762E0a721D666B8B5931EBB994",
            name: "DEGO / USD",
            assetName: "Dego Finance",
            feedType: "Crypto"
        };
        this.ICP_USD = {
            address: "0xFB3e6157BA71C0d8853690C4Fd3ff88109A79103",
            name: "ICP / USD",
            assetName: "Internet Computer Protocol",
            feedType: "Crypto"
        };
        this.WOO_USD = {
            address: "0xFBd2fED777DaaB126041b193006DE529118Eaf95",
            name: "WOO / USD",
            assetName: "Woo Network",
            feedType: "Crypto"
        };
        this.BIDU_USD = {
            address: "0xa78f89fa9A028100998D7207A573B12295342e03",
            name: "BIDU / USD",
            assetName: "Baidu",
            feedType: "Equities"
        };
        this.C98_USD = {
            address: "0xacBf98E423Bb8458397dF2d4Cc9eE031879Fd59F",
            name: "C98 / USD",
            assetName: "C98",
            feedType: "Crypto"
        };
        this.CREAM_USD = {
            address: "0xb17986392f672598b24e826086662dcc9d7c512A",
            name: "CREAM / USD",
            assetName: "CREAM",
            feedType: "Crypto"
        };
        this.FET_USD = {
            address: "0xb2B7c2d554F52dAeC37974b2E335c98cdA8cEB3A",
            name: "FET / USD",
            assetName: "Fetch.ai",
            feedType: "Crypto"
        };
        this.TRX_USD = {
            address: "0xb7EE93d3E0586571D481F9d967d82383BB460B38",
            name: "TRX / USD",
            assetName: "Tron",
            feedType: "Crypto"
        };
        this.NFLX_USD = {
            address: "0xb921310Af82D1e41498e15Fe784eFEd01a7E9830",
            name: "NFLX / USD",
            assetName: "Netflix",
            feedType: "Equities"
        };
        this.AXS_USD = {
            address: "0xc0850B8587cffA166985fa397e8391fecA959f3f",
            name: "AXS / USD",
            assetName: "Axie Infinity",
            feedType: "Crypto"
        };
        this.XAU_USD = {
            address: "0xc54645D805aca807E7f40b9308D159BB62939E3a",
            name: "XAU / USD",
            assetName: "Gold",
            feedType: "Commodities"
        };
        this.USDC_BNB = {
            address: "0xc98fb42526666963d2b43a1ca5C3dc04fe744cdb",
            name: "USDC / BNB",
            assetName: "Circle USD",
            feedType: "Crypto"
        };
        this.WTI_USD = {
            address: "0xc9aBbdffaCBdE68192686Db1FAf8ac82c7864741",
            name: "WTI / USD",
            assetName: "WTI Crude",
            feedType: "Commodities"
        };
        this.DOGE_USD = {
            address: "0xd0A597FfC7075E1449eCE7fEaA9880488dDB34FD",
            name: "DOGE / USD",
            assetName: "Dogecoin",
            feedType: "Crypto"
        };
        this.YFI_USD = {
            address: "0xd29cFB96e80fCBA432713B7aE5086a6718d4E046",
            name: "YFI / USD",
            assetName: "Yearn Finance",
            feedType: "Crypto"
        };
        this.ONEINCH_USD = {
            address: "0xd690b2CF0D2bcBce51c4cE2dc46E02C508465c5c",
            name: "1INCH / USD",
            assetName: "1inch",
            feedType: "Crypto"
        };
        this.PFE_USD = {
            address: "0xe12938e680c7b82361fe7482bD80C23A7dF5cbBe",
            name: "PFE / USD",
            assetName: "Pfizer",
            feedType: "Equities"
        };
        this.DOT_USD = {
            address: "0xe978DaA50D3A8574F139c1e3Fe5D511dDb323BC5",
            name: "DOT / USD",
            assetName: "Polkadot",
            feedType: "Crypto"
        };
        this.MATIC_USD = {
            address: "0xeC1Ca9c5Dd897F832CDe3D43BB041f5e01380757",
            name: "MATIC / USD",
            assetName: "Polygon (MATIC)",
            feedType: "Crypto"
        };
        this.DF_USD = {
            address: "0xf0EcE271b1c02128e30C5797C0D76b2c9c36ec17",
            name: "DF / USD",
            assetName: "dForce",
            feedType: "Crypto"
        };
        this.CALCULATED_BNBX_USD = {
            address: "0xf230822f96bc8819e037db85695fc093d2C68Ccd",
            name: "Calculated BNBx / USD",
            assetName: "Stader BNBx",
            feedType: "Crypto"
        };
        this.MDX_USD = {
            address: "0xf23C2aa8c9e8E2e6E48257c495E624CA87Bb14BC",
            name: "MDX / USD",
            assetName: "MDex",
            feedType: "Crypto"
        };
        this.FTM_USD = {
            address: "0xf5C16d009af1F1d3395883d9d7e626472D2dd6B8",
            name: "FTM / USD",
            assetName: "Fantom",
            feedType: "Crypto"
        };
        this.PACB_USD = {
            address: "0xf61634861D8EbfD65C6974F1E51477988fE2DAC3",
            name: "PACB / USD",
            assetName: "Pacific Biosciences",
            feedType: "Equities"
        };
        this.WING_USD = {
            address: "0xf8Aa2505865E12b606438312FF572Bf8119E4A65",
            name: "WING / USD",
            assetName: "Wing Finance",
            feedType: "Crypto"
        };
        this.ETH_USD = {
            address: "0xfC3069296a691250fFDf21fe51340fdD415a76ed",
            name: "ETH / USD",
            assetName: "Ethereum",
            feedType: "Crypto"
        };
    }
    return PriceFeedsBSC;
}());
exports.PriceFeedsBSC = PriceFeedsBSC;
