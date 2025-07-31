import React, { useState, useMemo } from 'react';
import { Search, Download, TrendingUp, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const Balance = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(3);
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  const spendings = [
    {
      adsId: '#AD-001234',
      datePublished: 'Thu Mar 05 2024 22:46',
      yesterdaySpending: '$ 564.75',
      todaySpending: '$ 185.07',
      totalSpending: '$ 539.28',
      remaining: '$ 959.68'
    },
    {
      adsId: '#AD-001234',
      datePublished: 'Sat Feb 29 2024 00:15',
      yesterdaySpending: '$ 552.94',
      todaySpending: '$ 634.68',
      totalSpending: '$ 264.50',
      remaining: '$ 419.88'
    },
    {
      adsId: '#AD-001234',
      datePublished: 'Thu Jan 23 2024 17:47',
      yesterdaySpending: '$ 570.87',
      todaySpending: '$ 179.78',
      totalSpending: '$ 864.39',
      remaining: '$ 666.81'
    },
    {
      adsId: '#AD-001234',
      datePublished: 'Tue Nov 10 2024 20:59',
      yesterdaySpending: '$ 295.76',
      todaySpending: '$ 592.12',
      totalSpending: '$ 223.19',
      remaining: '$ 201.57'
    },
    {
      adsId: '#AD-001234',
      datePublished: 'Sun May 17 2024 20:13',
      yesterdaySpending: '$ 697.81',
      todaySpending: '$ 532.64',
      totalSpending: '$ 476.80',
      remaining: '$ 281.26'
    },
    {
      adsId: '#AD-001234',
      datePublished: 'Sun Sep 06 2024 16:03',
      yesterdaySpending: '$ 701.63',
      todaySpending: '$ 315.54',
      totalSpending: '$ 480.39',
      remaining: '$ 82.29'
    },
    {
      adsId: '#AD-001234',
      datePublished: 'Sat Feb 29 2024 22:45',
      yesterdaySpending: '$ 891.47',
      todaySpending: '$ 50.49',
      totalSpending: '$ 787.50',
      remaining: '$ 148.56'
    },
    {
      adsId: '#AD-001234',
      datePublished: 'Tue Jan 14 2024 03:39',
      yesterdaySpending: '$ 91.55',
      todaySpending: '$ 607.53',
      totalSpending: '$ 406.93',
      remaining: '$ 886.34'
    },
    {
      adsId: '#AD-001234',
      datePublished: 'Mon Nov 23 2024 06:14',
      yesterdaySpending: '$ 291.74',
      todaySpending: '$ 6.74',
      totalSpending: '$ 364.20',
      remaining: '$ 381.77'
    }
  ];

  const filteredSpendings = useMemo(() => {
    const query = (searchQuery || localSearchQuery).toLowerCase();
    if (!query) return spendings;
    
    return spendings.filter(spending => 
      spending.adsId.toLowerCase().includes(query) ||
      spending.datePublished.toLowerCase().includes(query)
    );
  }, [searchQuery, localSearchQuery]);

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Spending List</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-64"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full lg:w-80"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <TrendingUp className="w-4 h-4" />
            <span>View analytics</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Mobile Card View */}
        <div className="block lg:hidden">
          <div className="space-y-4 p-4">
            {filteredSpendings.map((spending, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{spending.adsId}</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <p>{spending.datePublished}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Yesterday</p>
                    <p className="font-medium">{spending.yesterdaySpending}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Today</p>
                    <p className="font-medium">{spending.todaySpending}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total</p>
                    <p className="font-medium">{spending.totalSpending}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Remaining</p>
                    <p className="font-medium">{spending.remaining}</p>
                  </div>
                </div>
                <div className="w-full h-8">
                  <svg viewBox="0 0 64 32" className="w-full h-full">
                    <path d="M0,20 Q16,15 32,18 Q48,22 64,16" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ads ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Published
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Yesterday Spending
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Today Spending
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spending
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Remaining
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSpendings.map((spending, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{spending.adsId}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{spending.datePublished}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{spending.yesterdaySpending}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{spending.todaySpending}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{spending.totalSpending}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{spending.remaining}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-16 h-8">
                      <svg viewBox="0 0 64 32" className="w-full h-full">
                        <path d="M0,20 Q16,15 32,18 Q48,22 64,16" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-600">Showing 10 from 160 data</p>
        <div className="flex items-center justify-center sm:justify-end space-x-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 flex items-center space-x-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded-lg text-sm ${
                currentPage === page
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 flex items-center space-x-1"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Balance;