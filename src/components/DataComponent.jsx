function DataComponent() {
  return (
    <div className="flex rounded-3xl shadow-lg bg-[url('../../public/images/grid.png')] bg-repeat">
      <div className="p-8 flex flex-col space-y-12 md:flex-row justify-between mb-10 relative">
        {/* Left Section */}
        <div className="px-8 pb-8 space-y-6">
          <h1 className="text-3xl md:text-3xl leading-tight pb-10">
            Turning data into real <br /> actions and ideas.
          </h1>

          {/* Buttons */}
          <div className="space-y-4">
            <button className="bg-white flex justify-between items-center w-full rounded-2xl shadow-md text-gray-800 py-2 px-5 border hover:bg-gray-100 focus:outline-none">
              Instant Insights
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                +
              </span>
            </button>

            <button className="bg-white flex justify-between items-center w-full rounded-2xl shadow-md text-gray-800 py-2 px-5 border hover:bg-gray-100 focus:outline-none">
              AI technology
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                +
              </span>
            </button>

            <button className="bg-white flex justify-between items-center w-full rounded-2xl shadow-md text-gray-800 py-2 px-5 border hover:bg-gray-100 focus:outline-none">
              Easy integration{' '}
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                +
              </span>
            </button>
          </div>
        </div>
        {/* <div className="text-[17rem] font-black text-[#ff4a24]">Ramos</div> */}
        {/* Right Section */}
        <div className="md:w-1/2">
          {/* Phone and Tablet View */}

          <div className="bg-white border-[10px] border-black rounded-2xl">
            <img
              src="../../public/images/inner2-f.png"
              alt="laptop screen"
              className="w-full h-full rounded-md shadow-md"
            />
          </div>

          <div className="text-[17rem] font-black text-[#ff4a24]">Ram</div>
          <div className="bg-white border-8 border-black rounded-2xl w-[18%] h-[55%] mx-auto absolute top-40 left-[32rem]">
            <img
              src="../../public/images/inner2-f.png"
              alt="laptop screen"
              className="w-full h-full rounded-md shadow-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataComponent;
