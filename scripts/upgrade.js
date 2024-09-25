const { ethers, upgrades } = require("hardhat");

async function main() {
  const CounterV2 = await ethers.getContractFactory("CounterV2");
  console.log("Upgrading Counter...");
  const proxyAddress = "0x051D83FfddFc7F4Ea49291579f7f947B731e7d7B" //"YOUR_PROXY_ADDRESS_HERE"; // 替换为实际的代理合约地址
  await upgrades.upgradeProxy(proxyAddress, CounterV2);
  console.log("Counter upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });