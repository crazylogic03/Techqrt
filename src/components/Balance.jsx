import React from 'react';

const Balance = () => {
  const balanceData = [
    { day: '01', value: 70 },
    { day: '02', value: 45 },
    { day: '03', value: 80 },
    { day: '04', value: 35 },
    { day: '05', value: 90 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Balance</h3>
      
      <div className="mb-6">
        <div className="text-2xl font-bold text-gray-900 mb-1">$ 244.55</div>
        <div className="text-sm text-green-600 font-medium">+2.7% than last week</div>
      </div>

      <div className="relative h-32">
        <div className="flex items-end justify-between h-full">
          {balanceData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div 
                className="w-6 bg-gray-900 rounded-t"
                style={{ height: `${item.value}%` }}
              ></div>
              <span className="text-xs text-gray-500">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="text-xs text-gray-500">80</div>
        <div className="text-xs text-gray-500">60</div>
        <div className="text-xs text-gray-500">40</div>
        <div className="text-xs text-gray-500">20</div>
        <div className="text-xs text-gray-500">0</div>
      </div>
    </div>
  );
};

export default Balance;