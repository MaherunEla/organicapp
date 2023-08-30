import React from 'react'
import Navbar from '../../shared/Navbar'
import CustomerTable from './Components/CustomerTable'

const page = () => {
  return (
    <div className='container'>
        <Navbar title="Customers" subtitle="farmart Customers"/>
        <CustomerTable/>
        
    </div>
  )
}

export default page