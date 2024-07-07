"use client";

import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow fixed w-full z-50">
      <nav className="container mx-auto px-9 py-6 flex items-center justify-between">
        <div className="text-2xl font-semibold"><a href="#" className="text-cyan-800">Hously</a></div>
        <div className="hidden md:flex space-x-4 font-semibold">
          <div className="relative group">
            <a href="#" className="text-gray-800 hover:text-cyan-500">Home</a>
            <div className="absolute hidden group-hover:block rounded shadow-lg mt-2 w-48 bg-white">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Section 1</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Section 2</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Section 3</a>
            </div>
          </div>
          <a href="#" className="text-gray-800 hover:text-cyan-500">Buy</a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">Sell</a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">Listing</a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">Pages</a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">Contact</a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">Signup</a>
        </div>
        <div className="md:hidden flex items-center">
          <button id="nav-toggle" className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="nav-menu" className={`md:hidden ${menuOpen ? 'block' : 'hidden'} font-semibold`}>
        <ul>
          <li className="relative group">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-cyan-100">Home</a>
            <div className="absolute hidden group-hover:block rounded shadow-lg mt-2 w-48 bg-white">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-cyan-100">Section 1</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-cyan-100">Section 2</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-cyan-100">Section 3</a>
            </div>
          </li>
          <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-cyan-500">Buy</a></li>
          <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-cyan-500">Sell</a></li>
          <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-cyan-500">Listing</a></li>
          <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-cyan-500">Pages</a></li>
          <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-cyan-500">Contact</a></li>
          <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-cyan-500">Signup</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
