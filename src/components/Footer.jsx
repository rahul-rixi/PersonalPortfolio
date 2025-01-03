import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container bg-black py-4">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center text-white">
          <p className="text-lg font-medium mb-4">Made with ❤️ by <span className="text-blue-500">Rahul</span> </p>
          <div className="flex justify-center space-x-6 mb-4">
            
            <a href="https://github.com/rahul-rixi" className="text-white hover:text-blue-500">
              <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/rahulchouhan.js/" className="text-white hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rahulkumar-chouhan/" className="text-white hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
           
          </div>
          <p className="text-sm">&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
