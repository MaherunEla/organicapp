import React from 'react'

import Image from 'next/image'
import Subscribe from '../Components/Shared/Subsribe'
const page = () => {
  return (
   <>
   
   <div className='container flex items-center justify-center py-[73px]'>
    <div className='w-[856px] h-[351px] border rounded-lg border-white shadow-2xl flex flex-row items-center justify-center gap-4'>
        <div className='w-[200px] h-[280px] relative'>
            <Image 
            className='rounded-lg'
            src='/assets/images/Home/password.jpg' fill alt="password"/>
        </div>
        <div className='w-[569px]'>
            <p className='font-semibold mb-[26px]'>Password</p>
            <form action="/" className=''>
                <div>
                <input type="password" placeholder='Enter Your password' className='mb-[26px] w-full lg:w-[569px]   pl-6 py-[20px] border rounded-lg border-light_green text-[#ABABAB]' value=""/>
                </div>
                <button className='mb-6 px-[45px] py-[20px] border rounded-lg border-sea_green bg-sea_green text-white'>Send Now</button>
            </form>

        </div>


    </div>

   </div>
   <Subscribe/>
   </>
  )
}

export default page