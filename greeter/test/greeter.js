var Greeter = artifacts.require("Greeter");

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