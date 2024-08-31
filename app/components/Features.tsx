'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Define the features with corresponding images
const features = [
  {
    title: 'Effortless Scheduling',
    description: 'Easily schedule waste pickups at your convenience. No more missed collections or inconvenient appointment times.',
    image: '/mycleanmain.png',
  },
  {
    title: 'Real-Time Tracking',
    description: 'Track the status of your pickups in real-time. Stay updated on arrival times and service progress.',
    image: '/mycleanhome.png',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Navigate through the app effortlessly with our clean and simple design. Access all features with just a few taps.',
    image: '/mycleanaccount.png',
  },
  {
    title: 'Secure Payments',
    description: 'Make secure payments directly within the app with our integrated payment system.',
    image: '/payment.png',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-12 px-6 overflow-x-hidden bg-gradient-to-r from-gray-900  via-gray-400 to-gray-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[white] mb-8 text-center">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-white shadow-md rounded-[2pc] overflow-hidden"
              initial={{ opacity: 0, y: 50 }}  // Start off transparent and moved down
              animate={{ opacity: 1, y: 0 }}  // Animate to fully visible and its original position
              transition={{ duration: 0.5, delay: index * 0.2 }}  // Stagger animation for each item
            >
              {/* Text Column */}
              <div className="p-6 flex flex-col justify-center items-start w-full md:w-1/2">
                <h3 className="text-xl font-semibold text-[#0A8791] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
