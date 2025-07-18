'use client';

import Substableitem from '@/components/AdminComponents/Substableitem';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const res = await axios.get('/api/email');
      setEmails(res.data.emails);
    } catch (error) {
      console.error("Failed to fetch emails", error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className="text-xl font-bold mb-4">All Subscriptions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-500'>
            <tr>
              <th scope='col' className='px-6 py-3'>Email Subscription</th>
              <th scope='col' className='px-6 py-3 hidden sm:table-cell'>Date</th>
              <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, i) => (
              <Substableitem
                key={i}
                email={item.email}
                mongoId={item._id}
                date={item.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
