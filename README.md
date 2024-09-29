
# Deploying Upgradeable Contracts using UUPS with Hardhat

This project demonstrates the implementation of upgradeable smart contracts using the UUPS (Universal Upgradeable Proxy Standard) pattern with OpenZeppelin and Hardhat.

## Project Structure

The project contains two main contracts:

1. `Counter.sol`: The initial implementation of a simple counter contract.
2. `CounterV2.sol`: An upgraded version of the counter contract with additional functionality.

Both contracts are designed to be upgradeable using the UUPS pattern.

## Setup

1. Clone the repository
2. Install dependencies:
   ```shell
   npm install
   ```

## Available Scripts

In the project directory, you can run:

```shell
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js
npx hardhat run scripts/upgrade.js
```

## Key Features

- Implementation of UUPS upgradeable contracts
- Use of OpenZeppelin's upgradeable contracts
- Hardhat for development and testing
- Ethers.js for interacting with the Ethereum network

## Testing

Run the test suite to ensure everything is working correctly:

```shell
npx hardhat test
```

## Deployment

To deploy the initial version of the contract:

```shell
npx hardhat run scripts/deploy.js
```

To upgrade the contract:

```shell
npx hardhat run scripts/upgrade.js
```

## Learn More

To learn more about Hardhat, OpenZeppelin, and UUPS upgradeable contracts, check out the following resources:

- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [OpenZeppelin Upgrades Plugins](https://docs.openzeppelin.com/upgrades-plugins/1.x/)
- [UUPS Proxy Pattern](https://docs.openzeppelin.com/contracts/5.x/api/proxy#UUPSUpgradeable)


## License

This project is licensed under the MIT License.
