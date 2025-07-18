'use client';

import Footer from '@/components/Footer';
import { assets } from '@/public/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const Page = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await axios.get('/api/blog', {
          params: {
            id: params.id,
          },
        });
        setData(res.data.blog);
      } catch (err) {
        console.error('Failed to load blog data', err);
      }
    };

    if (params.id) {
      fetchBlogData();
    }
  }, [params.id]);

  if (!data) return null;

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={assets.logo} alt="Logo" />
          </Link>
          <button className="flex items-center gap-4 border font-medium border-black px-3 py-1 sm:py-3 sm:px-3 shadow-[-7px_7px_0px_black]">
            Get started <Image src={assets.arrow} alt="Arrow" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt={data.author}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1200}
          height={720}
          alt={data.title}
        />
        <h1 className="mt-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>

        {['Step 1', 'Step 2', 'Step 3', 'Step 4'].map((step, i) => (
          <div key={i}>
            <h3 className="my-5 text-[18px] font-semibold">{step}: Welcome to our blog page!</h3>
            <p>
              Explore our latest articles and stories. Discover ideas, tips, and perspectives that
              inspire.
            </p>
          </div>
        ))}

        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p>
          Thank you for reading. Stay connected with us for more stories, updates, and insights.
        </p>

        <div className="my-24">
          <p className="text-black font font-semibold my-4">Share this article on social media</p>
          <div className="flex gap-4">
            <Image src={assets.facebook_icon} alt="Facebook" />
            <Image src={assets.twitter_icon} alt="Twitter" />
            <Image src={assets.googleplus_icon} alt="Google Plus" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
