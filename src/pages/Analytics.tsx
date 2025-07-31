import React from 'react';
import { Search, Download, MoreHorizontal, TrendingUp } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Click Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Click Summary</h3>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-xs bg-gray-100 rounded">Monthly</button>
              <button className="px-3 py-1 text-xs text-gray-600">Weekly</button>
              <button className="px-3 py-1 text-xs text-gray-600">Daily</button>
            </div>
          </div>
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-gray-900">867,123k</p>
            <p className="text-sm text-gray-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              +9% from last month
            </p>
          </div>
          <div className="h-32">
            <svg viewBox="0 0 300 100" className="w-full h-full">
              <path 
                d="M0,70 Q30,40 60,50 Q90,30 120,35 Q150,60 180,45 Q210,25 240,30 Q270,50 300,20" 
                stroke="#F59E0B" 
                strokeWidth="2" 
                fill="url(#orangeGradient)"
              />
              <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>August</span>
            <span>September</span>
            <span>October</span>
            <span>November</span>
            <span>December</span>
            <span>January</span>
            <span>February</span>
          </div>
          <div className="mt-4">
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm hover:bg-orange-600">
              Download CSV
            </button>
          </div>
        </div>

        {/* Trending Ads */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Trending Ads</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Game Online Vouchers 20% OFF</p>
                <p className="text-sm text-gray-500">Published 91 days ago</p>
              </div>
              <div className="text-right">
                <div className="w-12 h-6 mb-1">
                  <div className="flex items-end space-x-1 h-full">
                    {[60, 40, 80, 50, 70].map((height, index) => (
                      <div 
                        key={index}
                        className="flex-1 bg-gray-800 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900">672k</p>
                <p className="text-xs text-gray-500">Visitors</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">10% OFF Granola Store</p>
                <p className="text-sm text-gray-500">Published 91 days ago</p>
              </div>
              <div className="text-right">
                <div className="w-12 h-6 mb-1">
                  <div className="flex items-end space-x-1 h-full">
                    {[40, 70, 50, 80, 60].map((height, index) => (
                      <div 
                        key={index}
                        className="flex-1 bg-gray-800 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900">672k</p>
                <p className="text-xs text-gray-500">Visitors</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">50% OFF Floor Lamp Get it Now!</p>
                <p className="text-sm text-gray-500">Published 91 days ago</p>
              </div>
              <div className="text-right">
                <div className="w-12 h-6 mb-1">
                  <div className="flex items-end space-x-1 h-full">
                    {[50, 80, 40, 60, 70].map((height, index) => (
                      <div 
                        key={index}
                        className="flex-1 bg-gray-800 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900">672k</p>
                <p className="text-xs text-gray-500">Visitors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Balance */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Your Balance</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-center mb-4">
            <p className="text-2xl font-bold text-gray-900">$244.55</p>
            <p className="text-sm text-green-600">+2.7% than last week</p>
          </div>
          <div className="h-16 mb-4">
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
          <div className="flex justify-between text-xs text-gray-500">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ads Engagement */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Ads Engagement</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-32 mb-4">
            <div className="flex items-end space-x-2 h-full">
              {[
                { height: 70, color: 'bg-orange-400' },
                { height: 40, color: 'bg-purple-600' },
                { height: 60, color: 'bg-orange-400' },
                { height: 80, color: 'bg-purple-600' },
                { height: 50, color: 'bg-orange-400' }
              ].map((bar, index) => (
                <div key={index} className="flex-1 flex flex-col space-y-1">
                  <div 
                    className={`${bar.color} rounded-t`}
                    style={{ height: `${bar.height}%` }}
                  ></div>
                  <div 
                    className={`${bar.color} rounded-b opacity-70`}
                    style={{ height: `${bar.height * 0.5}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mb-4">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
            <span>07</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span className="text-sm text-gray-600">45%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <span className="text-sm text-gray-600">52%</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            <span>Organic</span>
            <span className="ml-8">Shuffle</span>
          </div>
        </div>

        {/* Campaign Goal Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Goal Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Show All</span>
              <span className="text-sm text-gray-900">67/124 Campaign</span>
            </div>
            <div className="space-y-3">
              {[
                { platform: 'Facebook', count: '67/124 Campaign', color: 'bg-blue-600' },
                { platform: 'Instagram', count: '67/124 Campaign', color: 'bg-pink-600' },
                { platform: 'LinkedIn', count: '67/124 Campaign', color: 'bg-blue-700' },
                { platform: 'Google Business', count: '67/124 Campaign', color: 'bg-red-600' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-6 h-6 ${item.color} rounded`}></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.platform}</p>
                    <p className="text-sm text-gray-500">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Performed Campaign */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Performed Campaign</h3>
          <div className="space-y-4">
            {[
              { id: '#AD000245', title: '50% OFF Floor Lamp Get it Now!', conversion: '$63.04', engagement: '5,412k' },
              { id: '#AD000245', title: '50% OFF Floor Lamp Get it Now!', conversion: '$63.04', engagement: '5,412k' },
              { id: '#AD000245', title: '50% OFF Floor Lamp Get it Now!', conversion: '$63.04', engagement: '5,412k' }
            ].map((campaign, index) => (
              <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded font-medium">
                    {campaign.id}
                  </span>
                </div>
                <p className="font-medium text-gray-900 mb-2">{campaign.title}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-600">Conversion</span>
                    <span className="font-medium">{campaign.conversion}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-600">Engagement</span>
                    <span className="font-medium">{campaign.engagement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insight Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Insight</h3>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">83,876</p>
            <p className="text-sm text-gray-500">Total Campaign</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">$97,125</p>
            <p className="text-sm text-gray-500">Spend</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">$872,338</p>
            <p className="text-sm text-gray-500">Revenue</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">21,224</p>
            <p className="text-sm text-gray-500">Audience</p>
          </div>
        </div>
      </div>

      {/* Target Statistics */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Statistics</h3>
        <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur</p>
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#E5E7EB" strokeWidth="20"/>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#8B5CF6" strokeWidth="20" 
                strokeDasharray="251.2" strokeDashoffset="75.36" transform="rotate(-90 100 100)"/>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#EC4899" strokeWidth="20" 
                strokeDasharray="251.2" strokeDashoffset="125.6" transform="rotate(90 100 100)"/>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#06B6D4" strokeWidth="20" 
                strokeDasharray="251.2" strokeDashoffset="188.4" transform="rotate(180 100 100)"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">Vi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Web Goal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Career Goal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Social Goal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-600">Other Goal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;