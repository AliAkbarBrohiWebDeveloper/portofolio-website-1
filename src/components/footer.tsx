

import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 mt-9">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="flex items-center justify-center md:justify-start gap-2"><FaEnvelope /> aliakberbrohi455@gmil.com</p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2"><FaPhoneAlt /> +92 300 3442291</p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2"><FaMapMarkerAlt /> Karachi, Sindh,Pakistan</p>
        </div>

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">About This Site</h2>
          <p className="text-sm">This is my personal portfolio website built with React and Tailwind CSS. Showcasing my skills, projects, and contact information.</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-5 text-3xl">
            <a href="https://www.linkedin.com/in/ali-akbar-brohi-510971300/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; 2024 Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


