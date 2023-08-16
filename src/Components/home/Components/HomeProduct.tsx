import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import {AiFillStar} from 'react-icons/ai'
import { HomeProductData } from "./HomeProductData";
import Image from "next/image";

const HomeProduct = () => {
  return (
    <div className="bg-sea_green xl:h-[1050px]">
      <div className="container flex flex-col items-center justify-center  py-[59px] xl:py-[200px]">
        <div className="pb-[50px] flex flex-col xl:flex-row items-center gap-10 xl:gap-[500px]">
          <div>
            <h4 className="text-green yellow">Offer</h4>
            <h2 className="text-white">We Offer Organic For You</h2>
          </div>
          <div className="max-w-[256px]">
            <div className="px-[39px] py-[28px] bg-yellow rounded-2xl flex items-center justify-center gap-[5px]">
              <h6 className="font-roboto text-[20px] font-bold leading-normal text-sea_green">
                View All Product
              </h6>
              <BsArrowRightShort className=" m-[2px] border rounded-full border-[#335B6B] bg-[#335B6B] text-white" />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 ld:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {
                HomeProductData.map((item,index)=>(
                    <div className=' w-[335px] pb-[17px]  bg-white rounded-[30px]' key={index}>
                        <div className='mt-[30px] ml-[30px] mr-[25px] max-w-[96px] py-[8px] px-3 bg-sea_green rounded-[8px]'>
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
                ))
            }


        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
