'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#64ced6] to-gray-600 static bottom-0 left-0 right-0 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
            </li>
            <li>
              <a href="/aboutUs" className="hover:text-gray-300 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#ContactUs" className="hover:text-gray-300 transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-4">Subscribe to our newsletter to get the latest news and offers.</p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <motion.button
              type="submit"
              className="bg-white text-[#0A8791] font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              className="bg-white text-[#0A8791] p-3 rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              className="bg-white text-[#0A8791] p-3 rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="bg-white text-[#0A8791] p-3 rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="#"
              className="bg-white text-[#0A8791] p-3 rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} MyClean. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
