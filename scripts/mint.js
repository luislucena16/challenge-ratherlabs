const { ethers } = require("hardhat");
const {
  USER_INITIAL_TOKEN_BALANCE,
  UNISWAP_INITIAL_TOKEN_RESERVE,
} = require("../utils/config");
const getContracts = require("./deployedContracts");

async function main() {
  const [deployer, user] = await ethers.getSigners();
  const { sushi } = await getContracts();

  console.log("Minting tokens for user with initial balance:", ethers.utils.formatEther(USER_INITIAL_TOKEN_BALANCE));
  console.log("Minting tokens for deployer with initial balance:", ethers.utils.formatEther(UNISWAP_INITIAL_TOKEN_RESERVE));

  await sushi.connect(deployer).mint(user.address, USER_INITIAL_TOKEN_BALANCE, { gasLimit: 1e6 });
  await sushi.connect(deployer).mint(deployer.address, UNISWAP_INITIAL_TOKEN_RESERVE, { gasLimit: 1e6 });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
