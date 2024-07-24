import { 
  useReadContracts,
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount
 } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState, useEffect } from 'react';
import { 
  factoryManagerAbi, 
  factoryManagerAddress, 
  useReadFactoryManagerOwner,
  useReadFactoryManagerPaymentHub,
} from './generated';
import { Address } from 'viem';
import { blockExplorerLink } from './lib/utils'


const wagmiContractConfig = {
  address: factoryManagerAddress[1],
  abi: factoryManagerAbi,
};


export function Manager() {
  const [owner, setOwner] = useState('');
  const [paymentHub, setPaymentHub] = useState('');
  const [recoveryHub, setRecoveryHub] = useState('');
  const [offerFactory, setOfferFactory] = useState('');
  const [permit2Hub, setPermit2Hub] = useState('');
  const [multisigFactory, setMultisigFactory] = useState('');

  const { 
    data,
    error,
    isPending
  } = useReadContracts({ 
    contracts: [
      { 
        ...wagmiContractConfig,
        functionName: 'owner',
        args: [],
      }, { 
        ...wagmiContractConfig, 
        functionName: 'paymentHub', 
        args: [], 
      }, { 
        ...wagmiContractConfig, 
        functionName: 'recoveryHub', 
      }, { 
        ...wagmiContractConfig, 
        functionName: 'offerFactory', 
      }, { 
        ...wagmiContractConfig, 
        functionName: 'permit2Hub', 
      },
      {
        ...wagmiContractConfig,
        functionName: 'multisigFactory',
      },
   ] 
  }) 
  const [ownerData, paymentHubData, recoveryHubData, offerFactoryData, permit2HubData, multisigFactoryData] = data || [];

  const { data: hash, writeContract, error: writeContractError} = useWriteContract()

  useEffect(() => {
    console.log(writeContractError?.message)
  }, [writeContractError])

  const { address, chainId } = useAccount();

  useEffect(() => {
    console.log('Address:', address);
    console.log('Owner:', ownerData);
  }, [address, ownerData]);

  useEffect(() => {
    if (!error && !isPending) {
      if (ownerData) {
        setOwner(ownerData?.result!);
      }
      if (paymentHubData) {
        setPaymentHub(paymentHubData?.result!);
      }
      if (recoveryHubData) {
        setRecoveryHub(recoveryHubData?.result!);
      }
      if (offerFactoryData) {
        setOfferFactory(offerFactoryData?.result!);
      }
      if (permit2HubData) {
        setPermit2Hub(permit2HubData?.result!);
      }
      if (multisigFactoryData) {
        setMultisigFactory(multisigFactoryData?.result!);
      }
    }
  }, [error, isPending, ownerData, paymentHubData, recoveryHubData, offerFactoryData]);


  const handleUpdateOwner = async () => {
    console.log('handleUpdateOwner function called');
    console.log('Current owner value:', owner);
    
    if (!owner) {
      console.error('Owner address is empty');
      return;
    }
    
    try {
      console.log('Attempting to write contract');
      const result = await writeContract({
        ...wagmiContractConfig, 
        functionName: 'transferOwnership', 
        args: [owner as Address]
      });
      console.log('writeContract result:', result);
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  const handleUpdatePaymentHub = () => {
    console.log('Updating payment hub:', paymentHub);
    // Add logic to update payment hub
    try {
      console.log('Attempting to write contract');
      writeContract({
        ...wagmiContractConfig, 
        functionName: 'setPaymentHub', 
        args: [paymentHub as Address]
      });
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  const handleUpdateRecoveryHub = () => {
    console.log('Updating recovery hub:', recoveryHub);
    // Add logic to update recovery hub
    try {
      console.log('Attempting to write contract');
      writeContract({
        ...wagmiContractConfig, 
        functionName: 'setRecoveryHub', 
        args: [recoveryHub as Address]
      });
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  const handleUpdateOfferFactory = () => {
    console.log('Updating offer factory:', offerFactory);
    // Add logic to update offer factory
    try {
      console.log('Attempting to write contract');
      writeContract({
        ...wagmiContractConfig, 
        functionName: 'setOfferFactory', 
        args: [offerFactory as Address]
      });
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  const handleUpdatePermit2Hub = () => {
    console.log('Updating permit2 hub:', permit2Hub);
    // Add logic to update offer factory
    try {
      console.log('Attempting to write contract');
      writeContract({
        ...wagmiContractConfig, 
        functionName: 'setPermit2Hub', 
        args: [permit2Hub as Address]
      });
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  const handleUpdateMultisigFactory = () => {
    console.log('Updating multisigFactory:', multisigFactory);
    // Add logic to update multisigFactory
    try {
      console.log('Attempting to write contract');
      writeContract({
        ...wagmiContractConfig, 
        functionName: 'setMultiSigCloneFactory', 
        args: [multisigFactory as Address]
      });
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="owner">Owner:</label>
        <br />
        <input type="text" id="owner" value={owner} onChange={(e) => setOwner(e.target.value)} style={{ width: '400px', marginRight: '10px' }} />
        {address === ownerData?.result! && (
          <button onClick={handleUpdateOwner}>Update</button>
        )}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="paymentHub">Payment Hub:</label>
        <br />
        <input type="text" id="paymentHub" value={paymentHub} onChange={(e) => setPaymentHub(e.target.value)} style={{ width: '400px', marginRight: '10px' }} />
        {address === ownerData?.result! && (
          <button onClick={handleUpdatePaymentHub}>Update</button>
        )}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="recoveryHub">Recovery Hub:</label>
        <br />
        <input type="text" id="recoveryHub" value={recoveryHub} onChange={(e) => setRecoveryHub(e.target.value)} style={{ width: '400px', marginRight: '10px' }} />
        {address === ownerData?.result! && (
          <button onClick={handleUpdateRecoveryHub}>Update</button>
        )}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="offerfactory">Offerfactory:</label>
        <br />
        <input type="text" id="offerfactory" value={offerFactory} onChange={(e) => setOfferFactory(e.target.value)} style={{ width: '400px', marginRight: '10px' }} />
        {address === ownerData?.result! && (
          <button onClick={handleUpdateOfferFactory}>Update</button>
        )}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="permit2Hub">Permit2Hub:</label>
        <br />
        <input type="text" id="permit2Hub" value={permit2Hub} onChange={(e) => setPermit2Hub(e.target.value)} style={{ width: '400px', marginRight: '10px' }} />
        {address === ownerData?.result! && (
          <button onClick={handleUpdatePermit2Hub}>Update</button>
        )}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="multisigFactory">MultisigFactory:</label>
        <br />
        <input type="text" id="multisigFactory" value={multisigFactory} onChange={(e) => setMultisigFactory(e.target.value)} style={{ width: '400px', marginRight: '10px' }} />
        {address === ownerData?.result! && (
          <button onClick={handleUpdateMultisigFactory}>Update</button>
        )}
      </div>
      {hash && (
        <div style={{ marginTop: '10px' }}>
          <div>
            <h2 style={{ marginTop: 24, marginBottom: 6 }}>Manager updated</h2>
            <p style={{ marginBottom: 6 }}>
              View on{' '}
              <a href={blockExplorerLink(chainId, hash)} target="_blank">
                Etherscan
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}