"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dev3ChainlinkSDK = void 0;
var ethers_1 = require("ethers");
var eth_data_feed_1 = require("../data-feeds/eth-data-feed");
var Dev3ChainlinkSDK = /** @class */ (function () {
    function Dev3ChainlinkSDK(rpcURL) {
        this.ethFeeds = eth_data_feed_1.ETHPriceFeeds;
        this._aggregatorV3Interface = [
            "function decimals() external view returns (uint8)",
            "function description() external view returns (string memory)",
            "function version() external view returns (uint256)",
            "function getRoundData(uint80 _roundId) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)",
            "function latestRoundData() external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"
        ];
        this._provider = new ethers_1.ethers.providers.JsonRpcProvider(rpcURL, "mainnet");
    }
    Dev3ChainlinkSDK.prototype.getFromOracle = function (feed) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var AggregatorV3Contract, roundData, mappedData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        AggregatorV3Contract = new ethers_1.ethers.Contract(feed.address, this._aggregatorV3Interface, this._provider);
                        return [4 /*yield*/, AggregatorV3Contract.latestRoundData()];
                    case 1:
                        roundData = _b.sent();
                        mappedData = {
                            roundID: roundData[0],
                            answer: roundData[1],
                            startedAt: roundData[2],
                            updatedAt: roundData[3],
                            answeredInRound: roundData[4],
                            dataFeedName: (_a = feed.name) !== null && _a !== void 0 ? _a : ""
                        };
                        return [2 /*return*/, mappedData];
                }
            });
        });
    };
    return Dev3ChainlinkSDK;
}());
exports.Dev3ChainlinkSDK = Dev3ChainlinkSDK;
