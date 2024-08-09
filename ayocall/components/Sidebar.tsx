'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <section className='bg-blue-600 sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className='flex flex-1 flex-col gap-6'>
            {
                sidebarLinks.map((item) => {
                    return (
                        <Link href={item.route} key={item.label} className='flex gap-4 items-center p-4 rounded-lg justify-start'>
                            <Image src={item.imgURL} alt={item.label} width={24} height={24} />
                            <p className='text-lg font-semibold max-lg:hidden text-black'>{item.label}</p>
                        </Link>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Sidebar