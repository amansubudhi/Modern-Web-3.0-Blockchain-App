//https://eth-ropsten.alchemyapi.io/v2/6YMOeNYIoAD7n2PUAfJ0KAQO6EeyomoC

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/6YMOeNYIoAD7n2PUAfJ0KAQO6EeyomoC',
      accounts: [ '1ed62967a83f5fa2802c2f27d47a6bc4f8f528b7953ab14db65a600953c493b8' ]    
    }
  } 
}