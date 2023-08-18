import React from 'react'
import CheckOutHero from '../Changelog/components/CheckOutHero'
import {AiOutlineClose} from 'react-icons/ai'
import Subscribe from '@/Components/Shared/Subsribe'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <CheckOutHero/>
        <div className='container flex flex-col items-center justify-center pt-[134px] '>
          <table className='table-auto w-[1400px] border-collapse  '>
            <thead className='text-lg font-normal text-sea_green font-open_sen'>
              <tr>
                <th className='border border-gray '>Products</th>
                <th className='border border-gray'>Price</th>
                <th className='border border-gray'>Quantity</th>
                <th className='border border-gray'>Subtotal</th>
                <th className='border border-gray'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray '>
                  <div className='flex items-start'>
                  <div className='flex items-center justify-center'>
                    <div className='w-[124px] h-[138px] relative'>
                      <Image src="/assets/images/Home/egg.png" fill alt="product"/>
                    </div>
                    <p className='text-sea_green font-roboto text-[22px] font-normal '>Italian-Style Chicken Meatballs</p>

                  </div>

                  </div>
                 </td>
                  <td className='text-sea_green font-roboto text-[22px] font-normal border border-gray text-center'>৳50.00</td>
                  <td className='border border-gray '>
                   <div className='flex items-center justify-center'>
                   <div className='flex items-center justify-between w-[171px] h-[51px] bg-very_light_green rounded-full p-1'>
                      <button className='w-[44px] h-[43px] rounded-full border border-white bg-white'>-</button>
                      <p className='text-sea_green font-roboto text-[22px] font-medium'>1</p>
                      <button  className='w-[44px] h-[43px] rounded-full border border-white bg-white'>+</button>

                    </div>
                   </div>
                  </td>
                  <td className='text-sea_green font-roboto text-[22px] font-medium border border-gray text-center'>৳50.00</td>
                  <td className='border border-gray'>
                    <div className='flex items-center justify-center px-10'>
                    <AiOutlineClose size={20} />

                    </div>
                   
                  </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className='text-sea_green font-roboto text-[22px] font-medium text-center'>Total Price</td>
                <td className='text-sea_green font-roboto text-[22px] font-medium text-center '>৳50.00</td>
                <td ></td>
              </tr>
            </tbody>
          </table>
         
          <div className='px-[20px] py-[15px] lg:px-[39px] lg:py-[28px] bg-sea_green rounded-2xl '>
      
      <h6 className='font-roboto text-base lg:text-[20px] font-bold leading-normal text-white'>Proceed to Checkout</h6>
     

        
    </div>

    
          
        </div>
        <Subscribe/>
    </div>
  )
}

export default page