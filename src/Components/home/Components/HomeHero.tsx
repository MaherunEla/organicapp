import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
const HomeHero = () => {
  return (
    <div className="bg-[url('/assets/images/Home/hero.png')] w-full h-full lg:w-screen lg:h-screen bg-styles">
        <div  className="bg-[url('/assets/images/Home/heroShadow.png')] w-screen h-screen bg-styles">
            <div className='py-[100px] px-[24px] lg:py-[246px] lg:pl-[226px]'>
                <h4 className='yellow'>100% Natural Food</h4>
                <h1 className='lg:max-w-[530px] pb-[23px]'>Choose the best healthier way of life</h1>
                <div className='w-[220px] px-[39px] py-[28px] bg-yellow rounded-2xl flex items-center justify-center gap-[5px]'>
      
      <h6 className='font-roboto text-[20px] font-bold leading-normal text-sea_green'>Explore Now</h6>
      <BsArrowRightShort className=' m-[2px] border rounded-full border-[#335B6B] bg-[#335B6B] text-white'/>

        
    </div>

            </div>

        </div>

    </div>
  )
}

export default HomeHero