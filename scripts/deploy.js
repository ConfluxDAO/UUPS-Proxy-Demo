const { ethers, upgrades } = require("hardhat");

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  console.log("Deploying Counter...");
  const counter = await upgrades.deployProxy(Counter, [], {
    initializer: "initialize",
    kind: "uups",
  });
  await counter.deployed();
  console.log("Counter deployed to:", counter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
