import React from 'react';
import { Search, Bell, ShoppingCart, User, Menu } from 'lucide-react';

const Header = ({ searchQuery, setSearchQuery, setSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 hidden sm:block">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-32 sm:w-48 lg:w-64"
            />
          </div>

          <div className="flex items-center space-x-1 lg:space-x-2">
            <div className="relative">
              <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                1
              </span>
            </div>
            <div className="relative">
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div className="relative">
              <User className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                5
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Louis Anderson</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;