import { ShopCardData } from '@/app/shop/Components/ShopCardData'
import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
import Button from '@/Components/Shared/Button'

const HomeVegetable = () => {
    const vegetable =ShopCardData.slice(0,8);
  return (
    <div className='container flex flex-col items-center justify-center py-[59px] xl:py-[176px]'>
        <h4 className='yellow pb-[16px] lg:pb-2'>Categories </h4>
        <h2 className='pb-[30px] xl:pb-9'>Our Products</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 ld:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {
                vegetable.map((item,index)=>(
                    <div className='w-full  xl:w-[335px] pb-[17px]  bg-cream rounded-[30px]' key={index}>
                        <div className='mt-[30px] ml-[30px] mr-[25px] max-w-[96px] py-[8px] px-3 bg-sea_green rounded-[8px]'>
                            <h6 className='font-open_sens text-[15px] text-[#FFF] text-center font-normal tracking-[1px] '>{item.title}</h6>
                        </div>
                        <div className='w-[327px] xl:w-[335px] h-[324px] relative'>
                            <Image src={item.img} fill alt="vegetable"/>
                        </div>
                        <h6 className='pl-[30px] pr-[25px] pb-[19px]'>{item.subTitle}</h6>
                        <hr className='ml-[30px] mr-[25px] bg-[#DEDDDD] opacity-10 '></hr>
                        <div className='flex justify-between pt-[6px]'>
                            <div className=' pl-[30px] pr-[25px] flex gap-[7px]'>
                            <p className='line-through'>{item.price}</p>
                            <p className='font-bold'>{item.discountPrice}</p>
                            </div>
                            <div className=' pr-[25px] flex items-center justify-center text-[#FFA858]'>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>

                            </div>
                            

                        </div>


                    </div>
                ))
            }


        </div>
        <div className='mt-[122px]'>
        <Button title="Load More"/>

        </div>
        


    </div>
  )
}

export default HomeVegetable