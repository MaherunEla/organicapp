import { products } from './HomeProductData'
import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
import Button from '../../Shared/button'
import Link from 'next/link'
import Card from '../../layout/card/Card'

const HomeVegetable = () => {
    const vegetable =products.slice(0,8);
  return (
    <div className='container flex flex-col items-center justify-center py-[59px] xl:py-[176px]'>
        <h4 className='yellow pb-[16px] lg:pb-2'>Categories </h4>
        <h2 className='pb-[30px] xl:pb-9'>Our Products</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 ld:grid-cols-3 xl:grid-cols-4 gap-5 '>
        {
                vegetable.map((item,index)=>(
                    <Link href={`/shop/${item.id}` } key={index}>
                        <Card item={item} key={index} />
                    </Link>
                   
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