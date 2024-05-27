function FooterComponent() {
  return (
    <div className="bg-black text-white p-8 pt-16">
      {/* Top Navigation */}
      <div className="w-[90%] mx-auto">
        <div
          className="flex justify-between items-center mb-4"
          data-aos="fade-up"
        >
          <nav className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Why Us
            </a>
            <a href="#" className="hover:underline">
              Platform
            </a>
            <a href="#" className="hover:underline">
              Pricing
            </a>
            <a href="#" className="hover:underline">
              Contacts
            </a>
          </nav>
          <a href="mailto:hello@ramos.com" className="text-5xl">
            hello@ramos.com
          </a>
        </div>
        <hr className="border border-gray-600 mt-12 mb-10" />

        {/* Contact Info and Social Media Links */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-row items-start gap-8">
            <div data-aos="fade-up">
              <h2 className="">Raleigh</h2>
              <div className="text-gray-500">
                <p>125 N. Harrington StreetRaleigh,</p>
                <p>NC 27603919.833.6413</p>
              </div>
            </div>
            <div data-aos="fade-up">
              <h2 className=" ">Charlotte</h2>
              <div className="text-gray-500">
                <p>220 East Peterson DriveCharlotte,</p>
                <p>NC 28217704.333.7272</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-end space-y-2 gap-2"
            data-aos="fade-up"
          >
            <a href="#" className="flex items-center hover:underline ">
              Linkedin
            </a>
            <a href="#" className="flex items-center hover:underline">
              Instagram
            </a>
            <a href="#" className="flex items-center hover:underline">
              Facebook
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center">
          <img
            src="./images/ramos.png"
            alt="ramos image"
            className="rounded-md"
            data-aos="fade-up"
          />

          <div className="flex space-x-6">
            <a href="#" className="hover:underline text-gray-500">
              Privacy policy
            </a>
            <a href="#" className="hover:underline text-gray-500">
              License agreement
            </a>
          </div>

          <div
            className="ml-4 rounded-3xl p-2 flex items-center justify-center w-[10%] bg-white"
            data-aos="zoom-in"
          >
            <img
              src="./images/qrcode.png"
              alt="QR Code"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
