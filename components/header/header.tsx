import React from 'react'
import Menu from '@/components/header/menu'
import Search from '@/components/header/search'
import Link from 'next/link'
import data from '@/lib/data'
import { APP_NAME } from '@/lib/constants'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-zinc-800 text-white">
        <div className="px-2 my-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className='flex items-center font-extrabold text-2xl header-button'> 
                      {APP_NAME}
                    </Link>
                </div>
                <div className='hidden md:block flex-1 max-w-xl'>
                  <Search />
                </div>
                <Menu />
              </div>
              <div className='md:hidden block py-2'>
                <Search />
              </div>
            </div>
            <div className='flex items-center px-3 mb-[1px]  bg-gray-800'>
              <Button variant='ghost' className='header-button flex items-center gap-1 text-base [&_svg]:size-6'>
                <MenuIcon />
                All 
              </Button>
              <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
                {data.headerMenus.map((menu) => (
                  <Link
                       href={menu.href}
                       key={menu.href}
                       className='header-button !p-2 '
                  >
                    {menu.name}
                 </Link>
               ))}
              </div>
             </div>
    </header>
  )
}