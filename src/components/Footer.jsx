import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">GET IN TOUCH</h3>
            <p className="text-xl mb-1">samarthvashishta@gmail.com</p>
            <p>Delhi, IN</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">LET'S CONNECT</h3>
            <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/samarthvashishta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/samarthvashishta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com/samarthvashishta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://medium.com/@samarthvashishta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaMedium size={24} />
          </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p>Made with love | Samarth Vashishta</p>
          <p>Copyrights © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;