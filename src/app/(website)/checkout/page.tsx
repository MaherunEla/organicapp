'use client';
import React from 'react'
import CheckOutHero from '../Changelog/components/CheckOutHero'

import Subscribe from '../Components/Shared/Subsribe';
import Image from 'next/image'
import CheckOutTable from './Components/CheckOutTable';


const page = () => {
 
  return (
    <div>
        <CheckOutHero/>
        <CheckOutTable />
       
        <Subscribe/>
    </div>
  )
}

export default page