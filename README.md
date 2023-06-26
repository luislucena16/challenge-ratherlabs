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

Configure your `.env` file and paste this:

```bash
Note: We will use the addresses of the smart contracts deployed on the fuji test network
```
FUJI_RPC=[YOUR_RPC](https://chainlist.org/?testnets=true&search=fuji)
PAIR_ADDRESS_FUJI=[0x1D8B6C97caA0a4896530BcF6a79B424005537C68](https://testnet.snowtrace.io/address/0x1D8B6C97caA0a4896530BcF6a79B424005537C68)
SUSHI_ADDRESS_FUJI=[0xfb7612290F093D4d92d103464EEA64658B3385E2](https://testnet.snowtrace.io/address/0xfb7612290F093D4d92d103464EEA64658B3385E2)
ROUTER_ADDRESS_FUJI=[0x7F8dF86DA3B2722C3BC43F33f19bB8E1F4542DBA](https://testnet.snowtrace.io/address/0x7F8dF86DA3B2722C3BC43F33f19bB8E1F4542DBA)
MASTER_CHEF_ADDRESS_FUJI=[0x0d1dBf6e60E52c0669781d007820B7A635c7685d](https://testnet.snowtrace.io/address/0x0d1dBf6e60E52c0669781d007820B7A635c7685d)
WALLET_ADDRESS_FUJI=[0x8598a0def8fc17a6F66b32dBC4D8C9f01b038Ba4](https://testnet.snowtrace.io/address/0x8598a0def8fc17a6F66b32dBC4D8C9f01b038Ba4)

Then use the following command:

```bash
npx hardhat node
```

Open another terminal window and compile your contracts, run this command:

#### Compile contracts

```bash
npm run compile
```

### Deploy contracts

```bash
npm run deploy
```

```bash
npm run mint
```

```bash
npm run add-liquidity
```

```bash
npm run add-pool
```

```bash
npm run deposit
```

```bash
npm run withdraw
```

```bash
npm run emergency-withdraw
```

```bash
npm run get-wallet-data
```

## Running Tests

To run tests, run the following command

```bash
npm run test
```

## Clean Cache

```bash
npm run clean
```