'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Hero({}: Props) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex overflow-x-hidden h-fit mx-20 shadow-black max-lg:mx-2 rounded-[2pc] items-center justify-center p-8 bg-gradient-to-r from-gray-400 to-black"
    >
      <div className="max-w-xl text-white mr-16 max-lg:w-full max-lg:mr-0">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl font-bold mb-4"
        >
          Keep Your City Clean with MyCleanApp
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-6"
        >
          MyCleanApp is your go-to solution for efficient garbage collection. We make sure your neighborhood stays clean and green with reliable sanitation services.
        </motion.p>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex space-x-4 mb-4"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0A8791] font-semibold text-white px-4 py-2 rounded-[1pc]"
          >
            Get the App
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white border border-white px-4 py-2 rounded-md"
          >
            More
          </motion.button>
        </motion.div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex p-5 space-x-10"
        >
          <div className="flex flex-col items-center">
            <motion.p 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-3xl font-bold"
            >
              4.8
            </motion.p>
            <motion.p 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm font-semibold"
            >
              Rating on AppStore
            </motion.p>
          </div>
          <div className="flex flex-col items-center">
            <motion.p 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-3xl font-bold"
            >
              700k+
            </motion.p>
            <motion.p 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-sm font-semibold"
            >
              Active users
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:block"
      >
        <img src="/g1.png" alt="App preview" className="max-w-xs"/>
      </motion.div>
    </motion.section>
  )
}

export default Hero
