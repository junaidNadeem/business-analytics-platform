import { CiWavePulse1 } from 'react-icons/ci';

const EfficiencyComponent = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-white rounded-lg px-8 py-12 flex flex-col md:flex-col justify-between">
        <div className="text-left">
          <h1 className="text-5xl md:text-8xl leading-tight" data-aos="fade-up">
            Maximize{' '}
            <span
              className="text-gray-400 text-5xl md:text-8xl leading-tight"
              data-aos="fade-up"
            >
              efficiency
            </span>
          </h1>

          <h1 className="text-5xl md:text-8xl leading-tight" data-aos="fade-up">
            with our intuitive
          </h1>
        </div>

        <div className="flex items-center justify-center mt-4">
          {/* Overlapping Circles Component */}
          <div className="flex max-w-sm mr-auto relative">
            {/* Left Circle with Icon */}
            <div
              className="relative rounded-full w-24 h-24 bg-gray-200 flex items-center justify-center shadow-md z-10"
              data-aos="zoom-in"
            >
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <CiWavePulse1 className="text-white text-3xl font-bold" />
              </div>
            </div>
            {/* Right Circle with Text */}
            <div
              className="bg-yellow-400 rounded-full w-24 h-24 flex flex-col items-center text-black absolute top-0 left-20"
              data-aos="zoom-in"
            >
              <div className="pt-4">
                <span className="text-lg">+30%</span>
                <div className="text-center">
                  <p className="text-[8px]">Speed up your</p>
                  <p className="text-[8px]">productivity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Component */}
          <div
            className="bg-yellow-400 rounded-[2rem] text-5xl md:text-8xl"
            data-aos="zoom-out"
          >
            <p data-aos="slide-left">tic Serv</p>
          </div>
        </div>
      </div>
      {/* call to action */}
      {/* Text Section */}
      <hr className="border-t-[1px] border-gray-100 w-[90%] mt-12 mb-10 mx-auto" />

      <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:px-24 flex flex-col md:flex-row items-end justify-between">
        <div className="text-center md:text-left" data-aos="fade-up">
          <p className="text-base md:text-xs text-gray-500">
            Explore traffic sources, page behavior, conversions, and more to
            gain deep insight <br /> into your audience. With us, your business
            does not just adapt — it evolves.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex">
          <button
            className="bg-gray-200 border border-gray-200 rounded-lg text-xs py-1 px-4 hover:bg-gray-100"
            data-aos="zoom-in"
          >
            Request a demo
          </button>
          <button
            className="bg-[#F25922] text-white rounded-lg text-xs ml-1 py-1 px-4 hover:bg-[#d14a1a]"
            data-aos="zoom-in"
          >
            Start for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyComponent;
