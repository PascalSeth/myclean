'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const ContactUs: React.FC<Props> = () => {
  return (
    <section id='ContactUs' className="bg-gradient-to-r w-full h-full overflow-x-hidden from-[#0A8791] to-[#06484d] text-white py-5 px-4">
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
        className="flex justify-end mb-4 mx-4"
      >
        <Image height={60} width={60} src='/g1.png' alt='Company Logo' />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Contact Form */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-white text-gray-900 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows={5}
                placeholder="Your Message"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="submit"
              className="w-full bg-[#0A8791] text-white p-3 rounded-lg shadow-lg hover:bg-[#0a889186] transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="flex flex-col justify-center space-y-6 text-white"
        >
          <div>
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="mt-4">
              Phone: <a href="tel:+233564567890" className="text-blue-200">+233 564567890</a>
            </p>
            <p>Email: <a href="mailto:contact@yourdomain.com" className="text-blue-200">contact@yourdomain.com</a></p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Address</h3>
            <p className="mt-4">
              667567 Avenue Somewhere, <br />
              Accra, Madina, <br />
              Ghana, 12345
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="#" 
                className="text-blue-200 hover:text-white"
              >
                {/* Social Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.523 0-10 4.478-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.99h-2.54v-2.727h2.54v-2.09c0-2.507 1.492-3.89 3.775-3.89 1.094 0 2.24.196 2.24.196v2.46h-1.26c-1.242 0-1.63.772-1.63 1.56v1.763h2.773l-.443 2.727h-2.33v6.99c4.781-.75 8.438-4.887 8.438-9.878 0-5.522-4.478-10-10-10z"/>
                </svg>
              </motion.a>
              {/* Repeat for other social icons */}
            </div>
          </div>
        </motion.div>
      </motion.div>  
    </section>
  );
};

export default ContactUs;
