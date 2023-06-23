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
  const provider = new ethers.providers.JsonRpcProvider(providerUrl); // Obtener el proveedor (provider) de ethers

  const sushi = new ethers.Contract(
    '0xfb7612290F093D4d92d103464EEA64658B3385E2',
    sushiAbi,
    provider // Pasar el proveedor (provider) al contrato sushi
  );

  const router = new ethers.Contract(
    '0x7F8dF86DA3B2722C3BC43F33f19bB8E1F4542DBA',
    routerAbi,
    provider // Pasar el proveedor (provider) al contrato router
  );

  const pair = new ethers.Contract(
    '0x1D8B6C97caA0a4896530BcF6a79B424005537C68',
    pairAbi,
    provider // Pasar el proveedor (provider) al contrato pair
  );

  const chef = new ethers.Contract(
    '0x0d1dBf6e60E52c0669781d007820B7A635c7685d',
    chefAbi,
    provider // Pasar el proveedor (provider) al contrato chef
  );

  const wallet = new ethers.Contract(
    '0x8598a0def8fc17a6F66b32dBC4D8C9f01b038Ba4',
    walletAbi,
    provider, // Pasar el proveedor (provider) al contrato wallet
    deployer,
    user,
  );

  return {
    sushi,
    router,
    pair,
    chef,
    wallet,
    provider, // Agregar el proveedor (provider) al objeto devuelto
    deployer,
    user, 
  };
}

module.exports = getContracts;