import React from 'react'
import { AboutCardData } from './AboutCardData'
import Image from 'next/image'

const AboutCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
        {
            AboutCardData.map((item,index)=>(
                <div className='w-[256px] h-[335px] bg-white rounded-[30px] py-[50px]  flex flex-col items-center justify-center' key={index}>
                    <div className='w-[95px] h-[95px] flex items-center justify-center bg-[#F9F8F8] rounded-2xl'>
                    <div className='w-[46px] h-[46px] relative'>
                        <Image src={item.img} fill alt="abouticon"/>
                    </div>

                    </div>
                    <h6 className='pt-[15px] text-center '>{item.title}</h6>
                    <p className='pt-[12px] text-center px-[35px]'>{item.subtitle}</p>
                   


                </div>

            ))
        }


    </div>
  )
}

export default AboutCard