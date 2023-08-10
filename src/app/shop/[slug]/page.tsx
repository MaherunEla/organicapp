"use client"
import React from 'react'
import ShopSingleHero from './Components/ShopSingleHero'
import ShopSingleCart from './Components/ShopSingleCart'
import { useParams } from 'next/navigation';
import { ShopCardData } from '../Components/ShopCardData';
import { IProduct,IRelatedProduct } from '@/types';
import Subscribe from '@/Components/Shared/Subsribe';

const page = () => {
  const param=useParams();
   
  const product : IProduct | undefined =ShopCardData.find((e)=>e.id == +param?.slug); 
  const RelatedProduct : IRelatedProduct | undefined = ShopCardData.slice(0,4);
  console.log({RelatedProduct});
  return (
    <div>
        <ShopSingleHero/>
        <ShopSingleCart product={product} RelatedProduct={RelatedProduct}/>
        <Subscribe/>
    </div>
  )
}

export default page