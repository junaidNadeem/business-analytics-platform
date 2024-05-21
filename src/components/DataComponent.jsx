function DataComponent() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
      {/* Left Section */}
      <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
        {/* Heading */}
        <div className="text-gray-500 text-sm uppercase tracking-wider">
          Turning data into real
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          actions and ideas.
        </h1>

        {/* Buttons */}
        <div className="space-y-3">
          <button className="bg-white flex justify-between items-center w-full text-gray-800 py-3 px-6 border rounded-full hover:bg-gray-100 focus:outline-none">
            Instant Insights
            <span className="text-4xl font-bold text-gray-400">+</span>
          </button>

          <button className="bg-white flex justify-between items-center w-full text-gray-800 py-3 px-6 border rounded-full hover:bg-gray-100 focus:outline-none">
            AI technology
            <span className="text-4xl font-bold text-gray-400">+</span>
          </button>

          <button className="bg-white flex justify-between items-center w-full text-gray-800 py-3 px-6 border rounded-full hover:bg-gray-100 focus:outline-none">
            Easy integration
            <span className="text-4xl font-bold text-gray-400">+</span>
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="bg-gray-100 rounded-lg shadow-inner p-6 md:w-2/3">
        {/* Phone and Tablet View */}
        <div className="md:hidden space-y-4">
          {/* Image Placeholder - Replace with actual image */}
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            <span className="text-gray-400">Phone/Tablet View Image</span>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-4">
          {/* Image Placeholder - Replace with actual image */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-400">Desktop View Image</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataComponent;
