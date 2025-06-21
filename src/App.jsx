import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ClickSummary from './components/ClickSummary';
import AdsEngagement from './components/AdsEngagement';
import Balance from './components/Balance';
import TrendingAds from './components/TrendingAds';
import CampaignStats from './components/CampaignStats';
import CampaignGoals from './components/CampaignGoals';
import TargetStats from './components/TargetStats';
import Insights from './components/Insights';

function App() {
  const [activeItem, setActiveItem] = useState('analytics');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <ClickSummary />
            </div>
            <div>
              <TrendingAds />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <AdsEngagement />
            </div>
            <div>
              <Balance />
            </div>
            <div>
              <CampaignStats />
            </div>
            <div>
              <CampaignGoals />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Insights />
            </div>
            <div>
              <TargetStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;