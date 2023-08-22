"use client";
import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { products } from "../../home/Components/HomeProductData";
import { ICard } from "@/types";

type Props = {
  item: ICard | undefined;
};
const Card:React.FC<{item :ICard}>= ({item}) => {
  return ( <Link href={`/shop/${item.id}`} >
  <div className=" w-[335px] pb-[17px] pt-[30px] bg-cream rounded-[30px]">
    <div className=" ml-[30px] mr-[25px] max-w-[96px] py-[8px] px-3 bg-sea_green rounded-[8px]">
      <h6 className="font-open_sens text-[15px] text-[#FFF] text-center font-normal tracking-[1px] ">
         {item.category.name}
      </h6>
    </div>
    <div className="w-[335px] h-[324px] relative">
      <Image src={item.image} fill alt="vegetable" />
    </div>
    <h6 className="pl-[30px] pr-[25px] pb-[19px]">{item.name}</h6>
    <hr className="ml-[30px] mr-[25px] bg-[#DEDDDD] opacity-10 "></hr>
    <div className="flex justify-between pt-[6px]">
      <div className=" pl-[30px] pr-[25px] flex gap-[7px]">
        <p className="line-through">${item.price.toFixed(2)}</p>
        <p className="font-bold">${item.discount.toFixed(2)}</p>
      </div>
      <div className=" pr-[25px] flex items-center justify-center text-[#FFA858]">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </div>
  </div>
</Link>)
 
};

export default Card;
