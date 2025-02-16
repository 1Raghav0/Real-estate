import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Contact Section */}
      <div className="bg-green-600 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h1 className="text-3xl md:text-4xl text-white font-semibold mb-4 md:mb-0">
            Do You Have <br className="hidden md:block" /> Any Questions?
          </h1>
          <button className="bg-white px-6 py-3 text-lg md:text-xl rounded-3xl hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
        <p className="text-white text-center md:text-left mt-3">
          We'll help you grow your career and achieve success.
        </p>
      </div>

      {/* Main Footer Section */}
      <div className="bg-blue-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2">
          {/* Left Section - Subscription */}
          <div className="flex flex-col gap-y-4">
            <img src="./logo.png" alt="Logo" className="w-32 h-auto" />
            <p className="text-2xl font-semibold">
              Do You Need Help With <br /> Anything?
            </p>
            <p className="text-lg text-gray-300">
              Receive updates, hot deals, and tutorials straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Email Address"
                className="py-2 px-4 bg-white w-full sm:w-1/2 rounded-lg placeholder:text-gray-500 focus:outline-none"
              />
              <button className="bg-green-500 py-2 px-6 rounded-lg text-white hover:bg-green-600 transition">
                Notify Me
              </button>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
            {/* Layouts */}
            <div className="flex flex-col gap-y-3">
              <h1 className="text-lg font-semibold text-white">LAYOUTS</h1>
              <span className="text-gray-400 hover:text-white cursor-pointer">Home Page</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">About Page</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Service Page</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Property Page</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Contact Page</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Single Blog</span>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-y-3">
              <h1 className="text-lg font-semibold text-white">ALL SECTIONS</h1>
              <span className="text-gray-400 hover:text-white cursor-pointer">Headers</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Features</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Testimonials</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Videos</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Footers</span>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-y-3">
              <h1 className="text-lg font-semibold text-white">COMPANY</h1>
              <span className="text-gray-400 hover:text-white cursor-pointer">About</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Blog</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Pricing</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Affiliate</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Login</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Changelog</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 mt-10" />

        {/* Footer Copyright */}
        <p className="mt-4 text-lg text-gray-400 text-center">
          © 2025 RentUP. Designed By Raghu.
        </p>
      </div>
    </div>
  );
};

export default Footer;
