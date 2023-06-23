const { ethers } = require("hardhat");
const getContracts = require("./deployedContracts");

async function main() {
  const [, user] = await ethers.getSigners();

  const { wallet } = await getContracts();

  const tx = await wallet
    .connect(user)
    .withdraw(0, ethers.utils.parseEther("5"));
  console.log("Sending tx: ", tx.hash);
  const rc = await tx.wait();
  console.log("confirmed at block: ", rc.blockNumber);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
