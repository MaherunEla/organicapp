"use client"
import Image from 'next/image';
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {AiFillStar} from 'react-icons/ai'
const Testimonial = () => {
  return (
    <div className="bg-[url('/assets/images/Home/testiBack.jpg')] bg-styles w-full xl:w-screen h-[920px] xl:h-[1267px]">
        <div className='flex flex-col items-center justify-center py-[40px] xl:py-[164px]'>
            <h4 className='yellow text-green pb-[16px]'>Testimonial</h4>
            <h2 className='text-[24px] pb-[60px]'>What Our Customer Saying?</h2>
           
            <Swiper 
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={()=>console.log('slide change')}
            onSwiper={(swiper)=>console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='container flex flex-col items-center justify-center'>
                        <div className='w-[115px] h-[115px] relative'>
                            <Image 
                            className='rounded-full'
                            src="/assets/images/Home/testimonial.jpg" fill alt="testimonial"/>
                        </div>

                        <div className='pt-5 flex  text-[#FFA858]'>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>

                            </div>
                            <p className='w-full xl:max-w-[780px] text-center pt-[25px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                            <h6 className='pt-5'>Sara Taylor</h6>
                            <p className='text-[15px]'>Consumer</p>
                            <div className='pt-5'>...</div>

                    </div>
                   
                </SwiperSlide>
            </Swiper>
            
     
            
            <div className='pt-[56px] xl:pt-[102px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[30px] xl:gap-[62px]'>
                <div className=' w-[126px] h-[126px] xl:w-[211px] xl:h-[211px] rounded-full border-2  border-green bg-[#F1F1F1] flex flex-col items-center justify-center'>
                    <h2 className='text-[32px]'>100%</h2>
                    <p className='text-[16px] font-semibold'>Organic</p>

                </div>
                <div className='w-[126px] h-[126px] xl:w-[211px] xl:h-[211px] rounded-full border-2 bg-[#F1F1F1] border-green flex flex-col items-center justify-center'>
                    <h2 className='text-[32px]'>285</h2>
                    <p>Active Product</p>

                </div>
                <div className='w-[126px] h-[126px] xl:w-[211px] xl:h-[211px] rounded-full border-2 bg-[#F1F1F1] border-green flex flex-col items-center justify-center'>
                    <h2>350+</h2>
                    <p>Organic Orchads</p>

                </div>
                <div className='w-[126px] h-[126px] xl:w-[211px] xl:h-[211px] rounded-full border-2 bg-[#F1F1F1] border-green flex flex-col items-center justify-center'>
                    <h2>25+</h2>
                    <p>Years of Farming</p>

                </div>
                
            </div>

        </div>


    </div>
  )
}

export default Testimonial