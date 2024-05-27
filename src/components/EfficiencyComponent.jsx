import { CiWavePulse1 } from 'react-icons/ci';

const EfficiencyComponent = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto ">
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

        <div className="flex items-center justify-center mt-6">
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
            className="bg-yellow-400 w-96 py-3 rounded-[2.5rem] text-5xl md:text-8xl overflow-hidden"
            data-aos="zoom-out"
          >
            <p className="animate-text" data-aos="slide-left">
              analytics services
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-black-100 w-[90%] mt-12 mb-10 mx-auto" />

      <div className="bg-white py-8 px-8 flex flex-col md:flex-row items-end justify-between">
        <div className="text-center md:text-left" data-aos="fade-up">
          <p className="text-base md:text-sm text-gray-500">
            Explore traffic sources, page behavior, conversions, and more to
            gain deep insight <br /> into your audience. With us, your business
            does not just adapt — it evolves.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex space-x-4">
          <button
            className="bg-gray-300 border border-gray-300 rounded-xl py-2 px-6 hover:bg-gray-100"
            data-aos="zoom-in"
          >
            Request a demo
          </button>
          <button
            className="bg-[#F25922] text-white rounded-xl py-2 px-6 hover:bg-[#d14a1a]"
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
