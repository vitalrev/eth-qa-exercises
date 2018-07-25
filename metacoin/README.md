#How to use (steps)
##Pre conditions
Install this stuff: 
Truffle
`npm install -g truffle`
  
Ganache
`npm install -g ganache-cli`
  
Selenium
```
npm install selenium-standalone@latest -g --save-dev
selenium-standalone install
```

Install and configure MetaMask as Chrome extention.  
Create more accounts (max. 10)
Save the 12 words __DEN__ (your password encrypted storage)

##Build
Install npm packages
`npm install`

Compile contracts
`truffle compile`

##Deploy contracts on test network (ganache)
Run genache with your MetaMask accounts
`ganache-cli -m "DEN from MetaMask"`

Deploy contracts
`truffle migrate`

##Run unit tests
`truffle test`

##Run dapp (web app)

Build web app with webpack
`npm run build`

Run
`npm run dev`

##Run cucumber-selenium GUI tests
Run selenuim
`selenium-standalone start`

Open MetaMask and choise Network localhost:8545  
  
Run test
`node ./node_modules/selenium-cucumber-js/index.js`