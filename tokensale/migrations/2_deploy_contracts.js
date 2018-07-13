var SafeMath = artifacts.require("SafeMath");
var FixedSupplyToken = artifacts.require("FixedSupplyToken");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, FixedSupplyToken);
  deployer.deploy(FixedSupplyToken);
};
