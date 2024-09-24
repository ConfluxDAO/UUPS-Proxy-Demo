const { ethers } = require("hardhat");
async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = Counter.attach("YOUR_PROXY_ADDRESS_HERE");
  await counter.increment();
  const count = await counter.getCount();
  console.log("Counter value:", count.toString());
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
