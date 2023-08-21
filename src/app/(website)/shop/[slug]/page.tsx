"use client"
import React from 'react'
import ShopSingleHero from './Components/ShopSingleHero'
import ShopSingleCart from './Components/ShopSingleCart'
import { products } from '@/Components/home/Components/HomeProductData'
import { useParams } from 'next/navigation';
import { ICard, IProduct,IRelatedCard } from '@/types';
import Subscribe from '@/Components/Shared/Subsribe';

const page = () => {
  const param=useParams();
   
  const product : ICard | undefined =products.find((e)=>e.id == +param?.slug); 
  const RelatedProduct : IRelatedCard | undefined = products.slice(0,4);
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