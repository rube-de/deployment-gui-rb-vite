import { useAccount, useReadContract } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState, useEffect } from 'react';
import { 
  factoryManagerAbi, 
  factoryManagerAddress, 
  useReadFactoryManagerOwner,
  useReadFactoryManagerPaymentHub,
} from './generated';


const wagmiContractConfig = {
  address: factoryManagerAddress,
  abi: factoryManagerAbi,
};


export function Manager() {
  const [owner, setOwner] = useState('');
  const [paymentHub, setPaymentHub] = useState('');
  const [recoveryHub, setRecoveryHub] = useState('');
  const [offerFactory, setOfferFactory] = useState('');


  const { data: ownerData, isLoading: ownerLoading } = useReadFactoryManagerOwner();
  const { data: paymentHubData, isLoading: paymentHubLoading } = useReadFactoryManagerPaymentHub();

  useEffect(() => {
    if (!ownerLoading && ownerData) {
      setOwner(ownerData);
    }
    if (!paymentHubLoading && paymentHubData) {
      setPaymentHub(paymentHubData);
    }
  }, [ownerLoading, ownerData, paymentHubLoading, paymentHubData]);

  const handleUpdateOwner = () => {
    console.log('Updating owner:', owner);
    // Add logic to update owner
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
    </div>
  );
}