"use client";
import Image from "next/image"; 
import {BsArrowRightShort } from 'react-icons/bs'
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ShopCardData } from "../../Components/ShopCardData";
import { ICard, IProduct, IRelatedCard, IRelatedProduct } from "@/types";
import Button from "@/Components/Shared/button";
import { useDispatch } from "react-redux";
import { addCart } from "@/app/redux_store/cartAddSlice";
type Props = {
  product: ICard | undefined;
  RelatedProduct: IRelatedCard | undefined;
};
const ShopSingleCart = ({ product,RelatedProduct }: Props) => {
  const {replace, push} = useRouter();
  const productt= {
    id:product?.id,
    name:product?.name,
    price:product?.price,
    quantity:1,
    images:[product?.image],
    discount:product?.discount,
  };
  const dispatch = useDispatch()
  if (!product) return <div>Not Found</div>;
  if(!RelatedProduct) return <div>Not Found</div>
  
  return (
    <div className="container flex flex-col  items-center justify-center pt-[48px] xl:pt-[133px]">
      <div className="flex flex-col xl:flex-row  items-center justify-center gap-[28px] xl:gap-[43px]">
        <div style={{
            background:`url(${product?.image}) no-repeat  `,
            backgroundColor:'#F9F8F8',
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
           
        }} className={`w-[331px] h-[373px] xl:w-[591px] xl:h-[563px] bg-styles rounded-[12px] xl:rounded-[30px]`}>
             <div className='m-[20px] xl:m-10 max-w-[96px] py-[6px] px-[10px] xl:py-[8px] xl:px-3 bg-sea_green rounded-[8px]'>
                            <h6 className='font-open_sens text-[15px] text-[#FFF] text-center font-normal tracking-[1px] '>{product.category.name}</h6>
                        </div>

          
        </div>
        <div className="w-full xl:max-w-[658px]">
          <h4 className="font-semibold">Health Pistachios</h4>
          <div className="flex  text-[#FFA858] pb-[9px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="flex gap-[7px] pb-[27px]">
            <p className="line-through">${product.price.toFixed(2)}</p>
            <p className="font-bold">${product.discount.toFixed(2)}</p>
          </div>
          <p className="text-base font-normal">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>

          <div className="flex flex-col xl:flex-row xl:items-center gap-5 pt-[35px]">
            <h6 className="text-[20px] font-bold">Quantity :</h6>
            <div className="flex gap-5">
            <h6 className="w-[134px] h-[80px] flex items-center justify-center border border-sea_green rounded-[16px] text-[20px] font-bold">1</h6>
            <div className='px-[20px] py-[15px] lg:px-[39px] lg:py-[28px] bg-sea_green rounded-2xl '>
      
      <button onClick={()=> {dispatch(addCart(productt))}} className='flex items-center justify-center gap-1 font-roboto text-base lg:text-[20px] font-bold  text-white'>Add to Cart
      <BsArrowRightShort className=' m-[2px] border rounded-full border-[#335B6B] bg-[#335B6B] text-white'/>
      </button>

        
    </div>
            {/* <Button onClick={()=> {dispatch(addCart(productt))}} title="Add to Cart"/> */}

            </div>
            
            


          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row pt-[72px] gap-5">
        <h6 className="py-[23px] px-[57px] rounded-[16px] border border-sea_green bg-sea_green font-open_sen text-white font-semibold">Product Description</h6>
        <h6 className="py-[23px] px-[57px] rounded-[16px] border border-very_light_green bg-very_light_green font-open_sen text-sea_green font-semibold">Product Description</h6>

        
        

      </div>
      <p className="pt-[27px] text-center max-w-[1137px]">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
      <h2 className="pt-[140px]">Related Products</h2>
      <div className='pt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {
                RelatedProduct.map((item,index)=>(
                    <div className=' w-[335px] pb-[17px]  bg-cream rounded-[30px]' key={index}>
                        <div className=' mt-[30px] ml-[30px] mr-[25px] max-w-[96px] py-[8px] px-3 bg-sea_green rounded-[8px]'>
                            <h6 className='font-open_sens text-[15px] text-[#FFF] text-center font-normal tracking-[1px] '>{item.category.name}</h6>
                        </div>
                        <div className='w-[335px] h-[324px] relative'>
                            <Image src={item.image} fill alt="vegetable"/>
                        </div>
                        <h6 className=' pl-[30px] pr-[25px] pb-[19px]'>{item.name}</h6>
                        <hr className='bg-[#DEDDDD] opacity-10 '></hr>
                        <div className='flex justify-between pt-[6px]'>
                            <div className=' pl-[30px] pr-[25px] flex gap-[7px]'>
                            <p className='line-through'>${item.price.toFixed(2)}</p>
                            <p className='font-bold'>${item.discount.toFixed(2)}</p>
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
  );
};

export default ShopSingleCart;
