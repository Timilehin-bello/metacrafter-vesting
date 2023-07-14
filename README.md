# Vesting Contract

The Vesting Contract is a Solidity smart contract that enables organizations to create a vesting schedule for their tokens. It allows organizations to register themselves, specify stakeholders and their vesting periods, whitelist addresses, and facilitate token claims after the vesting period.

## Features

The Vesting Contract provides the following features:

- **Organization Registration**: Organizations can register themselves and their tokens by providing their address, name, and token amount.
- **Stakeholder Management**: Organizations can add stakeholders, including their address, stakeholder post, vesting period, and token allocation.
- **Address Whitelisting**: Only the organization admin can whitelist addresses for certain stakeholders (founders, investors, etc.).
- **Token Claiming**: Whitelisted stakeholders can claim their tokens after the vesting period has elapsed.
- **Token Balance Checking**: Stakeholders can check their claimed token balance.

## Usage

### Contract Deployment

To use the Vesting Contract, follow these steps:

1. Deploy the Vesting smart contract using a Solidity compiler version equal to or higher than 0.8.7.
2. Set the appropriate SPDX license identifier in the contract.

### Contract Functions

The Vesting Contract provides the following functions:

- `addOrganisation(string memory _name, address _orgAddress, uint256 _token)`: Allows an organization to register themselves and their token with the contract.
- `addStakeholder(address _stakeholderAddress, string memory _post, uint256 _vestingPeriod, uint256 _token)`: Allows the organization admin to add a stakeholder with their address, stakeholder post, vesting period, and token allocation.
- `whitelistAddress(address _stakeholder)`: Whitelists the provided address, allowing it to claim tokens. Only the organization admin can perform this action.
- `claimToken()`: Whitelisted stakeholders can call this function to claim their tokens if the vesting period has elapsed.
- `getClaimedToken()`: Retrieves the claimed token balance for the caller's address.
- `getStakeholderPostion(address _address)`: Retrieves the stakeholder details (including vesting period, stakeholder post, and more) for the provided address.

## How to Use

To use the Vesting Contract, follow these steps:

1. Run the development server.
2. Connect your wallet.
3. Navigate to the organization page.
4. Add the organization and stakeholder details.
5. Whitelist the stakeholder address if necessary.
6. Stakeholders can log in and claim their tokens once added to the stakeholder list and whitelisted.

## How to Navigate

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

Connect your wallet and navigate the organisation page to add organisation, Stakeholder and also to add stakeholder to the white list.

To claim your Token:
Navigate to the user login and claim token once the admin has added you to the stakholder and to the white list

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.
