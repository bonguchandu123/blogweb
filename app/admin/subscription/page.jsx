'use client'

import Substableitem from '@/components/AdminComponents/Substableitem'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [emails,setEmails] = useState([]);


  const fetchEmails = async () => {
    const res = await axios.get("/api/email");
    setEmails(res.data.emails)
    
  }
  useEffect(() => {
    fetchEmails();

  },[])

  

  
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className="">All subcription</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-500'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Email Subscription 
              </th>
              <th scope='col' className='px-6 py-3 hidden sm:block'>
               date
                
              </th>
              <th scope='col' className='px-6 py-3'>
               action
              </th>

            </tr>
          </thead>
          <tbody>
            {emails.map((item,i) => {
               <Substableitem email={item.email} key={i} mongoId = {item._id} date={item.date}/>


            })}
            
           
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default page
