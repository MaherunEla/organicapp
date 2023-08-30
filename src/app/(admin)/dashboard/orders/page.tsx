"use client"
import React from 'react'
import Navbar from '../../shared/Navbar'
import DefaultTable from '../../shared/Table/DefaultTable'
import OrderTable from './Components/OrderTable'


const page = () => {
  return (
    <div className='container'>
        <Navbar title="Orders" subtitle="farmart orders listings"/>
        <OrderTable/>
        
    </div>
  )
}


export default page