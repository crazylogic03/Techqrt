import React from 'react';

const TargetStats = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Statistics</h3>
      <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur</p>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#F97316"
              strokeWidth="8"
              strokeDasharray="100 151"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#EC4899"
              strokeWidth="8"
              strokeDasharray="80 171"
              strokeDashoffset="-100"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="8"
              strokeDasharray="60 191"
              strokeDashoffset="-180"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#1F2937"
              strokeWidth="8"
              strokeDasharray="40 211"
              strokeDashoffset="-240"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-gray-600">W</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Main Card</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Orange Card</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
          <span className="text-xs text-gray-600">Purple Card</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Green Card</span>
        </div>
      </div>
    </div>
  );
};

export default TargetStats;