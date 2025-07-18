'use client'

import Blogtableitem from '@/components/AdminComponents/Blogtableitem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [blogs,setBlogs] = useState([])


  const fetchBlog = async () => {
    const res = await axios.get('/api/blog')
    setBlogs(res.data.blogs)
    
  }

  const deleteBlog = async(mongoId) => {
    const res = await axios.delete('/api/blog',{
      params:{
        id:mongoId
      }
    })
    fetchBlog()

  }







  useEffect(() => {

    fetchBlog();

  },[])
  return (
    <div className='flex-1 pt-5  px-5 sm:pl-16'>
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table  className='w-full  text-sm text-gray-500'>
          <thead className='text-xs text-bg-gray-700 text-left uppercase'>
            
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Author name
              </th>
              <th scope='col' className='  px-6 py-3'>
               Blog title
              </th>
              <th scope='col' className=' px-6 py-3'>
                Blog Date
              </th>
              <th scope='col' className=' px-6 py-3'>
               Action 
              </th>
            </tr>





          </thead>
          <tbody>
          {blogs.map((item,index) => {
              <Blogtableitem key={index} mongoId= {item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog ={deleteBlog}/>

            })}
            

            {/* <Blogtableitem/> */}


            
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default page
