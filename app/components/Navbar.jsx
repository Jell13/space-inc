'use client'

import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
    const router = usePathname()
    console.log(router)
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
    <div className='h-full w-full md:px-44 px-12 flex items-center justify-between'>
      <h1 className='md:text-4xl text-2xl font-bold text-white'>
        Space.Inc
      </h1>
      <nav className='md:flex hidden gap-5 items-center bg-white px-2 py-2'>
        {links.map(link => (
            <div key={link.id} className={`${router === link.link ? 'text-white bg-black px-1 py-1' : 'text-black'} hover:bg-black hover:text-white hover:px-1 hover:py-1 duration-300`}>
                <Link href={link.link}>{link.name}</Link>
            </div>
        ))}
      </nav>
      <div className='md:hidden'>
        <MobileNav/>
      </div> 
    </div>
  )
}

export default Navbar

