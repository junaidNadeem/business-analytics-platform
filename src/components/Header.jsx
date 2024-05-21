import { FaLink } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <FaLink className="h-4 w-4 mr-2" />
        <span className="font-semibold text-lg">ramos</span>
      </div>

      <nav className="space-x-4 bg-gray-800 rounded-md p-2">
        <a href="#" className="hover:underline">
          Dashboard
        </a>
        <a href="#" className="hover:underline">
          Report
        </a>
        <a href="#" className="hover:underline">
          Documents
        </a>
        <a href="#" className="hover:underline">
          History
        </a>
        <a href="#" className="hover:underline">
          Settings
        </a>
      </nav>

      <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
        Sign Up
      </button>
    </header>
  );
};

export default Header;
