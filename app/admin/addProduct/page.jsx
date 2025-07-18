'use client'

import { assets } from '@/public/Assets/assets'
import axios from 'axios'

import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const [image,setImage] = useState(false)
    const [data,setData] = useState({
      title:"",
      description:"",
      category:"Startup",
      author:"Alex Bennett",
      authorImg:""
    })

    const onChangeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setData(data => ({...data,[name]:value}))
      console.log(data)




    }

    const onSubmitHandler =async(e) => {
     
      e.preventDefault();
      const formData = new FormData();
      formData.append('title',data.title)
      formData.append('description',data.description)
      formData.append('category',data.category)
      formData.append('author',data.author)
      formData.append('authorImg',data.authorImg)
      formData.append('image',image)

      const res = await axios.post('/api/blog',formData);
      if(res.data.success){
        console.log(succes)
        setData({
          title:"",
      description:"",
      category:"Startup",
      author:"Alex Bennett",
      authorImg:""
        })

      }else{
        console.log("not added")
      }

      


    }
  return (
    <>
    <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload Thumnail</p>
        <label htmlFor='img'>
            <Image className="mt-4" src={!image? assets.upload_area:URL.createObjectURL(image)} alt='' width={140} height={140}/>
        </label>
        <input onChange={(e) =>setImage(e.target.files[0]) } type='file' id='img' hidden required/>
        <p className='text-xl mt-4'>Blog title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='Type here' required/>
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='write content here' rows='5' required/>
        <p className='text-xl mt-4'> Blog category</p>
       
        <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Statup">Statup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
        
    </form> 
      
    </>
  )
}

export default page
