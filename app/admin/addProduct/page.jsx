'use client';

import { assets } from '@/public/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Alex Bennett',
    authorImg: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('author', data.author);
      formData.append('authorImg', data.authorImg);
      formData.append('image', image);

      const res = await axios.post('/api/blog', formData);

      if (res.data.success) {
        console.log('Success: Blog added!');
        setData({
          title: '',
          description: '',
          category: 'Startup',
          author: 'Alex Bennett',
          authorImg: ''
        });
        setImage(null);
      } else {
        console.error('Failed to add blog');
      }
    } catch (err) {
      console.error('Error uploading blog:', err);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="img">
        <Image
          className="mt-4 object-cover"
          src={
            image
              ? URL.createObjectURL(image)
              : assets.upload_area
          }
          alt="Upload preview"
          width={140}
          height={140}
        />
      </label>
      <input
        type="file"
        id="img"
        hidden
        required
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        value={data.title}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Type here"
        required
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        value={data.description}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        placeholder="Write content here"
        rows={5}
        required
      />

      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        value={data.category}
        onChange={onChangeHandler}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <p className="text-xl mt-4">Author Image URL (optional)</p>
      <input
        name="authorImg"
        value={data.authorImg}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Paste image URL (optional)"
      />

      <br />
      <button
        type="submit"
        className="mt-8 w-40 h-12 bg-black text-white hover:bg-gray-900"
      >
        ADD
      </button>
    </form>
  );
};

export default Page;
