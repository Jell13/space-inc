'use client'

import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

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
    <div className='h-full w-full px-44 flex items-center justify-between'>
      <h1 className='text-3xl font-bold'>
        Space.Inc
      </h1>
      <nav className='flex gap-5 items-center bg-white px-2 py-2'>
        {links.map(link => (
            <div key={link.id} className={`${router === link.link ? 'text-white bg-black px-1 py-1' : 'text-black'}`}>
                <Link href={link.link}>{link.name}</Link>
            </div>
        ))}
      </nav>
    </div>
  )
}

export default Navbar

