function GetStartedComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      {/* Logo */}
      <div
        className="bg-[#F25922] rounded-3xl w-20 h-20 flex items-center justify-center shadow-[0_5px_60px_-15px_rgba(242,89,34,0.9)] "
        style={{
          boxShadow: '0px 20px 15px  rgba(242, 89, 34, 0.4)',
        }}
        data-aos="zoom-out"
      >
        {/* Replace with your SVG logo */}
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-8xl" data-aos="fade-up">
        Get Started
      </h1>

      {/* Subheading */}
      <p className="text-gray-400 text-center max-w-sm">
        Turn information into advantage! Start using <br></br> Ramos today. Sign
        up for a free trial.
      </p>

      {/* Buttons */}
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
  );
}

export default GetStartedComponent;
