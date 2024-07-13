// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto mt-4 mb-2 px-4 py-2 flex flex-wrap justify-between items-center">
        <a href="#home" className="text-2xl font-semibold">Samarth Vashishta</a>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://devfolio.co/@samarthv" className="block hover:text-gray-400 transition-colors duration-300">About Me</a>
          <a href="https://github.com/samarthvashishta" className="block hover:text-gray-400 transition-colors duration-300">Projects</a>
          <a href="https://www.linkedin.com/in/samarthvashishta/" className="block hover:text-gray-400 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
