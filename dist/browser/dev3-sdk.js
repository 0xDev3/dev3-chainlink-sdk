'use strict';

var ethers = require('ethers');

var u=(s,n,e)=>new Promise((t,d)=>{var a=r=>{try{o(e.next(r));}catch(i){d(i);}},g=r=>{try{o(e.throw(r));}catch(i){d(i);}},o=r=>r.done?t(r.value):Promise.resolve(r.value).then(a,g);o((e=e.apply(s,n)).next());});var p=class{constructor(n,e){this._aggregatorV3Interface=["function decimals() external view returns (uint8)","function description() external view returns (string memory)","function version() external view returns (uint256)","function getRoundData(uint80 _roundId) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)","function latestRoundData() external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"];this._provider=new ethers.ethers.providers.JsonRpcProvider(n,e.network),this.feeds=e;}getFromOracle(n){return u(this,null,function*(){var a;let t=yield new ethers.ethers.Contract(n.address,this._aggregatorV3Interface,this._provider).latestRoundData();return {roundID:t[0],answer:t[1],startedAt:t[2],updatedAt:t[3],answeredInRound:t[4],dataFeedName:(a=n.name)!=null?a:""}})}};

exports.Dev3ChainlinkSDK = p;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=dev3-sdk.js.map