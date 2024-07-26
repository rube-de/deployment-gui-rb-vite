import { 
  useReadContracts,
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount
 } from 'wagmi';
import React, { useState, useEffect } from 'react';
import { 
  aktionriasFactoryAbi, 
  aktionriasFactoryAddress, 
} from './generated';
import { blockExplorerLink, getZCHFAddress } from './lib/utils'
import { Address, parseUnits } from 'viem'


const wagmiContractConfig = {
  address: aktionriasFactoryAddress[1],
  abi: aktionriasFactoryAbi,
};

export function Company() {
  const { address, chainId } = useAccount();
  const { data: hash, writeContract, error: writeContractError} = useWriteContract();
  // const { data: receipt, error: receiptError } = useWaitForTransactionReceipt({ hash });


  const [activeTab, setActiveTab] = useState('company');
  const [owner, setOwner] = useState('');
  const [signer, setSigner] = useState('');
  const [salt, setSalt] = useState('');
  const [manager, setManager] = useState('');
  const [tokenFactory, setTokenFactory] = useState('');
  const [brokerbotFactory, setBrokerbotFactory] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [terms, setTerms] = useState('');
  const [allowlist, setAllowlist] = useState(false);
  const [draggable, setDraggable] = useState(false);
  const [numberOfShares, setNumberOfShares] = useState('');
  const [quorumDrag, setQuorumDrag] = useState('7500');
  const [quorumMigration, setQuorumMigration] = useState('7500');
  const [votePeriod, setVotePeriod] = useState('5184000');
  const [price, setPrice] = useState('0');
  const [increment, setIncrement] = useState('0');
  const [baseCurrency, setBaseCurrency] = useState(getZCHFAddress(chainId));
  const [isBrokerbot, setIsBrokerbot] = useState(false);


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
      }, { 
        ...wagmiContractConfig, 
        functionName: 'brokerbotFactory', 
        args: [], 
      }, { 
        ...wagmiContractConfig, 
        functionName: 'tokenFactory', 
        args: [], 
      }
   ] 
  }) 
  const [ownerData, managerData, brokerbotFactoryData, tokenFactoryData] = data || [];

  useEffect(() => {
    if (!error && !isPending) {
      if (ownerData) {
        setOwner(ownerData?.result!);
      }
      if (managerData) {
        setManager(managerData?.result!);
      }
      if (tokenFactoryData) {
        setTokenFactory(tokenFactoryData?.result!);
      }
      if (brokerbotFactoryData) {
        setBrokerbotFactory(brokerbotFactoryData?.result!);
      }
    }
  }, [error, isPending, ownerData, managerData, tokenFactoryData, brokerbotFactoryData]);

  // tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'company':
        return (
          <div className="company-container">
            <h2>Token</h2>
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
            <div>
              <h2>Brokerbot</h2>
              <div className="form-group">
                <label className="checkbox">Brokerbot needed:</label>
                <input
                  type="checkbox"
                  checked={isBrokerbot}
                  onChange={(e) => setIsBrokerbot(e.target.checked)}
                />
              </div>
              {isBrokerbot && (
                <div>
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
                </div>
              )}
            </div>
            <h2>Multisig</h2>
            <div className="form-group">
              <label>First signer:</label>
              <input
                type="text"
                value={signer}
                onChange={(e) => setSigner(e.target.value)}
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
            {isBrokerbot ? (
              <button className="deploy-button" onClick={handleCreateCompany}>Deploy Company</button>
            ) : (
              <button className="deploy-button" onClick={handleCreateCompanyWithoutBrokerbot}>
                Deploy Company Without Brokerbot
              </button>
            )}
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
          <div className="form-group">
            <label>Brokerbot factory:</label>
            <input
              type="text"
              value={brokerbotFactory}
              onChange={(e) => setBrokerbotFactory(e.target.value)}
              style={{  marginRight: '10px' }}
            />
            {address === ownerData?.result! && (
              <button onClick={handleUpdateBrokerbotFactory}>Update</button>
            )}
          </div>
          <div className="form-group">
            <label>Token factory:</label>
            <input
              type="text"
              value={tokenFactory}
              onChange={(e) => setTokenFactory(e.target.value)}
              style={{  marginRight: '10px' }}
            />
            {address === ownerData?.result! && (
              <button onClick={handleUpdateTokenFactory}>Update</button>
            )}
          </div>
        </div>
        );
      default:
        return null;
    }
  };


  // handale button clicks
  const handleCreateCompany = () => {
    console.log('handleCreateCompany function called');
    const tokenConfig = {
      name: name,
      symbol: symbol,
      terms: terms,
      allowlist: allowlist,
      draggable: draggable,
      numberOfShares: BigInt(numberOfShares),
      quorumDrag: BigInt(quorumDrag),
      quorumMigration: BigInt(quorumMigration),
      votePeriod: BigInt(votePeriod),
    };
    const brokerbotConfig = {
      price: parseUnits(price, 18),
      increment: parseUnits(increment, 18),
      baseCurrency: baseCurrency as Address
    }

    try {
      writeContract({
        ...wagmiContractConfig,
        functionName: 'createCompany',
        args: [
          tokenConfig,
          brokerbotConfig,
          signer as Address,
          salt,
        ]
      });
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };

  const handleCreateCompanyWithoutBrokerbot = () => {
    console.log('handleCreateCompanyWithoutBrokerbot function called');
    const tokenConfig = {
      name: name,
      symbol: symbol,
      terms: terms,
      allowlist: allowlist,
      draggable: draggable,
      numberOfShares: BigInt(numberOfShares),
      quorumDrag: BigInt(quorumDrag),
      quorumMigration: BigInt(quorumMigration),
      votePeriod: BigInt(votePeriod),
    };

    try {
      writeContract({
        ...wagmiContractConfig,
        functionName: 'createCompanyWithoutBrokerbot',
        args: [
          tokenConfig,
          signer as Address,
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
  const handleUpdateTokenFactory = () => {
    console.log('handleUpdateTokenFactory function called');
    console.log('Current owner value:', owner);
    
    if (!owner) {
      console.error('Owner address is empty');
      return;
    }
    
    try {
      console.log('Attempting to write contract');
      const result = writeContract({
        ...wagmiContractConfig, 
        functionName: 'setTokenFactory', 
        args: [tokenFactory as Address]
      });
      console.log('writeContract result:', result);
    } catch (error) {
      console.error('Error in writeContract:', error);
    }
  };
  const handleUpdateBrokerbotFactory = () => {
    console.log('handleUpdateBrokerbotFactory function called');
    console.log('Current owner value:', owner);
    
    if (!owner) {
      console.error('Owner address is empty');
      return;
    }
    
    try {
      console.log('Attempting to write contract');
      const result = writeContract({
        ...wagmiContractConfig, 
        functionName: 'setBrokerbotFactory', 
        args: [brokerbotFactory as Address]
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
        <button onClick={() => setActiveTab('company')} className={activeTab === 'company' ? 'active' : ''}>
          Deploy Company
        </button>
        <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>
          Settings
        </button>
      </div>
      {renderTabContent()}
    </div>
      {hash && (
        <div style={{ marginTop: '10px' }}>
          <div>
            <h2 style={{ marginTop: 24, marginBottom: 6 }}>Transaction sent</h2>
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
