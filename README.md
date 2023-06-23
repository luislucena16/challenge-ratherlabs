# Sushi Wallet

Staking smart contract that acts as a layer on top of Router and MasterChef to join Sushiswap's liquidity mining program with a straightforward approach.

## Description

The main purpose of this contract is to handle most of the transactions required to farm LP tokens in a single transaction, giving the user the ability to skip most of them and thus saving time and gas. Also, it can withdraw LP tokens and remove liquidity at the same time!

The interactions with MasterChef and Router are on behalf of the user, so no tokens or ETH will stay in the contract since it's only a intermediary.

## Run Locally

#### Clone the project

```bash
  git clone https://github.com/luislucena16/sushi-challenge.git
```

#### Go to the project directory

```bash
  cd sushi-challenge
```

#### Install dependencies

Using `npm`

```bash
  npm install
```

### Local Development

Write:

```bash
npx hardhat node
```

#### Compile contracts

```bash
  npm run compile
```

### Deploy contracts

```bash
npm run deploy
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```