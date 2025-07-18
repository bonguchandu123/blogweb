import { assets } from '@/public/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black items-center'>
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className='text-sm text-white '> All right reversed. Copyright @blogger</p>
        <div className="flex">
            <Image src={assets.facebook_icon} alt='' width={40}></Image>
            <Image src={assets.twitter_icon} alt='' width={40}></Image>
            <Image src={assets.googleplus_icon} alt='' width={40}></Image>
        </div>
      
    </div>
  )
}

export default Footer
