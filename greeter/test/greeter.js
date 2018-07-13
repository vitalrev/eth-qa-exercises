var Greeter = artifacts.require("Greeter");
/*
contract('Greeter', function(accounts) {
  it("should return Hello", function() {
    return Greeter.deployed().then(function(instance) {
        console.log("instance addresse: " + instance);
      return instance.greet();
      //return instance.greet.call();
    }).then(function(result) {
      assert.equal("Hello", result);
    });
  });
});
*/

contract('Greeter', function(accounts) {
    it("should return Hello", async () => {
        var instance = await Greeter.deployed();
        console.log("instance addresse: " + instance);
        var result = await instance.greet();
        assert.equal("Hello", result);
       // assert.equal("World", result);
    });
  });