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

  const provider = ethers.provider; // Obtener el proveedor (provider) de ethers

  const sushi = new ethers.Contract(
    process.env.SUSHI_ADDRESS_FUJI,
    sushiAbi,
    provider // Pasar el proveedor (provider) al contrato sushi
  );

  const router = new ethers.Contract(
    process.env.ROUTER_ADDRESS_FUJI,
    routerAbi,
    provider // Pasar el proveedor (provider) al contrato router
  );

  const pair = new ethers.Contract(
    process.env.PAIR_ADDRESS_FUJI,
    pairAbi,
    provider // Pasar el proveedor (provider) al contrato pair
  );

  const chef = new ethers.Contract(
    process.env.MASTER_CHEF_ADDRESS_FUJI,
    chefAbi,
    provider // Pasar el proveedor (provider) al contrato chef
  );

  const wallet = new ethers.Contract(
    process.env.WALLET_ADDRESS_FUJI,
    walletAbi,
    provider // Pasar el proveedor (provider) al contrato wallet
  );

  return {
    sushi,
    router,
    pair,
    chef,
    wallet,
    provider, // Agregar el proveedor (provider) al objeto devuelto
  };
}

module.exports = getContracts;