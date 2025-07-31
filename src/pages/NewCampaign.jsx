import React, { useState } from 'react';
import { X, Calendar, Plus, ArrowLeft } from 'lucide-react';

const NewCampaign = ({ onClose }) => {
  const [campaignName, setCampaignName] = useState('Clothing Advertisement');
  const [adTitle, setAdTitle] = useState('We Made Clothes, Women Make Fashion');
  const [description, setDescription] = useState(`NRW est vel, lorem consectetur adipiscing mens do sint venenatis ex dui veniamiuris except in dolorem iste in reprehenderit inventore quasi officit.

Porro tempor distinctio quo perspiciatis dolorem. Sint maiores non voluptate fugiat. Sed molestias nisi voluptatem fugiat.

Nemo labore ducimus quo perspiciatis dolorem. Sint maiores non voluptate fugiat. Sed molestias nisi voluptatem officia molestiae optio natus. Curabitur ut tenetur quae quidem et veritatis vitae debitis. Serum facere eligendi itaque molestiae.

Velirusse esse proesidentium proesenti. Deleniti quo culpa deserunt neque atque. Sunt nemo nam venenatis optio molestias fugiat. It do eius quaerat. Sint maiores non voluptate fugiat. Sed molestias nisi voluptatem fugiat. Ipsan duis vitalis. Iusto facere eligendi lorem molestiae.`);
  const [keywords, setKeywords] = useState(['#fashion', '#women', '#luxury', '#clothes']);
  const [selectedPlatforms, setSelectedPlatforms] = useState(['Kroger', 'Shuffle']);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h2 className="text-xl font-bold text-gray-900">New Campaign</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                View Insight
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600">
                Publish Ads
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <span>🎯</span>
                  <span>Use template</span>
                </button>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Describe your campaign below</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Nostrud mollit excepteur et voluptate sint tempor fugiat in et fugiat adipisicing elit.
                  Voluptate laborum adipisicing magna. Deserunt in est, proident excepteur cillabore commodo enim.
                  Voluptate ullamco culpa cupidatat mollit.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Name *
                </label>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ads Title
                </label>
                <input
                  type="text"
                  value={adTitle}
                  onChange={(e) => setAdTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Keyword *
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full flex items-center space-x-2"
                    >
                      <span>{keyword}</span>
                      <button 
                        onClick={() => setKeywords(keywords.filter((_, i) => i !== index))}
                        className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs"
                      >
                        <X className="w-2 h-2" />
                      </button>
                    </span>
                  ))}
                  <button className="px-3 py-1 border-2 border-dashed border-gray-300 text-gray-500 text-sm rounded-full hover:border-orange-300">
                    + Add keyword
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platforms
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">K</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Kroger</p>
                      <p className="text-sm text-gray-500">6.84% insight</p>
                    </div>
                    <input type="checkbox" checked className="rounded border-gray-300" readOnly />
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Shuffle</p>
                      <p className="text-sm text-gray-500">4.57% insight</p>
                    </div>
                    <input type="checkbox" checked className="rounded border-gray-300" readOnly />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date Start
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value="Thu Apr 05 2024"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                      readOnly
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date End *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value="Thu Apr 09 2024"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                      readOnly
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Set Daily Budget
                  </label>
                  <input
                    type="text"
                    value="$ 500.00"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Set Campaign Goal
                  </label>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" checked className="rounded border-gray-300" readOnly />
                        <span className="text-sm text-gray-700">Click</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700">Engagement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700">Conversion</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700">Insight</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700">Checkout</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700">Rating</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$ 1,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Upload Images */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Images</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 lg:p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 mb-2 text-sm">
                  Upload to file or drag and drop PNG, JPG, and SVG format only
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="relative">
                      <div className="w-full h-20 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Plus className="w-6 h-6 text-gray-400" />
                      </div>
                      <button className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCampaign;