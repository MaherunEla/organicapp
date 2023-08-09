"use client"
import Image from 'next/image'
import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {useParams} from 'next/navigation'
import { ShopCardData } from '../../Components/ShopCardData';

const ShopSingleCart = () => {
    interface Shop {
        id:number ,
        slug:string,
        title:string,
        img:string,
        subTitle:string,
        price:string,
        discountPrice:string,
    }
    const param=useParams();
   
    const shop : Shop | undefined =ShopCardData.find((e)=>e.slug == param?.slug); 
    
  return (
    <div className='container flex flex-col  items-center justify-center pt-[133px]'>
        {/* <div>
            <div className='w-[591px] h-[563px] bg-cream'>
                <Image src={shop.img} fill alt="vegetable"/>


            </div>
            <div>
                <h4>Health Pistachios</h4>
                <div className='flex items-center justify-center text-[#FFA858]'>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>

                            </div>
                            <div className='flex gap-[7px]'>
                            <p className='line-through'>{shop.price}</p>
                            <p className='font-bold'>{shop.discountPrice}</p>
                            </div>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

            </div>
        </div> */}

    </div>
  )
}

export default ShopSingleCart