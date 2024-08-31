import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DropdownMenuIcon from './DropdownMenu'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='w-full items-center bg-white overflow-x-hidden sticky top-0 left-0 right-0 z-[999]  p-3'>
        <div className='max-lg:hidden justify-between items-center flex max-w-6xl mx-auto'>
            <div>
            <Image width={60} height={60} src='/g1.png' alt=''/>
            </div>
            <div className='flex font-semibold text-[#0A8791] space-x-3'>
                <Link href='/'>Home</Link>
                <Link href='Pricing'>About Us</Link>
                <Link href='Testimonials'>Testimonials</Link>
            </div>
            <div>
                <Link href='#ContactUs' className='border text-white font-semibold border-[#0A8791] bg-[#0A8791] p-2 rounded-[2pc]'>
                Get in touch
                </Link>
            </div>
        </div>
        <div className='lg:hidden justify-between items-center flex w-full'>
            <div>
            <Image width={40} height={40} src='/g1.png' alt=''/>
            </div>
            <div>
                <DropdownMenuIcon/>
            </div>

        </div>
    </div>
  )
}

export default Navbar