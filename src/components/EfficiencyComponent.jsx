const EfficiencyComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-md px-8 py-12 flex flex-col md:flex-row items-center justify-between md:space-x-8">
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-none">
            <span className="text-gray-500">Maximize</span> efficiency
          </h1>
          <h2 className="text-lg md:text-xl font-medium mt-2">
            with our intuitive
          </h2>
          {/* ergr */}
          <div className="flex items-center relative">
            <div className="bg-gray-200 rounded-full p-4">
              <div className="bg-red-500 rounded-full p-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Replace with your SVG icon content */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-yellow-400 rounded-full h-24 w-24 flex items-center justify-center ml-[-1.5rem] text-lg font-bold relative">
              +30%
              <span className="absolute bottom-0 -mb-4 text-xs font-medium">
                Speed up your productivity
              </span>
            </div>
          </div>
          {/* it's  */}
        </div>

        <div className="bg-yellow-400 rounded-full px-6 py-3 md:px-8 md:py-4 text-black font-semibold text-base md:text-lg mt-4 inline-block">
          analytics service
        </div>
      </div>
      {/* call to action */}
      {/* Text Section */}

      <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:px-24 rounded-lg shadow-md flex flex-col items-center md:flex-row justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Explore traffic sources, page behavior, conversions, and more to
            gain deep insight into your audience. With us, your business does
            not just adapt — it evolves.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end space-x-4">
          <button className="bg-white text-red-500 border border-red-500 py-2 px-8 rounded-full hover:bg-red-100 transition duration-300 ease-in-out">
            Request a demo
          </button>
          <button className="bg-red-500 text-white py-2 px-8 rounded-full hover:bg-red-600 transition duration-300 ease-in-out">
            Start for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyComponent;
