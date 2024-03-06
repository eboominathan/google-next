import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'; 

export default function HomeHeader() {
  return (
   <header className='flex justify-end p-5 text-sm'>
    <div className="flex space-x-4 items-center">        
        <Link href={"https://mail.google.com"} className='hover:underline'>Gmail</Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2' />        
        <Link href={"https://image.google.com"} className='hover:underline'>Images</Link>
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md transition-shadow'>Signin</button>
    </div>
   </header>
  )
}
