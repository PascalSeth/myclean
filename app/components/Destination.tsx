'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface DestinationProps {
  title: string;
  description: string;
  imgSrc: string;
}

const destinations: DestinationProps[] = [
  {
    title: 'Residential Waste',
    description: 'Manage household garbage effectively with scheduled pickups and proper waste segregation.',
    imgSrc: 'https://zoomlionghana.com/wp-content/uploads/2023/08/Zoomlion_cleaning.jpg',
  },
  {
    title: 'Commercial Waste',
    description: 'Handle waste from commercial establishments with our efficient and scalable solutions.',
    imgSrc: 'https://starrfm.com.gh/wp-content/uploads/2023/05/5-696x522.jpg',
  },
  {
    title: 'Recycling',
    description: 'Promote recycling by sorting waste materials into recyclable and non-recyclable bins.',
    imgSrc: 'https://i.pinimg.com/originals/74/b7/3e/74b73e3cac06cfa5e08735dd6053a173.jpg',
  },
];

const Destination: React.FC<DestinationProps> = ({ title, description, imgSrc }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white shadow-lg rounded-[2pc] p-4"
    >
      <div className="relative">
        <motion.img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-48 object-cover rounded-[1pc]" 
          whileHover={{ scale: 1.1 }}
        />
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="absolute top-2 left-2 bg-black text-white text-xs py-1 px-2 rounded"
        >
          Try it now
        </motion.button>
      </div>
      <h3 className="text-xl text-[#0A8791] font-bold mt-4">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </motion.div>
  );
}

const Destinations: React.FC = () => {
  return (
    <section id='services' className="max-w-6xl mx-auto p-8 h-fit overflow-x-hidden">
      <motion.h2 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl text-[#0A8791] font-bold mb-4"
      >
        Garbage Collection Services
      </motion.h2>
      <motion.p 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg mb-8"
      >
        Explore the various services we offer to keep your environment clean and green.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <Destination
            key={index}
            title={dest.title}
            description={dest.description}
            imgSrc={dest.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
