
import { assets, blog_data } from '@/public/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BLogIem = ({title,description,image,category,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black shadow-[-7px_7px_0px_black] '>
      <Link href={`/blogs/${id}`}> <Image src={image} alt='' width={400} height={400} className=''/></Link>
       
        <p className="inline-block ml-5 mt-5 px-1 bg-black text-white text-sm  ">{category}</p>
        <div className="p-5">
          <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
          <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
          <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">
            Read More <Image src={assets.arrow} alt='' width={12}  />
          </Link>
        </div>
        

      
    </div>
  )
}

export default BLogIem
