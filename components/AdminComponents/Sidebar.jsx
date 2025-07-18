import { assets } from '@/public/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      
        <div className='sm:pl-14 py-3 border border-black'>
            <Image src={assets.logo} alt='' width={120} />
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black  '>
            <div className="w-[250px] absolute right-0 ">
            <Link href='/admin/addProduct' className="flex gap-1 items-center border border-black px-3 shadow-[-7px_7px_0px_black] ">
                <Image src={assets.add_icon} alt=''/><p>Add blogs</p>
            </Link>
            <Link href='/admin/blogList' className="mt-5 gap-1 flex items-center border border-black px-3 shadow-[-7px_7px_0px_black] ">
                <Image src={assets.blog_icon} alt=''/><p>Blog List</p>
            </Link>
            <Link href='/admin/subscription'  className="mt-5  gap-1 flex items-center border border-black px-3 shadow-[-7px_7px_0px_black] ">
                <Image src={assets.email_icon} alt=''/><p>subscriptions</p>
            </Link>


            </div>
          
        </div>
      
    </div>
  )
}

export default Sidebar
