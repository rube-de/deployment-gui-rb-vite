import { 
  useReadContracts,
  useWriteContract,
  // useWaitForTransactionReceipt,
  useAccount,
  useWatchContractEvent
 } from 'wagmi';
import React, { useState, useEffect } from 'react';
import { 
  tokenFactoryAbi, 
  tokenFactoryAddress, 
} from './generated';
import { blockExplorerLink, getZCHFAddress } from './lib/utils'
import { Address } from 'viem'


const wagmiContractConfig = {
  address: tokenFactoryAddress[1],
  abi: tokenFactoryAbi,
};

export function Token() {
  const { address, chainId } = useAccount();
  const { data: hash, writeContract, error: writeContractError} = useWriteContract();
  // const { data: receipt, error: receiptError } = useWaitForTransactionReceipt({ hash });


  const [activeTab, setActiveTab] = useState('token');
  const [owner, setOwner] = useState('');
  const [multisig, setMultisig] = useState('');
  const [salt, setSalt] = useState('');
  const [manager, setManager] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [terms, setTerms] = useState('');
  const [allowlist, setAllowlist] = useState(false);
  const [draggable, setDraggable] = useState(false);
  const [numberOfShares, setNumberOfShares] = useState('');
  const [quorumDrag, setQuorumDrag] = useState('7500');
  const [quorumMigration, setQuorumMigration] = useState('7500');
  const [votePeriod, setVotePeriod] = useState('5184000');
  const [baseTokenAddress, setBaseTokenAddress] = useState('');
  const [draggableAddress, setDraggableAddress] = useState('');


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
    eventName: 'BaseTokenCreated',
    onLogs: (logs) => {
      const token = logs[0].args.token;
      if (token !== undefined) {
        console.log('BaseTokenCreated', token);
        setBaseTokenAddress(token.toString());
      }
    },
  });

  useWatchContractEvent({
    ...wagmiContractConfig,
    eventName: 'DraggableTokenCreated',
    onLogs: (logs) => {
      const draggable = logs[0].args.draggable;
      if (draggable !== undefined) {
        console.log('BrokerbotCreated', draggable);
        setDraggableAddress(draggable.toString());
      }
    },
  });

  // tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'token':
        return (
          <div className="token-container">
            <h2>Deploy Token</h2>
            <div className="form-group">
              <label className="checkbox">Draggble needed:</label>
              <input
                type="checkbox"
                checked={draggable}
                onChange={(e) => setDraggable(e.target.checked)}
              />
            </div>
            <div className="form-group">
              <label className="checkbox">Allowlist needed:</label>
              <input
                type="checkbox"
                checked={allowlist}
                onChange={(e) => setAllowlist(e.target.checked)}
              />
            </div>
            <div className="form-group">
              <label>Share Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Symbol:</label>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Terms:</label>
              <input
                type="text"
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Number of Shares:</label>
              <input
                type="number"
                value={numberOfShares}
                onChange={(e) => setNumberOfShares(e.target.value)}
              />
            </div>
            {draggable && (
              <div>
                <h3>Draggable</h3>
                <div className="form-group">
                  <label>Quorum Drag:</label>
                  <input
                    type="number"
                    value={quorumDrag}
                    onChange={(e) => setQuorumDrag(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Quorum Migration:</label>
                  <input
                    type="number"
                    value={quorumMigration}
                    onChange={(e) => setQuorumMigration(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Vote Period:</label>
                  <input
                    type="number"
                    value={votePeriod}
                    onChange={(e) => setVotePeriod(e.target.value)}
                  />
                </div>
              </div>
            )}
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
            <button className="deploy-button" onClick={handleCreateToken}>Deploy Token</button>
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
            />
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
  const handleCreateToken = () => {
    console.log('handleCreateToken function called');
    setBaseTokenAddress('');
    setDraggableAddress('');
    const tokenConfig = {
      name: name,
      symbol: symbol,
      terms: terms,
      allowlist: false,
      draggable: false,
      numberOfShares: BigInt(numberOfShares),
      quorumDrag: BigInt(quorumDrag),
      quorumMigration: BigInt(quorumMigration),
      votePeriod: BigInt(votePeriod),
    };

    try {
      writeContract({
        ...wagmiContractConfig,
        functionName: 'createToken',
        args: [
          tokenConfig,
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
        <button onClick={() => setActiveTab('token')} className={activeTab === 'token' ? 'active' : ''}>
          Deploy Token
        </button>
        <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>
          Settings
        </button>
      </div>
      {renderTabContent()}
    </div>
      {hash && !baseTokenAddress && (
        <div style={{ marginTop: '10px' }}>
          <div>
            <h2 style={{ marginTop: 24, marginBottom: 6 }}>Transaction sent</h2>
            <p style={{ marginBottom: 6 }}>
              View on{' '}
              <a href={blockExplorerLink(chainId) + "tx/" + hash} target="_blank">
                Etherscan
              </a>
            </p>
          </div>
        </div>
      )}
      {baseTokenAddress && (
        <div>
          <div>
            <h2 style={{ marginTop: 24, marginBottom: 6 }}>Base Token deployed at {baseTokenAddress}</h2>
            <p style={{ marginBottom: 6 }}>
              View on{' '}
              <a
                href={blockExplorerLink(chainId) + "address/" + baseTokenAddress}
                target="_blank"
              >
                Etherscan
              </a>
            </p>
          </div>
        </div>
      )}
      {draggableAddress && (
        <div>
          <div>
            <h2 style={{ marginTop: 24, marginBottom: 6 }}>Draggable Token deployed at {draggableAddress}</h2>
            <p style={{ marginBottom: 6 }}>
              View on{' '}
              <a
                href={blockExplorerLink(chainId) + "address/" + draggableAddress}
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
