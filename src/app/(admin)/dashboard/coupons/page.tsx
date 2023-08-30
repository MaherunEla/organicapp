import React from 'react'
import Navbar from '../../shared/Navbar'
import CouponsTable from './Components/CouponsTable'
import CouponsForm from './Components/CouponsForm'

const page = () => {
  return (
    <div className='container'>
        <Navbar title="Coupons" subtitle="farmart Counpon Listing"/>
        <div className='flex gap-20'>
            <div className='flex-1'>
            <CouponsTable  />

            </div>
            <div className='w-[1px] bg-[#ddd]'>

            </div>
       
        <CouponsForm/>


        </div>
      
    </div>
  )
}

export default page