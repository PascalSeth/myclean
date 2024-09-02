'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsAndroid, BsApple } from 'react-icons/bs';

type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <section className="flex overflow-x-hidden h-fit mx-20 shadow-black max-lg:mx-2 rounded-[2pc] items-center justify-center p-8 bg-gradient-to-r from-gray-400 to-black">
      <div className="max-w-xl text-white mr-16 max-lg:w-full max-lg:mr-0">
        <h1 className="text-4xl font-bold mb-4">Keep Your City Clean with MyCleanApp</h1>
        <p className="text-lg mb-6">
          MyCleanApp is your go-to solution for efficient garbage collection. We make sure your neighborhood stays clean and green with reliable sanitation services.
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.example.mycleanapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#0A8791] font-semibold text-white px-6 py-3 rounded-[1pc] shadow-md hover:bg-[#065e62] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get for Android <BsAndroid className='ml-2'/>
          </motion.a>
          <motion.a
            href="https://apps.apple.com/us/app/mycleanapp/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#333333] font-semibold text-white px-6 py-3 rounded-[1pc] shadow-md hover:bg-[#1a1a1a] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get for iOS <BsApple className='ml-2 items-center'/>
          </motion.a>
        </div>
        <div className="flex p-5 space-x-10">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">4.8</p>
            <p className="text-sm font-semibold">Rating on AppStore</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">700k+</p>
            <p className="text-sm font-semibold">Active users</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex hover:scale-105 items-center relative">
        <div className="relative">
          <Image
            src="/mycleanhome.png"
            alt="App preview"
            className="relative z-10 max-w-xs"
            width={200}
            height={200}
          />
        </div>
       
        <div className="absolute -top-7 right-[-30%] z-0">
          <Image
            src="/mycleanaccount.png"
            alt="App preview"
            className="max-w-xs"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
