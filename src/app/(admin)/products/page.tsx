"use client"
import React from 'react'
import Navbar from '../shared/Navbar'
import { useState } from 'react'
import ProductTable from './Components/ProductTable'
import Link from 'next/link'


const page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("0");
  const handleSelectChange = (event:React.ChagneEvent<HTMLSelectElement>)=>{
    setSelectedValue(event.target.value);
  }
  return (
    <div className='container'>
        <Navbar title="Products" subtitle="Products Listings"/>
        <div className='flex items-end justify-end pb-[50px] '>
          <Link href=""><p className='w-[190px] py-[10px] px-[35px] uppercase font-medium text-sm text-[#ffffff] bg-[#80bc00]'>+ New Product</p></Link>
        </div>
        <div className='flex gap-[10px] pb-[50px]'>
          <form className='w-[232px] '>

            <select className='border border-[#ddd] py-[10px] px-[20px]'>
              <option selected value="0">
                Select Category

              </option>
              <option value="1">Clothing & Apparel</option>
              <option value="2">Clothing & Apparel</option>

            </select>
          </form>

        </div>
        <ProductTable/>
    </div>
  )
}

export default page