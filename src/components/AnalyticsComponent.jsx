// import React from 'react';
// import graphImage from './path/to/your/graph.svg';
// import peopleImage from './path/to/your/people.svg';

const AnalyticsComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16 bg-white rounded-lg shadow-md">
      {/* Left Section */}
      <div className="space-y-8">
        <div className="text-gray-500">
          Your key to strategic success through analytics
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Fast and easy access to analytics
        </h1>
        <p className="text-gray-600">
          One platform is a comprehensive system of solutions that will be the
          first step towards digitalization of your business
        </p>
        <div className="flex items-center space-x-4">
          <div className="bg-red-500 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div className="text-base font-medium">
            <div>Setting up reports</div>
            <div className="text-gray-500 text-xs">Sales statistic</div>
          </div>
        </div>
        <div className="relative">
          {/* <img src={graphImage} alt="Graph" className="w-full" /> */}
          <div className="bg-red-500 rounded-full h-12 w-12 flex items-center justify-center absolute bottom-4 right-4">
            <span className="text-white font-semibold">37%</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-8">
        <div className="bg-gray-100 rounded-lg p-6 text-sm text-gray-500">
          Ready for exciting, instantaneous, all-accessible insights in real
          time?
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="text-4xl font-bold">$264.2K</div>
            <div className="text-gray-500 text-sm">Total profit</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="text-4xl font-bold">44K</div>
            <div className="text-gray-500 text-sm">Visitors</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center relative">
            {/* <img src={peopleImage} alt="People" className="h-16 w-16 mb-4" /> */}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
              +11%
            </div>
            <div className="text-gray-500 text-sm">Transactions</div>
            <div className="text-4xl font-bold mt-4">37K</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="text-sm font-semibold">Widget control</div>
            <div className="text-gray-500 text-sm">
              Reports provide a comprehensive overview of important aspects of
              web analytics
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="md:col-span-2 mt-8 md:mt-16 text-center md:text-left">
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Up to <span className="text-orange-500">45%</span>
        </div>
        <p className="text-gray-600 mt-4">
          Increase your analytics efficiency by up to 45%. Unique algorithms
          provide insights from data, reduce time for analysis and save time for
          making important, informed decisions.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
