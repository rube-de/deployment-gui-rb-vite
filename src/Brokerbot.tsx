import { 
  useReadContracts,
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
  useWatchContractEvent
 } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState, useEffect } from 'react';
import { 
  brokerbotFactoryAbi, 
  brokerbotFactoryAddress, 
} from './generated';
import { blockExplorerLink, getZCHFAddress } from './lib/utils'
import { parseUnits, Address } from 'viem'


const wagmiContractConfig = {
  address: brokerbotFactoryAddress[1],
  abi: brokerbotFactoryAbi,
};

export function Brokerbot() {
  const { address, chainId } = useAccount();
  const { data: hash, writeContract, error: writeContractError} = useWriteContract();
  // const { data: receipt, error: receiptError } = useWaitForTransactionReceipt({ hash });


  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('0');
  const [increment, setIncrement] = useState('0');
  const [baseCurrency, setBaseCurrency] = useState(getZCHFAddress(chainId));
  const [token, setToken] = useState('');
  const [multisig, setMultisig] = useState('');
  const [salt, setSalt] = useState('');
  const [manager, setManager] = useState('');
  const [activeTab, setActiveTab] = useState('brokerbot');
  const [brokerbotAddress, setBrokerbotAddress] = useState('');

  useEffect(() => {
    console.log(writeContractError?.message)
  }, [writeContractError])

  // read contract state
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
        functionName: 'manager', 
        args: [], 
      }
   ] 
  }) 
  const [ownerData, managerData] = data || [];

  useEffect(() => {
    if (!error && !isPending) {
      if (ownerData) {
        setOwner(ownerData?.result!);
      }
      if (managerData) {
        setManager(managerData?.result!);
      }
    }
  }, [error, isPending, ownerData, managerData]);

  // **********************
  // Event
  // **********************
  useWatchContractEvent({
    ...wagmiContractConfig,
    eventName: 'BrokerbotCreated',
    onLogs: (logs) => {
      const brokerbot = logs[0].args.brokerbot;
      if (brokerbot !== undefined) {
        console.log('BrokerbotCreated', brokerbot);
        setBrokerbotAddress(brokerbot.toString());
      }
    },
  });

  // **********************
  // tab content
  // **********************
  const renderTabContent = () => {
    switch (activeTab) {
      case 'brokerbot':
        return (
          <div className="brokerbot-container">
          <h2>Deploy Brokerbot</h2>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Increment:</label>
              <input
                type="number"
                value={increment}
                onChange={(e) => setIncrement(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Base Currency:</label>
              <input
                type="text"
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Token:</label>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Multisig:</label>
              <input
                type="text"
                value={multisig}
                onChange={(e) => setMultisig(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Salt:</label>
              <input
                type="text"
                value={salt}
                onChange={(e) => setSalt(e.target.value)}
              />
            </div>
            <button className="deploy-button" onClick={handleCreateBrokerbot}>Deploy Brokerbot</button>
        </div>
        );
      case 'settings':
        return (
          <div style={{ marginTop: '10px' }}>
          <h2>Settings</h2>
          <div className="form-group">
            <label>Owner:</label>
            <input
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              style={{  marginRight: '10px' }}
            />C
            {address === ownerData?.result! && (
              <button onClick={handleUpdateOwner}>Update</button>
            )}
          </div>
          <div className="form-group">
            <label>Manager:</label>
            <input
              type="text"
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              style={{  marginRight: '10px' }}
            />
            {address === ownerData?.result! && (
              <button onClick={handleUpdateManager}>Update</button>
            )}
          </div>
        </div>
        );
      default:
        return null;
    }
  };


  // handale button clicks
  const handleCreateBrokerbot = () => {
    console.log('handleSubmit function called');
    setBrokerbotAddress('');
    const brokerbotConfig = {
      price: parseUnits(price, 18),
      increment: parseUnits(increment, 18),
      baseCurrency: baseCurrency as Address
    }

    try {
      writeContract({
        ...wagmiContractConfig,
        functionName: 'createBrokerbot',
        args: [
          brokerbotConfig,
          token as Address,
          multisig as Address,
          salt,
        ]
      });

    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  const handleUpdateOwner = () => {
    console.log('handleUpdateOwner function called');
    console.log('Current owner value:', owner);
    
    if (!owner) {
      console.error('Owner address is empty');
      return;
    }
    
    try {
      console.log('Attempting to write contract');
      const result = writeContract({
        ...wagmiContractConfig, 
        functionName: 'transferOwnership', 
        args: [owner as Address]
      });
      console.log('writeContract result:', result);
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  const handleUpdateManager = () => {
    console.log('handleUpdateManager function called');
    console.log('Current owner value:', owner);
    
    if (!owner) {
      console.error('Owner address is empty');
      return;
    }
    
    try {
      console.log('Attempting to write contract');
      const result = writeContract({
        ...wagmiContractConfig, 
        functionName: 'setManager', 
        args: [manager as Address]
      });
      console.log('writeContract result:', result);
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  return(
    <div>
      <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('brokerbot')} className={activeTab === 'brokerbot' ? 'active' : ''}>
          Deploy Brokerbot
        </button>
        <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>
          Settings
        </button>
      </div>
      {renderTabContent()}
      </div>
      {hash && !brokerbotAddress && (
        <div style={{ marginTop: '10px' }}>
          <div>
            <h2 style={{ marginTop: 24, marginBottom: 6 }}>Transaction sent...waiting for deployment</h2>
            <p style={{ marginBottom: 6 }}>
              View on{' '}
              <a href={blockExplorerLink(chainId) + "tx/" + hash} target="_blank">
                Etherscan
              </a>
            </p>
          </div>
        </div>
      )}
      {brokerbotAddress && (
        <div>
          <div>
            <h2 style={{ marginTop: 24, marginBottom: 6 }}>Brokerbot deployed at {brokerbotAddress}</h2>
            <p style={{ marginBottom: 6 }}>
              View on{' '}
              <a
                href={blockExplorerLink(chainId) + "address/" + brokerbotAddress}
                target="_blank"
              >
                Etherscan
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
