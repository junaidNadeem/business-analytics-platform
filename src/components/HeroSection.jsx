import { IoFlashSharp } from 'react-icons/io5';
import { FaPlay } from 'react-icons/fa';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { LuBarChart2 } from 'react-icons/lu';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  p-8 space-y-8 md:space-y-0 w-[90%] mx-auto">
      {/* Text and Icons Section */}
      <div className="flex flex-col space-y-8">
        <div className="flex items-center  mt-24 animate-fadeInUp">
          <div className="relative ml-16">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 scale-up-center">
              <IoFlashSharp className="text-2xl text-[#ff4a24] rotate-90-cw" />
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ff4a24] absolute top-0 left-10 scale-up-center">
              <IoAnalyticsSharp className="text-2xl text-white transition-transform rotate-90-cw" />
            </div>
          </div>
          <h1 className="ml-16 text-7xl  text-black">Analytics</h1>
        </div>
        {/* Middle Text Section */}
        <div className="text-7xl mb-4 animate-fadeInUp">
          <span className="text-black">that </span>
          <span className="text-gray-400">helps </span>
          <span className="text-black">you </span>
        </div>
        {/* Bottom Text Section */}
        <div className="text-7xl flex items-center animate-fadeInUp">
          <span className="text-black ml-40">shape </span>
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400 mx-2 scale-up-center">
            <LuBarChart2 className="text-black text-4xl font-extrabold animate-fadeInUp" />
          </div>
          <span className="text-black">the future</span>
        </div>
      </div>
      {/* Image and Play Button Section */}

      <div className="absolute md:static right-0 bottom-0 md:bottom-auto transform md:translate-x-0 md:translate-y-0 -ml-8 md:-ml-64">
        <div className="relative z-10">
          {' '}
          <div className="absolute -top-5 -left-5 z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#ff4a24] scale-up-center">
            <FaPlay className="text-white text-sm " />
          </div>
          <img
            src="./images/hero-img4.jpeg"
            alt="Analytics Illustration"
            className="w-64 h-40 rounded-2xl shadow-lg scale-up-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
