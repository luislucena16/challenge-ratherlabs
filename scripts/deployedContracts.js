require("dotenv").config();
const { ethers } = require("hardhat");
const sushiAbi = require("@sushiswap/core/abi/SushiToken.json");
const chefAbi = require("@sushiswap/core/abi/MasterChef.json");
const routerAbi =
  require("@uniswap/v2-periphery/build/UniswapV2Router02.json").abi;
const pairAbi = require("@uniswap/v2-core/build/UniswapV2Pair.json").abi;
const walletAbi =
  require("../artifacts/contracts/SushiWallet.sol/SushiWallet.json").abi;

async function getContracts() {
  const [deployer, user] = await ethers.getSigners();

  const providerUrl = process.env.FUJI_RPC;
  const provider = new ethers.providers.JsonRpcProvider(providerUrl); // Obtain the ethers (provider)

  const sushi = new ethers.Contract(
    process.env.SUSHI_ADDRESS_FUJI,
    sushiAbi,
    provider // Passing the provider to the sushi contract
  );

  const router = new ethers.Contract(
    process.env.ROUTER_ADDRESS_FUJI,
    routerAbi,
    provider // Passing the provider to the router contract
  );

  const pair = new ethers.Contract(
    process.env.PAIR_ADDRESS_FUJI,
    pairAbi,
    provider // Passing the provider to the pair contract
  );

  const chef = new ethers.Contract(
    process.env.MASTER_CHEF_ADDRESS_FUJI,
    chefAbi,
    provider // Passing the provider to the chef contract
  );

  const wallet = new ethers.Contract(
    process.env.WALLET_ADDRESS_FUJI,
    walletAbi,
    provider, // Passing the provider to the wallet contract
    deployer,
    user,
  );

  return {
    sushi,
    router,
    pair,
    chef,
    wallet,
    provider, // Add the provider to the returned object
    deployer,
    user, 
  };
}

module.exports = getContracts;