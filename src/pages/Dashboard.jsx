import React from 'react';
import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';

const Dashboard = ({ searchQuery }) => {
  // Filter data based on search query (for demonstration)
  const filteredData = searchQuery ? [] : null; // You can implement actual filtering logic here

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">562</p>
              <p className="text-xs lg:text-sm text-gray-500">Campaign</p>
            </div>
            <div className="w-8 lg:w-12 h-6 lg:h-8">
              <svg viewBox="0 0 48 32" className="text-orange-400">
                <path d="M0,20 Q12,10 24,15 Q36,20 48,12" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">14,565k</p>
              <p className="text-xs lg:text-sm text-gray-500">Audience</p>
            </div>
            <div className="w-8 lg:w-12 h-6 lg:h-8">
              <svg viewBox="0 0 48 32" className="text-orange-400">
                <path d="M0,25 Q12,15 24,20 Q36,25 48,18" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-orange-400 p-4 lg:p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs lg:text-sm opacity-90">Spends Today</p>
              <p className="text-xl lg:text-2xl font-bold">$5,245</p>
            </div>
            <div className="bg-black bg-opacity-20 rounded-full p-1 lg:p-2">
              <TrendingUp className="w-4 h-4 lg:w-6 lg:h-6" />
              <span className="text-xs">+3%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-600 p-4 lg:p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs lg:text-sm opacity-90">Spends Yesterday</p>
              <p className="text-xl lg:text-2xl font-bold">$953.55</p>
            </div>
            <div className="bg-black bg-opacity-20 rounded-full p-1 lg:p-2">
              <TrendingDown className="w-4 h-4 lg:w-6 lg:h-6" />
              <span className="text-xs">-9%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Chart Activity */}
        <div className="lg:col-span-2 bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
            <h3 className="text-lg font-semibold text-gray-900">Chart Activity</h3>
            <div className="flex flex-wrap items-center gap-2 lg:gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-xs lg:text-sm text-gray-600">Spendings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <span className="text-xs lg:text-sm text-gray-600">Income</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-xs lg:text-sm text-gray-600">Others</span>
              </div>
            </div>
          </div>
          <div className="relative h-48 lg:h-64">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <path d="M0,150 Q50,120 100,140 Q150,110 200,125 Q250,100 300,115 Q350,90 400,105" 
                    stroke="#F59E0B" strokeWidth="3" fill="none"/>
              <path d="M0,180 Q50,160 100,170 Q150,150 200,155 Q250,140 300,145 Q350,130 400,135" 
                    stroke="#374151" strokeWidth="3" fill="none"/>
              <path d="M0,190 Q50,185 100,180 Q150,175 200,170 Q250,165 300,160 Q350,155 400,150" 
                    stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Week 01</span>
            <span className="hidden sm:inline">Week 02</span>
            <span className="hidden sm:inline">Week 03</span>
            <span>Week 04</span>
            <span className="hidden sm:inline">Week 05</span>
            <span className="hidden sm:inline">Week 06</span>
            <span>Week 07</span>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">July 27, 2024</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <span className="text-orange-400 font-bold">37</span>
                <span className="text-sm text-gray-600">Spendings</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-800 font-bold">2</span>
                <span className="text-sm text-gray-600">Income</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Overview */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction Overview</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <span className="text-sm text-gray-600">Income</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Expense</span>
              </div>
            </div>
            <p className="text-lg font-semibold">$95.66</p>
            <p className="text-sm text-gray-500">Expense</p>
          </div>
          <div className="h-24 lg:h-32 mt-4">
            <div className="flex items-end space-x-1 h-full">
              {[40, 60, 30, 80, 50, 70, 90, 45, 65, 35].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end">
                  <div 
                    className="bg-red-500 rounded-t" 
                    style={{ height: `${height * 0.6}%` }}
                  ></div>
                  <div 
                    className="bg-purple-600 rounded-b" 
                    style={{ height: `${height * 0.4}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Campaign Goal Summary */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">Campaign Goal Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">in</span>
              </div>
              <span className="text-sm text-gray-700">LinkedIn</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Ad Campaign</span>
                <span className="text-gray-900">6,798/8,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Comments</span>
                <span className="text-gray-900">45/800</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Likes</span>
                <span className="text-gray-900">6,325/8,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Bookmarked</span>
                <span className="text-gray-900">4,622/6,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Network Stats */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900">Social Network Stats</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <span className="text-sm text-gray-700">Facebook</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-600 rounded-lg"></div>
              <span className="text-sm text-gray-700">Instagram</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-700 rounded-lg"></div>
              <span className="text-sm text-gray-700">LinkedIn</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              <span className="text-sm text-gray-700">Google Business</span>
            </div>
          </div>
        </div>

        {/* Click Summary */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900">Click Summary</h3>
            <div className="flex items-center space-x-1">
              <button className="px-2 py-1 text-xs bg-gray-100 rounded">Monthly</button>
              <button className="px-2 py-1 text-xs text-gray-600">Weekly</button>
              <button className="px-2 py-1 text-xs text-gray-600">Daily</button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">867,123k</p>
            <p className="text-sm text-gray-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              +9% from last month
            </p>
          </div>
          <div className="h-12 lg:h-16 mt-4">
            <svg viewBox="0 0 200 50" className="w-full h-full">
              <path d="M0,40 Q25,20 50,25 Q75,30 100,15 Q125,35 150,20 Q175,25 200,10" 
                    stroke="#F59E0B" strokeWidth="2" fill="url(#gradient)"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Your Balance */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900">Your Balance</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-center mb-4">
            <p className="text-xl lg:text-2xl font-bold text-gray-900">$244.55</p>
            <p className="text-sm text-green-600">+2.7% than last week</p>
          </div>
          <div className="h-12 lg:h-16">
            <div className="flex items-end space-x-1 h-full">
              {[60, 40, 70, 50, 80, 45, 65].map((height, index) => (
                <div 
                  key={index} 
                  className="flex-1 bg-orange-400 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Campaign List */}
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Campaign List</h3>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded">
                #AD-001245
              </span>
              <div>
                <p className="font-medium text-gray-900">50% OFF Floor Lamp Get it Now!</p>
                <p className="text-sm text-gray-500">Published on January 25, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">-2%</p>
                <p className="text-sm text-gray-500">User Insight</p>
              </div>
              <div className="w-12 lg:w-16 h-6 lg:h-8">
                <svg viewBox="0 0 64 32" className="w-full h-full">
                  <path d="M0,20 Q16,15 32,18 Q48,22 64,16" stroke="#EAB308" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded">
                #AD-001245
              </span>
              <div>
                <p className="font-medium text-gray-900">50% OFF Floor Lamp Get it Now!</p>
                <p className="text-sm text-gray-500">Published on January 25, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">-2%</p>
                <p className="text-sm text-gray-500">User Insight</p>
              </div>
              <div className="w-12 lg:w-16 h-6 lg:h-8">
                <svg viewBox="0 0 64 32" className="w-full h-full">
                  <path d="M0,25 Q16,18 32,22 Q48,15 64,20" stroke="#000" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;