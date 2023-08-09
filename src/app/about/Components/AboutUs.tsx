import Image from 'next/image'
import React from 'react'
import { AboutUsData } from './AboutCardData'

const AboutUs = () => {
  return (
    <div className='bg-sea_green'>
        <div className='container flex flex-col items-center justify-center py-[188px]'>
            <h4 className='yellow'>About Us</h4>
            <h2 className='text-white pb-[33px]'>What We Offer for You</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
               {
                AboutUsData.map((item,index)=>(
                    <div key={index}>
                     <div className='w-[334px] h-[314px] relative'>
                 <Image 
                 className='rounded-[30px]'
                 src={item.img} fill alt="aboutus"/>

             </div>
             <h6 className='text-white text-center pt-4 font-medium'>{item.title}</h6>

             </div>

                

                ))
                
                

               }
               </div>
               

                

                
                

            </div>

        </div>

   
  )
}

export default AboutUs