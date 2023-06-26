require("@nomiclabs/hardhat-waffle");

// Load variables from .env
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const { DEPLOYER_PRIVATE_KEY, USER_PRIVATE_KEY, FUJI_RPC } = process.env;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
    },
    fuji: {
      url: FUJI_RPC,
      accounts: [DEPLOYER_PRIVATE_KEY, USER_PRIVATE_KEY],
    },
  },
  solidity: {
    compilers: [
      { version: "0.8.4" },
      { version: "0.7.6" },
      { version: "0.6.12" },
      { version: "0.6.6" },
      { version: "0.5.0" },
    ],
  },
};