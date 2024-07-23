import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FactoryManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const factoryManagerAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'Ownable_NotOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'MultiSigCloneFactory',
        internalType: 'contract MultiSigCloneFactory',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MultiSigCloneFactoryUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'offerFactory',
        internalType: 'contract IOfferFactory',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OfferFactoryUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'paymentHub',
        internalType: 'contract PaymentHub',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PaymentHubUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'permit2Hub',
        internalType: 'contract Permit2Hub',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Permit2HubUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recoveryHub',
        internalType: 'contract RecoveryHub',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RecoveryHubUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'multisigFactory',
    outputs: [
      {
        name: '',
        internalType: 'contract MultiSigCloneFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'offerFactory',
    outputs: [
      { name: '', internalType: 'contract IOfferFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentHub',
    outputs: [
      { name: '', internalType: 'contract PaymentHub', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'permit2Hub',
    outputs: [
      { name: '', internalType: 'contract Permit2Hub', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'recoveryHub',
    outputs: [
      { name: '', internalType: 'contract RecoveryHub', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_multsigFactory',
        internalType: 'contract MultiSigCloneFactory',
        type: 'address',
      },
    ],
    name: 'setMultiSigCloneFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_offerFactory',
        internalType: 'contract IOfferFactory',
        type: 'address',
      },
    ],
    name: 'setOfferFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_paymentHub',
        internalType: 'contract PaymentHub',
        type: 'address',
      },
    ],
    name: 'setPaymentHub',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_permit2Hub',
        internalType: 'contract Permit2Hub',
        type: 'address',
      },
    ],
    name: 'setPermit2Hub',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_recoveryHub',
        internalType: 'contract RecoveryHub',
        type: 'address',
      },
    ],
    name: 'setRecoveryHub',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const factoryManagerAddress = {
  1: '0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78',
} as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const factoryManagerConfig = {
  address: factoryManagerAddress,
  abi: factoryManagerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryManagerAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useReadFactoryManager = /*#__PURE__*/ createUseReadContract({
  abi: factoryManagerAbi,
  address: factoryManagerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"multisigFactory"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useReadFactoryManagerMultisigFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'multisigFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"offerFactory"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useReadFactoryManagerOfferFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'offerFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useReadFactoryManagerOwner = /*#__PURE__*/ createUseReadContract({
  abi: factoryManagerAbi,
  address: factoryManagerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"paymentHub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useReadFactoryManagerPaymentHub =
  /*#__PURE__*/ createUseReadContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'paymentHub',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"permit2Hub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useReadFactoryManagerPermit2Hub =
  /*#__PURE__*/ createUseReadContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'permit2Hub',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"recoveryHub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useReadFactoryManagerRecoveryHub =
  /*#__PURE__*/ createUseReadContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'recoveryHub',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryManagerAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWriteFactoryManager = /*#__PURE__*/ createUseWriteContract({
  abi: factoryManagerAbi,
  address: factoryManagerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setMultiSigCloneFactory"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWriteFactoryManagerSetMultiSigCloneFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setMultiSigCloneFactory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setOfferFactory"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWriteFactoryManagerSetOfferFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setOfferFactory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setPaymentHub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWriteFactoryManagerSetPaymentHub =
  /*#__PURE__*/ createUseWriteContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setPaymentHub',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setPermit2Hub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWriteFactoryManagerSetPermit2Hub =
  /*#__PURE__*/ createUseWriteContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setPermit2Hub',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setRecoveryHub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWriteFactoryManagerSetRecoveryHub =
  /*#__PURE__*/ createUseWriteContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setRecoveryHub',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWriteFactoryManagerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryManagerAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useSimulateFactoryManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setMultiSigCloneFactory"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useSimulateFactoryManagerSetMultiSigCloneFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setMultiSigCloneFactory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setOfferFactory"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useSimulateFactoryManagerSetOfferFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setOfferFactory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setPaymentHub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useSimulateFactoryManagerSetPaymentHub =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setPaymentHub',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setPermit2Hub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useSimulateFactoryManagerSetPermit2Hub =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setPermit2Hub',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"setRecoveryHub"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useSimulateFactoryManagerSetRecoveryHub =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'setRecoveryHub',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useSimulateFactoryManagerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryManagerAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWatchFactoryManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryManagerAbi}__ and `eventName` set to `"MultiSigCloneFactoryUpdated"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWatchFactoryManagerMultiSigCloneFactoryUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    eventName: 'MultiSigCloneFactoryUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryManagerAbi}__ and `eventName` set to `"OfferFactoryUpdated"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWatchFactoryManagerOfferFactoryUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    eventName: 'OfferFactoryUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryManagerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWatchFactoryManagerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryManagerAbi}__ and `eventName` set to `"PaymentHubUpdated"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWatchFactoryManagerPaymentHubUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    eventName: 'PaymentHubUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryManagerAbi}__ and `eventName` set to `"Permit2HubUpdated"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWatchFactoryManagerPermit2HubUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    eventName: 'Permit2HubUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryManagerAbi}__ and `eventName` set to `"RecoveryHubUpdated"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78)
 */
export const useWatchFactoryManagerRecoveryHubUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryManagerAbi,
    address: factoryManagerAddress,
    eventName: 'RecoveryHubUpdated',
  })
