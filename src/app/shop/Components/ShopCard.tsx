import React from 'react'
import { ShopCardData } from './ShopCardData'
import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'

const ShopCard = () => {
  return ( 
    <div className='container flex items-center justify-center pt-[90px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 ld:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {
                ShopCardData.map((item,index)=>(
                    <div className='pt-[30px] pl-[30px] pr-[25px] w-[335px] pb-[17px]  bg-cream rounded-[30px]' key={index}>
                        <div className=' max-w-[96px] py-[8px] px-3 bg-sea_green rounded-[8px]'>
                            <h6 className='font-open_sens text-[15px] text-[#FFF] text-center font-normal tracking-[1px] '>{item.title}</h6>
                        </div>
                        <div className='w-[335px] h-[324px] relative'>
                            <Image src={item.img} fill alt="vegetable"/>
                        </div>
                        <h6 className='pb-[19px]'>{item.subTitle}</h6>
                        <hr className='bg-[#DEDDDD] opacity-10 '></hr>
                        <div className='flex justify-between pt-[6px]'>
                            <div className='flex gap-[7px]'>
                            <p className='line-through'>{item.price}</p>
                            <p className='font-bold'>{item.discountPrice}</p>
                            </div>
                            <div className='flex items-center justify-center text-[#FFA858]'>
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

    </div>
  )
}

export default ShopCard