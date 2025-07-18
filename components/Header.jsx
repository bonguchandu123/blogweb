import { assets } from '@/public/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {

    const [email,setEmail] =useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email",email);
        const res = await axios.post("/api/email",formData)

        if(res.data.success){
            console.log(res.data.msg)
        }
        else{
            console.error(error)
        }

        
    }




  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className="flex justify-between items-center">
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            <button className='flex gap-2 px-5 py-5 border-2 w-["50px"] sm:px-6  h-10 items-center border-orange-800 shadow-[-7px_7px_0px_orange]'>Get started <Image src={assets.arrow} alt=''/></button>
        </div>
        <div className="text-centre my-8">
            <h1 className="text-3xl text-center sm:text-5xl font-medium">
                Latest Blog
            </h1>
            <p className="text-center mt-12 text-sm max-w-[740px] m-auto">Lorem ipsum is simply dummy text for the print</p>
            <form className="flex border-2 justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border-black shadow-[-7px_7px_0px_black]">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none' />
                <button type='submit' className='border-l border-black p-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>

            </form>
        </div>
      
    </div>
  )
}

export default Header
