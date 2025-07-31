import React, { useState } from 'react';
import { Search, Download, TrendingUp, Eye, ThumbsUp, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialNetwork: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [activeFilter, setActiveFilter] = useState('Show All');

  const filters = [
    { name: 'Show All', count: '67/124 Campaign' },
    { name: 'Facebook', count: '67/124 Campaign' },
    { name: 'Instagram', count: '67/124 Campaign' },
    { name: 'LinkedIn', count: '67/124 Campaign' },
    { name: 'Google Business', count: '67/124 Campaign' },
  ];

  const campaigns = [
    {
      id: '#AD-001245',
      title: '50% OFF Floor Lamp Get it Now!',
      publishedOn: 'January 25, 2024',
      conversion: '563.04',
      engagement: '5,412k',
      likes: '4,625k',
      comments: '2,512'
    },
    {
      id: '#AD-001245',
      title: '50% OFF Floor Lamp Get it Now!',
      publishedOn: 'January 25, 2024',
      conversion: '563.04',
      engagement: '5,412k',
      likes: '4,625k',
      comments: '2,512'
    },
    {
      id: '#AD-001245',
      title: '50% OFF Floor Lamp Get it Now!',
      publishedOn: 'January 25, 2024',
      conversion: '563.04',
      engagement: '5,412k',
      likes: '4,625k',
      comments: '2,512'
    },
    {
      id: '#AD-001245',
      title: '50% OFF Floor Lamp Get it Now!',
      publishedOn: 'January 25, 2024',
      conversion: '563.04',
      engagement: '5,412k',
      likes: '4,625k',
      comments: '2,512'
    },
    {
      id: '#AD-001245',
      title: '50% OFF Floor Lamp Get it Now!',
      publishedOn: 'January 25, 2024',
      conversion: '563.04',
      engagement: '5,412k',
      likes: '4,625k',
      comments: '2,512'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Social Network Grid</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-600">View by</p>
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeFilter === filter.name
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {filter.name === 'Facebook' && <div className="w-4 h-4 bg-blue-600 rounded"></div>}
                  {filter.name === 'Instagram' && <div className="w-4 h-4 bg-pink-600 rounded"></div>}
                  {filter.name === 'LinkedIn' && <div className="w-4 h-4 bg-blue-700 rounded"></div>}
                  {filter.name === 'Google Business' && <div className="w-4 h-4 bg-red-600 rounded"></div>}
                  <span>{filter.name}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{filter.count}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <TrendingUp className="w-4 h-4" />
            <span>View analytics</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="space-y-0">
          {campaigns.map((campaign, index) => (
            <div key={index} className="flex items-center justify-between p-6 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-4">
                <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded font-medium">
                  {campaign.id}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">{campaign.title}</h3>
                  <p className="text-sm text-gray-500">Published on {campaign.publishedOn}</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{campaign.conversion}</p>
                    <p className="text-xs text-gray-500">Conversion</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-orange-500" />
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{campaign.engagement}</p>
                    <p className="text-xs text-gray-500">Engagement</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-4 h-4 text-orange-500" />
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{campaign.likes}</p>
                    <p className="text-xs text-gray-500">Likes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-orange-500" />
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{campaign.comments}</p>
                    <p className="text-xs text-gray-500">Comments</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 10 from 160 data</p>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 flex items-center space-x-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
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
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialNetwork;