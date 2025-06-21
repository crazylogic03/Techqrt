import React from 'react';
import { Download, TrendingUp } from 'lucide-react';

const ClickSummary = () => {
  const chartData = [
    { month: 'August', value: 450 },
    { month: 'September', value: 380 },
    { month: 'October', value: 520 },
    { month: 'November', value: 680 },
    { month: 'December', value: 550 },
    { month: 'January', value: 720 },
    { month: 'February', value: 650 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Click Summary</h3>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-900 border-b-2 border-orange-500 pb-1">
              Monthly
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-700">
              Weekly
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-700">
              Daily
            </button>
          </div>
        </div>
        <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors">
          Download CSV
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl font-bold text-gray-900">867,123k</span>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+95% from last month</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-medium">675,451</span>
          <span className="ml-2">5 March 2024</span>
        </div>
      </div>

      <div className="relative h-64">
        <svg viewBox="0 0 600 200" className="w-full h-full">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Area fill */}
          <path
            d="M 0 150 
               L 85 120 
               L 170 135 
               L 255 90 
               L 340 70 
               L 425 80 
               L 510 60 
               L 600 85 
               L 600 200 
               L 0 200 Z"
            fill="url(#areaGradient)"
          />
          
          {/* Line */}
          <path
            d="M 0 150 
               L 85 120 
               L 170 135 
               L 255 90 
               L 340 70 
               L 425 80 
               L 510 60 
               L 600 85"
            fill="none"
            stroke="#F97316"
            strokeWidth="3"
          />
        </svg>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
          {chartData.map((item, index) => (
            <span key={index}>{item.month}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClickSummary;