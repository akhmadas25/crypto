require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/JsS1Y8tHgbTlW1dA4vkbJOvPe6JhkBbJ",
      accounts: [
        "c3f2b608e74f96d8cb3a79324cf44f929d44809695110bb98b5285cc89b96dc0",
      ],
    },
  },
};
