import { FaLink } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black text-white px-2 m-2 rounded-2xl flex justify-between items-center">
      <div className="flex items-center ml-2">
        <FaLink className="h-4 w-4 mr-2" />
        <span className="font-semibold text-lg">ramos</span>
      </div>

      <nav className="space-x-4 bg-[#252525]  rounded-xl p-2 m-2">
        <a href="#" className="hover:underline mx-4">
          Dashboard
        </a>
        <a href="#" className="hover:underline mx-4">
          Report
        </a>
        <a href="#" className="hover:underline mx-4">
          Documents
        </a>
        <a href="#" className="hover:underline mx-4">
          History
        </a>
        <a href="#" className="hover:underline mx-4">
          Settings
        </a>
      </nav>

      <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200">
        Sign Up
      </button>
    </header>
  );
};

export default Header;
