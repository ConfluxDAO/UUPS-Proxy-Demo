const { ethers } = require("hardhat");
async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = Counter.attach("0x051D83FfddFc7F4Ea49291579f7f947B731e7d7B");
  const tx = await counter.increment();
  await tx.wait(); // Wait for the transaction to complete
  const count = await counter.getCount();
  console.log("Counter value:", count.toString());
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
