import React from 'react'
import { PortfolioProjectData } from './PortfolioProjectData'
import Image from 'next/image'

const PortfolioProject = () => {
  return (
    <div className="container flex items-center justify-center pt-[151px]">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          PortfolioProjectData.map((item,index)=>(
            <div key={index}>
              <div className='w-[451px] h-[421px] relative'>
              <Image 
                className='rounded-[30px]'
                src={item.img} fill alt="project"/>


              </div>
                
              <h6 className='pt-[18px]'>{item.title}</h6>
              <h6 className='yellow text-[22px]'>{item.subTitle}</h6>
            </div>
          ))
        }

      </div>
      
    </div>
  )
}

export default PortfolioProject