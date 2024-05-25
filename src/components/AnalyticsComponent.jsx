import { FaCircleArrowUp } from 'react-icons/fa6';
import { IoLayersOutline } from 'react-icons/io5';
// import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'; // Assuming you're using Recharts for the line chart

const AnalyticsComponent = () => {
  return (
    <div className="flex flex-col  space-y-4">
      {/* // header part of the analyticCompo section starts here */}
      <div className="flex flex-col md:flex-row items-center justify-items-end p-8">
        {/* Left Side Text */}
        <div className="text-left">
          <h1 className="text-4xl  text-black leading-tight">
            Your key to strategic <br />
            success through analytics
          </h1>
        </div>
        {/* Right Side Text */}
        <div className="text-right mt-4 md:mt-0 ml-auto">
          <p className=" text-gray-600">
            Ready for exciting, instantaneous, <br />
            all-accessible insights in real time?
          </p>
        </div>
      </div>
      {/* // header part of the analyticCompo section ends here */}
      <div className="flex flex-col md:flex-row p-4 space-y-8 md:space-y-0 md:space-x-3 ">
        {/* Left Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg w-full md:w-[60%] flex space-y-6">
          <div className="mr-auto p-6">
            <button className="bg-yellow-400 rounded-xl py-2 px-4  text-sm  shadow-md mb-8">
              Setting up reports
            </button>

            <h2 className="text-2xl mb-4 ">
              Fast and easy access
              <br />
              to analytics
            </h2>

            <p className="text-gray-500 text-base leading-relaxed max-w-xs mx-auto">
              One platform is a comprehensive <br /> system of solutions that
              will be the <br /> first step towards digitalization of <br />
              your business!
            </p>
          </div>

          {/* 2nd half */}

          <div className="p-6 bg-white rounded-lg shadow-md max-w-sm">
            <h2 className="text-lg font-medium mb-4">Sales statistic</h2>

            <div className="flex justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#F25922] flex items-center justify-center">
                  {/* You might replace this with an icon component */}
                  <span className="text-white">
                    <IoLayersOutline className="text-sm" />
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-[10px] text-gray-500">Total profit</p>
                  <p className="text-2xl">
                    {' '}
                    <span className="text-lg">$</span>264,2K
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl py-4 px-8 flex flex-col items-center relative ml-3">
                <div className="flex items-center  text-[10px] mb-2 tracking-wider">
                  Visitors
                </div>
                {/* Main Content */}
                <div className="relative w-[140%] h-1">
                  <div
                    className="absolute top-0 left-4 h-[2px] bg-gray-200"
                    style={{ width: '75%' }}
                  ></div>
                  <div
                    className="absolute top-0 left-3 h-[2px] bg-green-500"
                    style={{ width: '25%' }}
                  ></div>
                </div>

                <div className="flex flex-col items-center mt-4 space-y-2">
                  <div className="flex items-center justify-end absolute top-12 right-[10px]">
                    <FaCircleArrowUp className="text-green-400 text-sm" />
                    <span className="text-green-400 text-[10px] ml-[2px]">
                      +14%
                    </span>
                  </div>
                  <span className="text-2xl ">44K</span>
                </div>
              </div>
            </div>

            <h3 className="text-sm text-gray-500 mb-2">Visit statistics</h3>

            {/* <LineChart width={300} height={150} data={data}>
              <Line
                type="monotone"
                dataKey="visits"
                stroke="#FF9900"
                strokeWidth={3}
              />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 200]} hide={true} />
              <Tooltip />
            </LineChart> */}

            <div className="bg-red-500 rounded-lg px-4 py-2 flex items-center mt-4">
              <p className="text-sm text-white">Rate</p>
              <p className="text-2xl font-bold text-white ml-2">33%</p>
              {/* Add the red bell icon here */}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-black text-white rounded-2xl p-6 shadow-lg w-full md:w-[40%] flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-[#131111] rounded-2xl p-8 flex flex-col items-center space-y-4">
                <div className="text-yellow-500">
                  <IoLayersOutline className="text-4xl" />
                </div>
                <div className="flex  mt-4">
                  <img
                    src="../../public/images/user.jpeg"
                    alt="User 1"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <img
                    src="../../public/images/user2.jpeg"
                    alt="User 2"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>
              {/*  */}
              <div className="bg-[#131111] rounded-2xl py-8 px-10 flex flex-col items-center relative">
                {/* Label with Icon */}
                <div className="flex items-center text-gray-200 text-[10px] mb-2 tracking-wider">
                  Transactions
                </div>
                {/* Main Content */}
                <div className="flex flex-col items-center mt-4 space-y-2">
                  <div className="flex items-center justify-end absolute top-14 right-[10px]">
                    <FaCircleArrowUp className="text-green-400 text-lg" />
                    <span className="text-green-400 text-[10px] ml-[2px]">
                      +14%
                    </span>
                  </div>
                  <span className="text-white text-4xl ">36K</span>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg">Widget control</p>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-gray-400 text-sm">
              Reports provide a comprehensive overview
            </p>
            <p className="text-gray-400 text-sm">
              of important aspects of web analytics
            </p>
          </div>
        </div>
      </div>

      {/* last part is here */}

      <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 md:px-12 space-y-4 md:space-y-0 ">
        <div className="flex items-baseline space-x-2">
          <span className="text-lg md:text-xl">Up to</span>
          <span className="text-black text-6xl md:text-8xl font-bold">45%</span>
        </div>
        <div className="md:ml-4 text-center md:text-left">
          <p className="text-gray-700 text-base md:text-xs leading-relaxed">
            Increase your analytics efficiency by up to 45%. Unique <br />{' '}
            algorithms provide insights from data, reduce time for analysis{' '}
            <br /> and save time for making important, informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
