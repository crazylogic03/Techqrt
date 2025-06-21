import React from 'react';
import { BarChart3, Eye } from 'lucide-react';

const CampaignStats = () => {
  const campaigns = [
    {
      id: '#ADS001245',
      title: '50% OFF Floor Lamp Get it Now!',
      conversion: '$63.04',
      engagement: '5.412k',
    },
    {
      id: '#ADS001245',
      title: '50% OFF Floor Lamp Get it Now!',
      conversion: '$63.04',
      engagement: '5.412k',
    },
    {
      id: '#ADS001245',
      title: '50% OFF Floor Lamp Get it Now!',
      conversion: '$63.04',
      engagement: '5.412k',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Campaign</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">67,124</div>
            <div className="text-sm text-gray-500">+24% from last week</div>
          </div>
          <div className="w-16 h-16">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <path
                d="M 10 50 Q 30 10 50 50"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Performed Campaign</h3>
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
              <div className="text-sm font-medium text-gray-900 mb-1">{campaign.id}</div>
              <div className="text-sm text-gray-600 mb-3">{campaign.title}</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">Conversion</span>
                  <span className="text-xs font-medium text-gray-900">{campaign.conversion}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">Engagement</span>
                  <span className="text-xs font-medium text-gray-900">{campaign.engagement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignStats;