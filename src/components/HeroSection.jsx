const HeroSection = () => {
  return (
    <div className="bg-white py-12 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <div className="bg-red-500 rounded-full h-12 w-12 flex items-center justify-center relative">
            {' '}
            {/* Added relative positioning for the play button */}
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
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            <div className="absolute top-2 right-2 bg-white rounded-full h-4 w-4"></div>{' '}
            {/* Added the small white circle for the play button */}
          </div>
          <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center">
            {' '}
            {/* Changed background color to gray-200 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              {/* Changed icon color to gray-500 */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12 7-12 7m0 0V4m0 15h4m-4-2h4"
              />{' '}
              {/* Changed icon path */}
            </svg>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Analytics <span className="text-gray-400">that helps you</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
          shape <span className="text-yellow-500">the future</span>
        </h2>
      </div>
      <div className="mt-8 md:mt-0 relative">
        {' '}
        {/* Added relative positioning for the laptop image */}
        <img
          src="/path-to-laptop-image.png"
          alt="Laptop with Analytics"
          className="h-64 md:h-80 lg:h-96"
        />
        <div className="absolute -top-4 -right-4 bg-red-500 rounded-full h-8 w-8 flex items-center justify-center">
          {' '}
          {/* Added the play button circle on the laptop image */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
