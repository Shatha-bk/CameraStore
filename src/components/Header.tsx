import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full bg-white md:sticky md:top-0 z-50">
    {/* Navbar */}
    <div className="flex items-center">

      {/* Logo */}
      <img src={logo} alt="Logo" className="object-scale-down h-24 w-24" />

      {/* Menu bar */}
      <div className="flex items-center space-x-4 ">
    <a href="#" className="text-sm/6 font-semibold text-gray-900">Home</a>
    <a href="#" className="text-sm/6 font-semibold text-gray-900">Contact</a>
    <a href="#" className="text-sm/6 font-semibold text-gray-900">About</a>
    <a href="#" className="text-sm/6 font-semibold text-gray-900">Sign Up</a>
    </div>

      {/* Search bar */}
      <div className="relative max-w-sm mx-auto">
        <input className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="search" placeholder="Search" />
        <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
          </svg>
        </button>
        </div>   


    </div>
  </div> 

  );
};

export default Header;
