import React from 'react'
import Navbar from '../../shared/Navbar'
import CategoryTable from './Components/CategoryTable'
import CategoryForm from './Components/CategoryForm'

const page = () => {
  return (
    <div className='container'>
        <Navbar title="Category" subtitle="Category Listings"/>
        <div className='flex gap-20'>
            <div className='flex-1'>
            <CategoryTable/>
            </div>
            <div className='w-[1px] bg-[#ddd]'>

           </div>
            <CategoryForm />

        </div>
        
    </div>
  )
}

export default page