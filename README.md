This is a [Vite](https://vitejs.dev) project bootstrapped with [`create-wagmi`](https://github.com/wevm/wagmi/tree/main/packages/create-wagmi).


# Contract deployer UI

This is a client-side only frontend to manage the deployment factory contracts.

## How to use

1. Connect with your browser wallet
2. Select the tab which corresponds to your use case (eg 'Deploy Company' for deploying a new company)
3. Fill out the fields
4. Click Deploy
5. Confirm transaction in your connected browser wallet (this wallet will pay the fee to deploy the contracts)
6. After the transaction is confirmed onchain, you will see the addresses at the bottom

## Overview of Tabs

The frontend has different tabs to manage the different factories

1. Deploy Company - to deploy all contracts for a new company (multisig, token, brokerbot)
2. Deploy Token - to just deploy the (allowlist/draggable) token
3. Deploy Brokerbot - to just deploy a new brokerbot
4. Factory Manager - to update general contracts
5. Account - to see connected account and chain

### Deploy Company

The Deploy Company tab is for deploying a whole new company. Enter all details and click deploy at the bottom to deploy everything with one transaction. 
There will be more fields if the draggable checkbox is active, as well as when you also include the brokerbot.
The deploy button will indicate if you will deploy only multisisg+token or also the brokerbot to it.
Note: This will always create a new multisig, if you want to use a current multisig, use the other specific deploy tabs.

#### Settings

In the settings of deploy company, the owner of the factory contract can update the factory manager, the brokerbot and token factory. If you aren't the owner you will not see the update button.

### Deploy Token

The deploy token tab is for deploying a new token, where you have already the multisig(owner). There will be more fields if the draggable checkbox is active.

#### Settings

In the settings of deploy token the owner of the factory contract can update the factory manager.

### Deploy Brokerbot

The deploy brokerbot is for deploying a new brokerbot, like in the use case where a brokerbot needs to be updated for another base currency or for new function in a never brokerbot version.


#### Settings 
In the settings of deploy brokerbot the owner of the factory contract can update the factory manager.


### Factory Manager

In the factory manager tab the owner can update the general contracts
- RecoveryHub
- OfferFactory
- PaymentHub
- Permit2Hub
- MultiSigCloneFactory


## To run locally

Install dependencies

```
yarn
```

Run frontend

```
yarn dev
```
