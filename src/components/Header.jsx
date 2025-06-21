import React from 'react';
import { Search, Bell, ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-gray-400" />
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-400 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            
            <div className="flex items-center gap-3 ml-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Louis Anderson</div>
                <div className="text-xs text-gray-500">Super Admin</div>
              </div>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;