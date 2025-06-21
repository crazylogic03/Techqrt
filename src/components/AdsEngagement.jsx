import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const AdsEngagement = () => {
  const engagementData = [
    { day: '01', orange: 45, purple: 85 },
    { day: '02', orange: 55, purple: 75 },
    { day: '03', orange: 35, purple: 95 },
    { day: '04', orange: 65, purple: 65 },
    { day: '05', orange: 40, purple: 80 },
    { day: '06', orange: 50, purple: 70 },
    { day: '07', orange: 45, purple: 85 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Ads Engagement</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="relative h-64">
        <div className="flex items-end justify-between h-full pb-8">
          {engagementData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-1" style={{ height: '180px' }}>
                <div className="w-8 bg-orange-400 rounded-t" style={{ height: `${item.orange}%` }}></div>
                <div className="w-8 bg-purple-600 rounded-b" style={{ height: `${item.purple}%` }}></div>
              </div>
              <span className="text-xs text-gray-500">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
          <span className="text-sm text-gray-600">45% Visitor</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          <span className="text-sm text-gray-600">52% Shuffle</span>
        </div>
      </div>
    </div>
  );
};

export default AdsEngagement;