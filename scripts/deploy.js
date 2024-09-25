const { ethers, upgrades } = require("hardhat");

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  console.log("Deploying Counter...");
  const counter = await upgrades.deployProxy(Counter, {
    initializer: "initialize",
    kind: "uups",
  });
  await counter.waitForDeployment(); // 使用 waitForDeployment 替代 deployed
  console.log("Counter deployed to:", await counter.getAddress()); // 使用 getAddress 获取合约地址
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
