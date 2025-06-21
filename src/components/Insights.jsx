import React from 'react';

const Insights = () => {
  const insightData = [
    { label: 'Property Sold', value: '63,876', color: 'text-orange-600' },
    { label: 'Income', value: '$97,125', color: 'text-pink-600' },
    { label: 'Expense', value: '$872,335', color: 'text-blue-600' },
    { label: 'Property Rented', value: '21,224', color: 'text-purple-600' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Insight</h3>
      <p className="text-sm text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="relative h-20 mb-6">
        <svg viewBox="0 0 300 60" className="w-full h-full">
          <path
            d="M 0 40 
               Q 50 20 100 30 
               Q 150 10 200 25 
               Q 250 35 300 20"
            fill="none"
            stroke="#F97316"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {insightData.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
            <div className="text-xs text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;