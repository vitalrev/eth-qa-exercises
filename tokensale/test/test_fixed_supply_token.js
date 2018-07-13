const Token = artifacts.require("FixedSupplyToken");

contract('fixedsupplytoken', function(accounts) {
    before(async() => {
        owner_account = accounts[0];
        token = await Token.deployed();
    });

    it("It should create correct total supply", async() => {
        var expected = 1000000000000000000000000;
        totalSupply = await token.totalSupply();
        assert.equal(totalSupply, expected, "total supply is wrong");
    });

    it("It should assign all token to owner", async() => {
        var expected = 1000000000000000000000000;
        balance = await token.balanceOf(owner_account);
        assert.equal(balance, expected, "owner has wrong initial balance");
    });

    it("transfer from owner to account1", async() => {
        await token.transfer(accounts[1], 450);
        balance = await token.balanceOf(accounts[1]);
        console.log("acc1 balance:" + balance);
        assert.equal(balance, 450, "Token should be transfered to address1");
    });

    it("transfer from account1 to account2", async() => {
        //account1 approve (delegate to) account2 to transfer token
        await token.approve(accounts[2], 450, {from: accounts[1]});
        //account2 transfer token from account1 to self
        await token.transferFrom(accounts[1], accounts[2], 450, {from: accounts[2]});
        balance1 = await token.balanceOf(accounts[1]);
        console.log("acc1 balance:" + balance1);
        assert.equal(balance1, 0, "Token should be transfered from address1");
        balance2 = await token.balanceOf(accounts[2]);
        console.log("acc2 balance:" + balance2);
        assert.equal(balance2, 450, "Token should be transfered to address2");
    });
});