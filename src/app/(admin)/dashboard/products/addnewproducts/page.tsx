import Navbar from '@/app/(admin)/shared/Navbar'
import React from 'react'
import NewProducts from './Components/NewProducts'

const page = () => {
  return (
    <div className='container'>
        <Navbar title="New Product" subtitle="Add new product"/>
        <NewProducts />


    </div>
  )
}

export default page