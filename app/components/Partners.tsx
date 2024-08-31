'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PartnerProps {
  logoSrc: string;
  altText: string;
}

const partners: PartnerProps[] = [
  { logoSrc: '/buzstop.JPG', altText: 'Partner 1' },
  { logoSrc: '/fishpond.jpg', altText: 'Partner 2' },
  { logoSrc: '/maasim.JPG', altText: 'Partner 3' },
  { logoSrc: '/oko.JPG', altText: 'Partner 4' },
];

const OurPartners: React.FC = () => {
  return (
    <div className="py-8 px-4 overflow-x-hidden w-full">
      <h2 className="text-3xl font-extrabold text-[#0A8791] text-center mb-6">Our Partners</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center hover:cursor-pointer p-4 bg-white shadow-md rounded-lg"
            whileHover={{
              scale: 1.1,
              rotateY: 10,
              rotateX: 10,
              rotateZ: 5,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.95,
              rotateZ: -10,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <Image
              src={partner.logoSrc}
              alt={partner.altText}
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
