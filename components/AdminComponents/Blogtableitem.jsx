import { assets } from '@/public/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Blogtableitem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {
    const BlogDate = new Date(date)
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image src={authorImg?authorImg:assets.profile_icon} alt=''/>
            <p>{author?author:"No author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no tittle"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td onChange={() => deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
           x
        </td>

    </tr>
  )
}

export default Blogtableitem
