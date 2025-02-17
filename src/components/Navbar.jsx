import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-evenly h-20 bg-white shadow-md">
      {/* Logo */}
      <div>
        <img src="./logo.png" className="w-20 h-auto" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex items-center gap-6 cursor-pointer">
          <li><Link to="/" className="hover:bg-gray-300 px-2 py-1 rounded-lg">Home</Link></li>
          <li><Link to="/about" className="hover:bg-gray-300 px-2 py-1 rounded-lg">About</Link></li>
          <li><Link to="/services" className="hover:bg-gray-300 px-2 py-1 rounded-lg">Services</Link></li>
          <li><Link to="/blog" className="hover:bg-gray-300 px-2 py-1 rounded-lg">Blog</Link></li>
          <li><Link to="/contact" className="hover:bg-gray-300 px-2 py-1 rounded-lg">Contact</Link></li>
        </ul>
      </div>

      {/* Sign In / Sign Up Button */}
      <div>
        <Link to="/auth">
          <button className="bg-green-500 h-10 w-40 px-2 rounded-sm cursor-pointer text-white flex items-center justify-center">
            <i className="ri-login-box-line mr-2"></i> Sign In / Sign Up
          </button>
        </Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;


   
