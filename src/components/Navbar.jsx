import  { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto h-20 px-8 py-2 flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <img src="./logo.jpg" className="w-20 h-auto rounded-lg" alt="Logo" />
        </div>

        {/* Desktop Menu (Visible on Large Screens) */}
        <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-green-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-500">About</Link></li>
          <li><Link to="/services" className="hover:text-green-500">Services</Link></li>
          <li><Link to="/blog" className="hover:text-green-500">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
        </ul>

        {/* Sign In / Sign Up Button (Visible on Large Screens) */}
        <div className="hidden lg:flex">
          <Link to="/auth">
            <button className="bg-green-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-green-600 transition">
              <i className="ri-login-box-line mr-2"></i> Sign In / Sign Up
            </button>
          </Link>
        </div>

        {/* Sidebar Button (Medium & Small Screens) */}
        <div className="lg:hidden ">
          <button onClick={() => setMenuOpen(true)}>
            <i className="ri-menu-line text-3xl cursor-pointer"></i> {/* Menu icon */}
          </button>
        </div>
      </div>

      {/* Full-Screen Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)} // Clicking outside closes sidebar
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-gray-300 shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-y-full"
        } transition-transform ease-in duration-400`}
      >
        <div className="p-6 ">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 cursor-pointer">
            <i className="ri-close-line text-3xl"></i>
          </button>

          {/* Sidebar Links */}
          <ul className="flex flex-col gap-6 text-lg font-medium mt-8">
            <li><Link to="/" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/blog" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li>
              <Link to="/auth">
                <button className="bg-green-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-green-600 transition w-full cursor-pointer" onClick={() => setMenuOpen(false)}>
                  <i className="ri-login-box-line mr-2"></i> Sign In / Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



