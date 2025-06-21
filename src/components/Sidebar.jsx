import React from 'react';
import { Home, Megaphone, BarChart3, Users, CreditCard, BookOpen, MessageCircle, Settings } from 'lucide-react';

const Sidebar = ({ activeItem, onItemClick }) => {
  const mainMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'campaign', label: 'Campaign', icon: Megaphone },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'social', label: 'Social Network', icon: Users },
    { id: 'balance', label: 'Balance', icon: CreditCard },
  ];

  const otherItems = [
    { id: 'guide', label: 'Guide', icon: BookOpen },
    { id: 'messages', label: 'Messages', icon: MessageCircle, badge: 'NEW' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Inpostly</span>
        </div>
      </div>

      <div className="flex-1 px-4">
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4 px-3">Main Menu</h3>
          <nav className="space-y-1">
            {mainMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onItemClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                    isActive 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4 px-3">Others</h3>
          <nav className="space-y-1">
            {otherItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onItemClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                    isActive 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-medium">
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
  );
};

export default Sidebar;