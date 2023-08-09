import Image from 'next/image'
import React from 'react'
import {TbCircle} from 'react-icons/tb'
import AboutCard from './AboutCard'


const AboutChooseUs = () => {
  return (
    <div className='bg-[#F9F8F8] pt-[190px] pb-[174px]'>
        <div className='container flex items-center justify-center gap-[51px]'> 
        <div className='w-full xl:w-[671px]'>
            <h4 className='yellow'>Why Choose us?</h4>
            <h2 className='pb-[25px]'>We do not buy from the open market & traders.</h2>
            <p className='pb-9'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
           <div className='w-full xl:w-[486px] pb-6'>
           <div className='w-[339px] py-[29px] rounded-[49px] flex items-center pl-[27px] bg-[#ECECEC] gap-[2px]'>
                
                <TbCircle className='text-light_green stroke-[5px]' />

                
                
                <p className='font-roboto text-xl font-medium text-sea_green'>100% Natural Product</p>

            </div>
            
            <p className='pl-[60px] pt-3'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
           </div>

           <div className='w-full xl:w-[486px] pb-6'>
           <div className='w-[339px] py-[29px] rounded-[49px] flex items-center pl-[27px] bg-[#ECECEC] gap-[2px]'>
                
                <TbCircle className='text-light_green stroke-[5px]' />

                
                
                <p className='font-roboto text-xl font-medium text-sea_green'> Increases resistance</p>

            </div>
            
            <p className='pl-[60px] pt-3'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
           </div>

            
            



        </div>
        <div className='w-full xl:w-[678px] h-[579px]  relative'> 
            <Image
            className='rounded-2xl'
             src="/assets/images/about/about3.png" fill objectFit='cover' alt="image"/>

        </div>

        </div>
        <div className='container flex items-center justify-center pt-[91px]'>
            <AboutCard/>
        </div>


    </div>
  )
}

export default AboutChooseUs
