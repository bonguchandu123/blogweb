import React from 'react'

const Substableitem = ({email,mongoId,date}) => {
  const Delete = async (mongoId) => {
    await axios.delete('api/email',{params:{id:mongoId}})
    
  


  const emailDate = new Date(date)
  return (
    <tr className='bg-white border-b text-left'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:"No Email"}


        </th>
        <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
        <td className='px-6 py-4' onClick={() => Delete()}>x</td>
       
    </tr>
  )
}

export default Substableitem
