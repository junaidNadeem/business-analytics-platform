import { CiWavePulse1 } from 'react-icons/ci';
// import { FaRegChartBar } from 'react-icons/fa';

function InsightsComponent() {
  return (
    <div className="flex flex-col text-center space-y-2 md:text-left">
      <div className="text-left p-8">
        <h1 className="text-3xl md:text-8xl leading-tight">
          We give you full <br />
          <span className="text-gray-400 text-5xl md:text-8xl leading-tight">
            control{' '}
          </span>
          over your data
        </h1>
      </div>

      {/* 2 cards */}

      <div className="bg-white p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Card 1: Conversion Rate */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center relative bg-[url('../../public/images/grid.png')] bg-repeat">
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center bg-gray-100">
                <div className="bg-white rounded-3xl p-6 shadow-lg w-36">
                  <div className="relative flex items-center justify-center text-xs">
                    <p>Conversion rate</p>
                  </div>
                  <div className="bg-yellow-400 rounded-xl py-3 my-3 text-center">
                    <span className="text-4xl font-medium ">2,3</span>
                    <span className="text-2xl font-normal ">%</span>
                  </div>

                  <p className="text-center text-gray-500 text-xs">
                    Percentage of <br /> website visitors
                  </p>
                </div>
              </div>

              {/*  */}
              <div className="flex items-center justify-center bg-gray-100">
                <div className="bg-white rounded-2xl p-6 shadow-lg w-44">
                  <div className="text-xl font-normal mb-2">
                    <span className="text-sm font-light">$ </span>131,2K
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex-1 h-1 bg-green-400 rounded-full"></div>
                    <div className="flex-1 h-1 bg-yellow-400 rounded-full mx-1"></div>
                    <div className="flex-1 h-1 bg-purple-400 rounded-full"></div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <img
                        src="../../public/images/user.jpeg"
                        alt="User 1"
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <span className="text-gray-600 text-[10px]">
                        Min. price
                      </span>
                      <span className="ml-auto text-black text-[10px]">
                        1,200 $
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="../../public/images/user2.jpeg"
                        alt="User 2"
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <span className="text-gray-600 text-[10px]">
                        Max. price
                      </span>
                      <span className="ml-auto text-black text-[10px]">
                        2,320 $
                      </span>
                    </div>
                  </div>
                  <div className="flex border-t pt-4 text-gray-500 text-[10px]">
                    <p>Engagement rate</p>
                    <p className="ml-auto block text-black">47.84%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* final text here  */}
            <div className="mt-4">
              <p className="text-lg">Improved customer service</p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <p className="text-gray-400 text-sm">
                Analytics helps optimize service processes by{' '}
              </p>
              <p className="text-gray-400 text-sm">
                providing information on how to improve interactions{' '}
              </p>
              <p className="text-gray-400 text-sm">
                {' '}
                with customers and increase their satisfaction.{' '}
              </p>
            </div>
          </div>

          {/* Card 2: Finance Reports */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center bg-[url('../../public/images/grid.png')] bg-repeat">
            {/* card here */}
            <div className="rounded-2xl shadow-md bg-white w-[70%] h-[70%] py-6 px-8 flex items-center relative">
              <div className="flex flex-col justify-start items-start text-[10px] gap-2">
                <div className="flex items-center justify-center gap-1 mb-9">
                  <div className="relative rounded-full w-4 h-4 bg-gray-200 flex items-center justify-center shadow-md z-10">
                    <div className="w-2 h-2 bg-red-500 rounded-xl flex items-center justify-center">
                      <CiWavePulse1 className="text-white text-3xl font-bold" />
                    </div>
                  </div>
                  <p className="text-xs">Insights</p>
                </div>
                <div className="">
                  <p className="text-[10px] text-gray-500">Total profit</p>
                  <p className="text-2xl">
                    {' '}
                    <span className="text-lg">$</span>264,2K
                  </p>
                </div>
                <button className="bg-yellow-400 rounded-lg py-2 px-1 text-[8px]  shadow-md mb-8">
                  Data Visualization
                </button>
              </div>
              <div>
                <img
                  src="../../public/images/bargraph.png"
                  alt="bar graph"
                  className="w-64 h-40"
                />
              </div>
            </div>
            {/* card here */}
            <div className="mt-4">
              <p className="text-lg">Monitoring key indicators</p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <p className="text-gray-400 text-sm">
                Analytics platforms allow businesses to track{' '}
              </p>
              <p className="text-gray-400 text-sm">
                KPIs, an important tool for measuring success{' '}
              </p>
              <p className="text-gray-400 text-sm">and achieving goals. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsComponent;
