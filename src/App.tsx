import { useAccount, useReadContract, useReadContracts } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState } from 'react';
import { Manager } from './Manager';
import { Account } from './Account';
import { Brokerbot } from './Brokerbot';
import { Token } from './Token';
import { Company } from './Company';


function App() {
  const [activeTab, setActiveTab] = useState('company');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'company':
        return <Company />
      case 'token':
        return <Token />;
      case 'brokerbot':
        return <Brokerbot />
      case 'manager':
        return <Manager />;
      case 'account':
        return <Account />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>
      <div className="tabs">
          <button onClick={() => setActiveTab('company')}>Deploy Company</button>
          <button onClick={() => setActiveTab('token')}>Deploy Token</button>
          <button onClick={() => setActiveTab('brokerbot')}>Deploy Brokerbot</button>
          <button onClick={() => setActiveTab('manager')}>Factory Manager</button>
          <button onClick={() => setActiveTab('account')}>Account</button>
        </div>
      <div className='tab-content'>
        <div className='data-container'>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default App
