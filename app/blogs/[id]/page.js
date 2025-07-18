'use client'
import Footer from '@/components/Footer';
import { assets, blog_data } from '@/public/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const [data,setData]= useState(null);

    const fetchBlogdata = async() => {
        const res = await axios.get('/api/blog',{
          params:{
            id:params.id
          }
        })
        setData(res.data)

    }
    useEffect(() => {
        fetchBlogdata();
        for(let i=0;i<blog_data.length;i++){
            if(Number(params.id) == blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
               


            }
        }

    },[])
  return (data? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-centre">
        <Link href='/'>
        <Image src={assets.logo} alt='' className='' /></Link>
        <button className='flex items-center gap-4 border font-medium border-black px-3 py-1 sm:py-3 sm:px-3 border-spacing-2 shadow-[-7px_7px_0px_black] ' >
          Get starded <Image src={assets.arrow} alt=''/>


        </button>

        

      </div>
      <div className="text-center my-24">
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        {/* <Image src={data.author_Img}  className='mx-auto mt-6 border border-white rounded-full' width={60} height={60} alt=''/> */}
        <Image className='mx-auto mt-6 border border-white rounded-full ' src={data.author_img} weight={60} height={60} alt=''/>
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>

      
    </div>
    <div className='mx-5  max-w-[800px] md:mx-auto mt-[-100px] mb-10 '>
      <Image className='border-4 border-white' src={data.image} width={1200} height={720} alt=''/>
      <h1 className='mt-8 text-[26px] font-semibold'>Introduction</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 1:Welcome to our blog page!</h3>
      <p>Explore our latest articles and stories Explore our latest articles and stories</p>
     
      <h3 className='my-5 text-[18px] font-semibold'>Step 2:Welcome to our blog page!</h3>
      <p>Explore our latest articles and stories Explore our latest articles and stories</p>
     
      <h3 className='my-5 text-[18px] font-semibold'>Step 3:Welcome to our blog page!</h3>
      <p>Explore our latest articles and stories Explore our latest articles and stories</p>
     
      <h3 className='my-5 text-[18px] font-semibold'>Step 4:Welcome to our blog page!</h3>
      <p>Explore our latest articles and stories Explore our latest articles and stories</p>
     
      <h3 className='my-5 text-[18px] font-semibold'>Conclusion:</h3>
      <p>Explore our latest articles and stories Explore our latest articles and stories</p>
      <div className="my-24">
        <p className='text-black font font-semibold my-4'> SHare this article on scoail media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} alt=''/>
          <Image src={assets.twitter_icon} alt=''/>
          <Image src={assets.googleplus_icon} alt=''/>

        </div>
      </div>
     
     
    </div>
    <Footer/>
    </>:<></>
  )
}

export default page
