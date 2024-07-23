import { useAccount, useReadContract, useReadContracts, useWriteContract } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState, useEffect } from 'react';
import { 
  factoryManagerAbi, 
  factoryManagerAddress, 
  useReadFactoryManagerOwner,
  useReadFactoryManagerPaymentHub,
} from './generated';
import { Address } from 'viem';


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

  const { data: hash, writeContract } = useWriteContract()


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


  const handleUpdateOwner = async() => {
    console.log('Updating owner:', owner);
    // Add logic to update owner
    try {
      console.log("try");
      writeContract({
        ...wagmiContractConfig, 
        functionName: 'transferOwnership', 
        args: [owner as Address] 
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePaymentHub = () => {
    console.log('Updating payment hub:', paymentHub);
    // Add logic to update payment hub
  };

  const handleUpdateRecoveryHub = () => {
    console.log('Updating recovery hub:', recoveryHub);
    // Add logic to update recovery hub
  };

  const handleUpdateOfferFactory = () => {
    console.log('Updating offer factory:', offerFactory);
    // Add logic to update offer factory
  };

  const handleUpdatePermit2Hub = () => {
    console.log('Updating permit2 hub:', permit2Hub);
    // Add logic to update offer factory
  };

  const handleUpdateMultisigFactory = () => {
    console.log('Updating multisigFactory:', multisigFactory);
    // Add logic to update multisigFactory
  };

  return (
    <div>
      <label htmlFor="owner">Owner:</label>
      <input type="text" id="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
      <button onClick={handleUpdateOwner}>Update</button>
      <br />
      <label htmlFor="paymentHub">Payment Hub:</label>
      <input type="text" id="paymentHub" value={paymentHub} onChange={(e) => setPaymentHub(e.target.value)} />
      <button onClick={handleUpdatePaymentHub}>Update</button>
      <br />
      <label htmlFor="recoveryHub">Recovery Hub:</label>
      <input type="text" id="recoveryHub" value={recoveryHub} onChange={(e) => setRecoveryHub(e.target.value)} />
      <button onClick={handleUpdateRecoveryHub}>Update</button>
      <br />
      <label htmlFor="offerfactory">Offerfactory:</label>
      <input type="text" id="offerfactory" value={offerFactory} onChange={(e) => setOfferFactory(e.target.value)} />
      <button onClick={handleUpdateOfferFactory}>Update</button>
      <br />
      <label htmlFor="permit2Hub">Permit2Hub:</label>
      <input type="text" id="permit2Hub" value={permit2Hub} onChange={(e) => setPermit2Hub(e.target.value)} />
      <button onClick={handleUpdatePermit2Hub}>Update</button>
      <br />
      <label htmlFor="multisigFactory">MultisigFactory:</label>
      <input type="text" id="multisigFactory" value={multisigFactory} onChange={(e) => setMultisigFactory(e.target.value)} />
      <button onClick={handleUpdateMultisigFactory}>Update</button>
      <br />
      {hash && <div>Hash: {hash}</div>}
    </div>
  );
}