import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

type Props = {};

export function DropdownMenuIcon({}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer text-[#0A8791] text-2xl hover:text-[#06484d] transition-colors duration-300" />
      </SheetTrigger>
      <SheetContent side={'top'} className="bg-white text-[#0A8791] shadow-lg rounded-lg p-6 z-[999999] w-full">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold mb-4 border-b-2 border-[#0A8791] pb-2">
          <img src='/a1.png' alt="" width={50} height={50}/>
            </SheetTitle>
        </SheetHeader>
        <div className="space-y-4 font-semibold">
          <div className="text-lg">
            <Link href="/" className="hover:text-[#06484d] transition-colors duration-300">
              Home
            </Link>
          </div>
          <div className="text-lg">
            <Link href="/aboutUs" className="hover:text-[#06484d] transition-colors duration-300">
              About Us
            </Link>
          </div>
          <div className="text-lg">
            <Link href="#services" className="hover:text-[#06484d] transition-colors duration-300">
              Services
            </Link>
          </div>
          <div className="text-lg">
            <Link href="#ContactUs" className="hover:text-[#06484d] transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default DropdownMenuIcon;
