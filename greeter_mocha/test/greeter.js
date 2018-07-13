var assert = require('assert');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var contractAddress = "0x8cdaf0cd259887258bc13a92c0a6da92698644c0";
var instance;

describe('Greeter', () => {
    before(() => {
        instance = new web3.eth.Contract(
            [{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],
            contractAddress
        );
       
        console.log("instance: " + instance.options.address);
    });
    
    it('deploys a contract', () => {
        console.log("instance address: " + instance.options.address);
        assert.ok(instance.options.address);
    });

    describe('#greet()', function() {
        it('should return Hello', async () => {
            var result = await instance.methods.greet().call();
            console.log("RESULT of greet(): " + result);
            assert.equal("Hello", result);
           // assert.equal("World", result);
        });
    });
});