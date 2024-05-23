import { IoAnalyticsSharp } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { IoLayers } from 'react-icons/io5';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { MdTrendingUp } from 'react-icons/md';
import { FaCircleArrowUp } from 'react-icons/fa6';
// import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'; // Assuming you're using Recharts for the line chart

const data = [
  { day: 'Sun', visits: 50 },
  { day: 'Mon', visits: 80 },
  { day: 'Tue', visits: 120 },
  { day: 'Wed', visits: 180 },
  { day: 'Thu', visits: 150 },
  { day: 'Fri', visits: 100 },
  { day: 'Sat', visits: 60 },
];

const AnalyticsComponent = () => {
  return (
    <>
      {/* // header part of the analyticCompo section starts here */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8">
        {/* Left Side Text */}
        <div className="text-left">
          <h1 className="text-4xl  text-black leading-tight">
            Your key to strategic <br />
            success through analytics
          </h1>
        </div>
        {/* Right Side Text */}
        <div className="text-right mt-4 md:mt-0">
          <p className=" text-gray-600">
            Ready for exciting, instantaneous, <br />
            all-accessible insights in real time?
          </p>
        </div>
      </div>
      {/* // header part of the analyticCompo section ends here */}
      <div className="flex flex-col md:flex-row p-6 space-y-8 md:space-y-0 md:space-x-3 bg-gray-100">
        {/* Left Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg w-full md:w-[60%] flex space-y-6">
          <div className="mx-auto p-6">
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
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                  {/* You might replace this with an icon component */}
                  <span className="text-white text-2xl font-semibold">B</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Total profit</p>
                  <p className="text-2xl font-bold">$264,2K</p>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg px-4 py-2 flex items-center">
                <p className="text-sm text-gray-500">Visitors</p>
                <p className="text-2xl font-bold ml-2">40K</p>
                {/* Add the green dot icon here */}
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
                  <IoLayers className="text-4xl" />
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
                  <div className="flex items-center justify-end absolute top-14 right-[-1px]">
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
    </>
  );
};

export default AnalyticsComponent;
