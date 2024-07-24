import { useAccount, useReadContract, useReadContracts } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState } from 'react';
import { Manager } from './Manager';
import { Account } from './Account';
import { Brokerbot } from './Brokerbot';

import { factoryManagerAbi, factoryManagerAddress, useReadFactoryManagerOwner } from './generated';



function App() {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <div>Content for Tab 1</div>;
      case 'tab2':
        return <div>Content for Tab 2</div>;
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
          <button onClick={() => setActiveTab('tab1')}>Deploy Company</button>
          <button onClick={() => setActiveTab('tab2')}>Deploy Token</button>
          <button onClick={() => setActiveTab('brokerbot')}>Deploy Brokerbot</button>
          <button onClick={() => setActiveTab('manager')}>Factory Manager</button>
          <button onClick={() => setActiveTab('account')}>Account</button>
        </div>
      <div style={{ padding: 12 }}>
        {renderTabContent()}
      </div>
    </div>
  );
}

export default App
