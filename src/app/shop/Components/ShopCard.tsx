import React from 'react'
import { ShopCardData } from './ShopCardData'
import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'
import Link from 'next/link'
const ShopCard = () => {
  return ( 
    <div className='container flex items-center justify-center pt-[90px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 ld:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {
                ShopCardData.map((item,index)=>(
                    <Link href={`/shop/${item.id}` } key={index}>
                         <div className=' w-[335px] pb-[17px] pt-[30px] bg-cream rounded-[30px]'>
                        <div className=' ml-[30px] mr-[25px] max-w-[96px] py-[8px] px-3 bg-sea_green rounded-[8px]'>
                            <h6 className='font-open_sens text-[15px] text-[#FFF] text-center font-normal tracking-[1px] '>{item.title}</h6>
                        </div>
                        <div className='w-[335px] h-[324px] relative'>
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
                    </Link>
                   
                ))
            }


        </div>

    </div>
  )
}

export default ShopCard