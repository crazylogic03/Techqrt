import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Campaign from './pages/Campaign';
import SocialNetwork from './pages/SocialNetwork';
import Balance from './pages/Balance';
import Analytics from './pages/Analytics';
import NewCampaign from './pages/NewCampaign';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const renderPage = () => {
    if (showNewCampaign) {
      return <NewCampaign onClose={() => setShowNewCampaign(false)} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard searchQuery={searchQuery} />;
      case 'campaign':
        return <Campaign onNewCampaign={() => setShowNewCampaign(true)} searchQuery={searchQuery} />;
      case 'social-network':
        return <SocialNetwork searchQuery={searchQuery} />;
      case 'balance':
        return <Balance searchQuery={searchQuery} />;
      case 'analytics':
        return <Analytics searchQuery={searchQuery} />;
      default:
        return <Dashboard searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 p-4 lg:p-6 overflow-x-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;