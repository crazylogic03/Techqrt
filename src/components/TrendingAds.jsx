import React from 'react';
import { MoreHorizontal, BarChart3, Eye } from 'lucide-react';

const TrendingAds = () => {
  const ads = [
    {
      title: 'Game Online Vouchers 20% OFF',
      date: 'Published on 5 June 2024',
      visitors: '672k',
    },
    {
      title: '15% OFF Granite Stone',
      date: 'Published on 5 June 2024',
      visitors: '672k',
    },
    {
      title: '50% OFF Floor Lamp Get it Now!',
      date: 'Published on 5 June 2024',
      visitors: '672k',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Trending Ads</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {ads.map((ad, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 mb-1">{ad.title}</h4>
              <p className="text-xs text-gray-500">{ad.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <BarChart3 className="w-4 h-4 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">{ad.visitors}</span>
                <span className="text-xs text-gray-400">Visitors</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingAds;