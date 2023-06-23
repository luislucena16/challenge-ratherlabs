const { ethers } = require("hardhat");
const getContracts = require("./deployedContracts");

async function main() {
  try {
    console.log("loading data...");
    const [, user] = await ethers.getSigners();

    const { wallet } = await getContracts();

    console.log("wallet: ", wallet.address);
    console.log("router: ", await wallet.router());
    console.log("masterChef: ", await wallet.chef());

    const pid = 0;

    const pending = ethers.utils.formatUnits(
      await wallet.pending(pid),
      "ether"
    );
    const staked = ethers.utils.formatUnits(
      await wallet.staked(pid),
      "ether"
    );
    console.log(`pending tokens in pool ${pid}: `, pending);
    console.log(`staked LPs in pool ${pid}: `, staked);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
