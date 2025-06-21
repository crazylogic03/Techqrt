import React from 'react';
import { CheckCircle, Facebook, Instagram, Linkedin, Chrome } from 'lucide-react';

const CampaignGoals = () => {
  const platforms = [
    { name: 'Show All', campaigns: '67,124 Campaign', icon: CheckCircle, color: 'bg-gray-600' },
    { name: 'Facebook', campaigns: '67,124 Campaign', icon: Facebook, color: 'bg-blue-600' },
    { name: 'Instagram', campaigns: '67,124 Campaign', icon: Instagram, color: 'bg-pink-600' },
    { name: 'LinkedIn', campaigns: '67,124 Campaign', icon: Linkedin, color: 'bg-blue-700' },
    { name: 'Google Business', campaigns: '67,124 Campaign', icon: Chrome, color: 'bg-blue-500' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Campaign Goal Summary</h3>
      
      <div className="space-y-3">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
              <div className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{platform.name}</div>
                <div className="text-xs text-gray-500">{platform.campaigns}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignGoals;