pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FixedSupplyToken.sol";

contract TestFixedSupplyToken {
    //FixedSupplyToken token = FixedSupplyToken(DeployedAddresses.FixedSupplyToken());
    FixedSupplyToken token = new FixedSupplyToken();

    function testInitialSupplyUsingDeployedContract() public {
        uint expected = 1000000000000000000000000;
        Assert.equal(token.totalSupply(), expected, "It should create correct total supply");
    }

    function testOwnerInitialBalance() public {
        uint expected = 1000000000000000000000000;
        Assert.equal(token.balanceOf(this), expected, "Token owner shoul have correct initial balance");
    }

    function testTransfer() public {
        //Assert.isTrue(token.transfer(account1, 450), "Token owner can transfer token");
        Assert.isTrue(token.transfer(address(1), 450), "Token owner can transfer token");
        Assert.equal(token.balanceOf(address(1)), 450, "Token should be transfered to address1");
    }

    function testApprove() public {
        Assert.isTrue(token.approve(address(1), 450), "Token owner can approve transactions");
    }
}