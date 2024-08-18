import React from 'react'
import { AlignRight } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {

    const router = usePathname()

    const links = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'About',
            link: '/about'
        },
        {
            id: 3,
            name: 'Exploration',
            link: '/exploration'
        }
    ]

  return (
    <Sheet className="text-white md:hidden">
        <SheetTrigger><AlignRight width={30} height={30} className='text-white'/></SheetTrigger>
        <SheetContent className='flex flex-col'>
            <nav className='flex flex-col justify-center items-center gap-8 mt-32'>
                {links.map(link => (
                    <SheetClose key={link.id} asChild>
                        <Link className='text-xl text-white' href={link.link}>{link.name}</Link>
                    </SheetClose>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
