const Token = artifacts.require("FixedSupplyToken");

contract('fixedsupplytoken', function(accounts) {
    before(async() => {
        owner_account = accounts[0];
        bob_account = accounts[1];
        alice_account = accounts[2];
        token = await Token.deployed();
        decimals = (await token.decimals()).toNumber();
    });

    it("It should create correct total supply", async() => {
        var expected = 1000000;
        totalSupply = (await token.totalSupply()).toNumber() / (10**decimals);
        assert.equal(totalSupply, expected, "total supply is wrong");
    });

    it("It should assign all token to owner", async() => {
        var expected = 1000000;
        balance = (await token.balanceOf(owner_account)).toNumber() / (10**decimals);
        assert.equal(balance, expected, "owner has wrong initial balance");
    });

    it("transfer from owner to bob", async() => {
        let amount = 5000;

        let owner_starting_balance = (await token.balanceOf(owner_account)).toNumber() / (10**decimals);
        console.log("owner start balance: " + owner_starting_balance);
        let bob_starting_balance = (await token.balanceOf(bob_account)).toNumber() / (10**decimals);
        console.log("bob start balance: " + bob_starting_balance);

         await token.transfer(bob_account, amount * (10**decimals));
        let owner_ending_balance = (await token.balanceOf(owner_account)).toNumber() / (10**decimals);
        console.log("owner end balance: " + owner_ending_balance);
        console.log("owner difference balance: " + (owner_starting_balance - owner_ending_balance));
        let bob_ending_balance = (await token.balanceOf(bob_account)).toNumber() / (10**decimals);
        console.log("bob end balance: " + bob_ending_balance);

        // QUESTION-1: why do i have still the same owner balance???
        assert.equal(owner_ending_balance, owner_starting_balance - amount, 'owner has incorrect balance');
        assert.equal(bob_ending_balance, bob_starting_balance + amount, 'Bob has incorrect balance');
    });

    it("transfer from bob to alice", async() => {
        let amount = 5000;

        //account1 approve (delegate to) account2 to transfer token
        await token.approve(alice_account, amount * (10**decimals), {from: bob_account});
        //account2 transfer token from account1 to self
        await token.transferFrom(bob_account, alice_account, amount * (10**decimals), {from: alice_account});
        bob_balance = (await token.balanceOf(bob_account)).toNumber() / (10**decimals);
        console.log("bob balance:" + bob_balance);
        assert.equal(bob_balance, 0, "Token should be transfered from bob");
        alice_balance = (await token.balanceOf(alice_account)).toNumber() / (10**decimals);
        console.log("alice balance:" + alice_balance);
        assert.equal(alice_balance, amount, "Token should be transfered to alice");
    });
});