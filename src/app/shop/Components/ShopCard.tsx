"use client"
import React from 'react'
import { ShopCardData } from './ShopCardData'
import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'
import Card from '@/Components/layout/card/Card'
import Link from 'next/link'
import { products } from '@/Components/home/Components/HomeProductData'
const ShopCard = () => {
    
  return ( 
    <div className='container flex items-center justify-center pt-[90px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 ld:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {
                products.map((item,index)=>(
                    <Link href={`/shop/${item.id}` } key={index}>
                        <Card item={item} key={index} />
                    </Link>
                   
                ))
            }


        </div>

    </div>
  )
}

export default ShopCard