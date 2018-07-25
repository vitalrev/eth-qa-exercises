const assert = require('assert');
const { Given, When, Then } = require('cucumber');

module.exports = function () {
         
  this.Given('I navigate to the Metacoin homepage', function () {
    return helpers.loadPage('http://127.0.0.1:8080/', 20);
    //return driver.get('http://127.0.0.1:8080/');
  });
          
  this.Then('I should see the expected headline', function () {
    return driver.findElement(page.metacoinHomepage.elements.balanceOutput).then(function(input) {
      expect(input).to.exist;
    })
  });

  this.When('I input valid values', function () {
    driver.findElement(page.metacoinHomepage.elements.amountInput).sendKeys('10');
    driver.findElement(page.metacoinHomepage.elements.receiverInput).sendKeys('0x8555a952e592dc1361bc0494be63878fcf6e7567');
    driver.findElement(page.metacoinHomepage.elements.sendButton).click();
  });

  this.Then('I should see a success notification', async () => {
    var status = await getStatus();
    console.log("status: " + status);
    var n = 0;
    while(n<10 && status == 'Initiating transaction... (please wait)') {
      n++;
      await sleep(1000);
      status = await getStatus();
      console.log("status: " + status);
    }

    expect(status).to.equal('Transaction complete!');
  });

  async function getStatus() {
    var statusSpan = await driver.findElement(page.metacoinHomepage.elements.statusOutput);
    var status = await statusSpan.getText();
    return status;
  }

  async function sleep(ms) {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, ms);
    });
  }
};         
