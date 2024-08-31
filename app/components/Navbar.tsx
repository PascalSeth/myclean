'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import DropdownMenuIcon from './DropdownMenu'

type Props = {}

function Navbar({}: Props) {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, duration: 0.5 }}
      className='w-full items-center bg-white overflow-x-hidden sticky top-0 left-0 right-0 z-[999] p-3 shadow-md'
    >
        <div className='max-lg:hidden justify-between items-center flex max-w-6xl mx-auto'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Image width={60} height={60} src='/a1.png' alt='MyClean Logo' />
            </motion.div>
            <motion.div 
              className='flex font-semibold text-[#0A8791] space-x-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Link href='/'>Home</Link>
                <Link href='/aboutUs'>About Us</Link>
                <Link href='#services'>Services</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href='#ContactUs' className='border text-white font-semibold border-[#0A8791] bg-[#0A8791] py-2 px-4 rounded-full'>
                Get in touch
              </Link>
            </motion.div>
        </div>
        <div className='lg:hidden justify-between items-center flex w-full'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Image width={40} height={40} src='/g1.png' alt='MyClean Logo' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <DropdownMenuIcon />
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Navbar
