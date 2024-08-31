import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'



type Props = {}

export default function DropdownMenuIcon({}: Props) {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
    <DropdownMenuContent className='bg-white'>
      <DropdownMenuItem>Home</DropdownMenuItem>
      <DropdownMenuItem>About Us</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
