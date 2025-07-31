import React, { useState, useMemo } from 'react';
import { Search, Play, Pause, Square, MoreHorizontal, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const Campaign = ({ onNewCampaign, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const totalPages = 4;

  const campaigns = [
    {
      id: '#AD-001245',
      title: '50% OFF Floor Lamp Get it Now!',
      publishedOn: 'January 25, 2024',
      status: 'Running',
      targetReached: '45,324',
      userInsight: '-2%',
      url: 'https://krizoar.com/campaign0...'
    },
    {
      id: '#AD-001245',
      title: 'Property New Year Sales!',
      publishedOn: 'January 25, 2024',
      status: 'Running',
      targetReached: '45,324',
      userInsight: '-2%',
      url: 'https://krizoar.com/campaign0...'
    },
    {
      id: '#AD-001245',
      title: 'Gaya Fashion Store Grand Opening',
      publishedOn: 'January 25, 2024',
      status: 'Paused',
      targetReached: '45,324',
      userInsight: '-2%',
      url: 'https://krizoar.com/campaign0...'
    },
    {
      id: '#AD-001245',
      title: 'Personal Branding',
      publishedOn: 'January 25, 2024',
      status: 'Expired',
      targetReached: '45,324',
      userInsight: '-2%',
      url: 'https://krizoar.com/campaign0...'
    },
    {
      id: '#AD-001245',
      title: '50% OFF Floor Lamp Get it Now!',
      publishedOn: 'January 25, 2024',
      status: 'Running',
      targetReached: '45,324',
      userInsight: '-2%',
      url: 'https://krizoar.com/campaign0...'
    },
  ];

  const filteredCampaigns = useMemo(() => {
    const query = (searchQuery || localSearchQuery).toLowerCase();
    if (!query) return campaigns;
    
    return campaigns.filter(campaign => 
      campaign.title.toLowerCase().includes(query) ||
      campaign.id.toLowerCase().includes(query) ||
      campaign.status.toLowerCase().includes(query)
    );
  }, [searchQuery, localSearchQuery]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Running': return 'bg-orange-500';
      case 'Paused': return 'bg-black';
      case 'Expired': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Ads Campaign List</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
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
          <button 
            onClick={onNewCampaign} 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-600"
          >
            <Plus className="w-4 h-4" />
            <span>New</span>
          </button>
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
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <Play className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <Pause className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <Square className="w-4 h-4" />
            </button>
          </div>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="space-y-0">
          {filteredCampaigns.map((campaign, index) => (
            <div key={index} className="flex flex-col lg:flex-row lg:items-center justify-between p-4 lg:p-6 border-b border-gray-100 last:border-b-0 space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded font-medium">
                  {campaign.id}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">{campaign.title}</h3>
                  <p className="text-sm text-gray-500">Published on {campaign.publishedOn}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8">
                <div className="flex items-center justify-between sm:justify-start sm:space-x-8">
                  <div className="text-center">
                    <div className="w-12 lg:w-16 h-6 lg:h-8 mb-2">
                      <div className="flex items-end space-x-1 h-full">
                        {[40, 60, 30, 50, 70, 45, 80].map((height, i) => (
                          <div 
                            key={i}
                            className="flex-1 bg-orange-400 rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <p className="text-base lg:text-lg font-semibold text-gray-900">{campaign.targetReached}</p>
                    <p className="text-xs text-gray-500">Target Reached</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 lg:w-16 h-6 lg:h-8 mb-2">
                      <svg viewBox="0 0 64 32" className="w-full h-full">
                        <path d="M0,20 Q16,15 32,18 Q48,22 64,16" stroke="#000" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <p className="text-base lg:text-lg font-semibold text-gray-900">{campaign.userInsight}</p>
                    <p className="text-xs text-gray-500">User Insight</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center justify-between sm:justify-start sm:space-x-4">
                    <span className={`px-3 py-1 text-white text-sm rounded-lg ${getStatusColor(campaign.status)} min-w-[80px] text-center`}>
                      {campaign.status}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
                        <Play className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
                        <Pause className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Square className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-sm text-gray-500 truncate max-w-[200px]">{campaign.url}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-600">Showing 10 from 160 data</p>
        <div className="flex items-center justify-center sm:justify-end space-x-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 flex items-center space-x-1"
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
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
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

export default Campaign;