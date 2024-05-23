// import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

function FooterComponent() {
  return (
    <div className="bg-black text-white p-8 pt-16">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-4">
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
      <hr className="border-t-2 border-gray-700 mt-12 mb-10" />

      {/* Contact Info and Social Media Links */}

      {/* Office Addresses */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex flex-row items-start gap-8">
          <div>
            <h2 className="">Raleigh</h2>
            <div className="text-gray-500">
              <p>125 N. Harrington StreetRaleigh,</p>
              <p>NC 27603919.833.6413</p>
            </div>
          </div>
          <div>
            <h2 className=" ">Charlotte</h2>
            <div className="text-gray-500">
              <p>220 East Peterson DriveCharlotte,</p>
              <p>NC 28217704.333.7272</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2 gap-2">
          <a href="#" className="flex items-center hover:underline ">
            {/* <FaLinkedin className="mr-2" /> */}
            Linkedin
          </a>
          <a href="#" className="flex items-center hover:underline">
            {/* <FaInstagram className="mr-2" /> */}
            Instagram
          </a>
          <a href="#" className="flex items-center hover:underline">
            {/* <FaFacebook className="mr-2" /> */}
            Facebook
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center">
        <div className="text-8xl font-bold">
          Ramos <sup className="align-super text-4xl">®</sup>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline text-gray-500">
            Privacy policy
          </a>
          <a href="#" className="hover:underline text-gray-500">
            License agreement
          </a>
        </div>

        <div className="ml-4">
          <img
            src="https://via.placeholder.com/100"
            alt="QR Code"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
