import React from 'react';
import { BarChart, Home, Target, Users, CreditCard, TrendingUp, HelpCircle, MessageSquare, Settings, X } from 'lucide-react';

const Sidebar = ({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'campaign', label: 'Campaign', icon: Target },
    { id: 'analytics', label: 'Analytics', icon: BarChart, badge: '4' },
    { id: 'social-network', label: 'Social Network', icon: Users },
    { id: 'balance', label: 'Balance', icon: CreditCard },
  ];

  const otherItems = [
    { id: 'guide', label: 'Guide', icon: HelpCircle },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 'NEW' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleItemClick = (itemId) => {
    setCurrentPage(itemId);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-4 lg:p-6 border-b border-gray-200 lg:border-b-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Inpostly</span>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="flex-1 px-4 py-4 overflow-y-auto">
            <p className="text-sm text-gray-500 mb-4">Main Menu</p>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-orange-100 text-orange-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full flex-shrink-0 ${
                        item.badge === 'NEW' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-orange-100 text-orange-600'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <p className="text-sm text-gray-500 mb-4 mt-8">Others</p>
            <nav className="space-y-1">
              {otherItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs rounded-full bg-orange-500 text-white flex-shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;