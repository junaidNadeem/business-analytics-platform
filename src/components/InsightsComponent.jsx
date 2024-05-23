function InsightsComponent() {
  return (
    <div className="flex flex-col text-center space-y-2 md:text-left">
      <span className="text-3xl md:text-4xl font-bold tracking-tight">
        We give you full{' '}
      </span>
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-gray-500">
        control over your data
      </span>

      {/* 2 cards */}

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Conversion Rate */}
          <div className="bg-gray-100 rounded-lg p-6 relative">
            <div className="absolute top-3 right-3 bg-yellow-500 rounded-full p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-xs text-gray-500 uppercase">Conversion rate</h3>
            <p className="text-4xl font-bold text-yellow-500 mt-2">2,3%</p>
            <p className="text-xs text-gray-500 mt-1">
              Percentage of website visitors
            </p>

            {/* Add Price Visualization here */}

            <h4 className="text-xs text-gray-500 uppercase mt-6">
              Engagement rate
            </h4>
            <p className="text-lg font-semibold">47.84%</p>
          </div>

          {/* Card 2: Finance Reports */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <svg
              // ... (finance report icon SVG here)
              />
              <h3 className="text-xs text-gray-500 uppercase ml-2">
                Finance reports
              </h3>
            </div>
            <div className="flex items-center">
              <svg
              // ... (insights icon SVG here)
              />
              <h3 className="text-xs text-gray-500 uppercase ml-2">Insights</h3>
            </div>

            {/* Add Total Profit and Data Visualization here */}

            <div className="mt-auto">
              {' '}
              {/* Pushes content to the bottom */}
              <h2 className="text-lg font-semibold">
                Monitoring key indicators
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Analytics platforms allow businesses to track KPIs, an important
                tool for measuring success and achieving goals.
              </p>
            </div>
          </div>
        </div>

        {/* Improved Customer Service Section (Outside Cards) */}
        <div className="mt-8 text-center md:text-left">
          <h2 className="text-2xl font-bold">Improved customer service</h2>
          <p className="text-gray-600 mt-2">
            Analytics helps optimize service processes by providing information
            on how to improve interactions with customers and increase their
            satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InsightsComponent;
