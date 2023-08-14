import React from 'react'
import { PortfolioProjectData } from './PortfolioProjectData'
import {RiArrowRightSLine} from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioProject = () => {
  return (
    <div className="container flex items-center justify-center pt-[151px]">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          PortfolioProjectData.map((item,index)=>(
            <Link href={`/portfolio/${item.id}`}  key={index}>
            <div>
              <div  style={{
            background:`url(${item?.img}) no-repeat  `,
            backgroundColor:'#F9F8F8',
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
            borderRadius: '30px',  
        }} className="w-[451px] h-[421px] flex items-center justify-center ">
          <div className=' w-[401px] h-[375px] rounded-[30px] flex items-center justify-center bg-white text-white opacity-90'>
            <div className='bg-green h-[46px] w-[46px] flex items-center justify-center rounded-full'>
              <RiArrowRightSLine size={20} />
            </div>

          </div>
             


              </div>
                
              <h6 className='pt-[18px]'>{item.title}</h6>
              <h6 className='yellow text-[22px]'>{item.subTitle}</h6>
            </div>
            </Link>
          ))
        }

      </div>
      
    </div>
  )
}

export default PortfolioProject