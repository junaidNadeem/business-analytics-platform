function DataComponent() {
  return (
    <div className="flex shadow-sm bg-[url('../../public/images/grid.png')] bg-repeat pt-12 pb-72 mt-12 mb-20 rounded-[3.5rem] bg-[#f9f9f9]">
      <div className="p-8 flex flex-col space-y-12 md:flex-row justify-between mb-10 relative">
        {/* Left Section */}
        <div className="px-8 pb-8 space-y-6">
          <h1
            className="text-3xl md:text-3xl leading-tight pb-10"
            data-aos="fade-up"
          >
            Turning data into real <br /> actions and ideas.
          </h1>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              className="bg-white flex justify-between items-center w-full rounded-2xl shadow-md text-gray-800 py-2 px-5 border hover:bg-gray-100 focus:outline-none"
              data-aos="zoom-out"
            >
              Instant Insights
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                +
              </span>
            </button>

            <button
              className="bg-white flex justify-between items-center w-full rounded-2xl shadow-md text-gray-800 py-2 px-5 border hover:bg-gray-100 focus:outline-none"
              data-aos="fade-up"
            >
              AI technology
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                +
              </span>
            </button>

            <button
              className="bg-white flex justify-between items-center w-full rounded-2xl shadow-md text-gray-800 py-2 px-5 border hover:bg-gray-100 focus:outline-none"
              data-aos="fade-up"
            >
              Easy integration{' '}
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                +
              </span>
            </button>
          </div>

          <div
            className="text-[17rem] font-black text-[#ff4a24] absolute top-[22rem] left-[3rem]"
            data-aos="fade-down-right"
          >
            Ramos
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2">
          <div
            className="bg-white border-[10px] border-black rounded-2xl"
            data-aos="fade-up"
          >
            <img
              src="../../public/images/inner2-f.png"
              alt="laptop screen"
              className="w-full h-full rounded-md shadow-md"
            />
          </div>

          <div
            className="bg-white border-8 border-black rounded-2xl w-[18%] h-[90%] mx-auto absolute top-40 left-[32rem]"
            data-aos="slide-up"
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img
                src="../../public/images/inner2-f.png"
                alt="laptop screen"
                className="w-full h-full rounded-md shadow-md "
              />
              <img
                src="../../public/images/inside.jpeg"
                alt="laptop screen"
                className="w-full h-full rounded-md shadow-md"
                data-aos="slide-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataComponent;
