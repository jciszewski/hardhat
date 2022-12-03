// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  const HelloWorld  = await hre.ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();
  await helloWorld.deployed();
  console.log(`deployed to ${helloWorld.address}`);
  const Manager  = await hre.ethers.getContractFactory("Manager");
  const manager = await Manager.deploy(helloWorld.address); 
  console.log(`deployed to ${manager.address}`);
  const returnValue = await manager.doStuff();
  console.log(returnValue);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
