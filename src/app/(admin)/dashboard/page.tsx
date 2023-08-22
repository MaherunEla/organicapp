
import React from 'react'
import Navbar from '../shared/Navbar'
import RecentOrder from './Components/RecentOrder';

const page = () => {
  const title="Dashboard";
  const subtitle="Everything here"
  return (
    <div className='container '>
      <Navbar title={title} subtitle={subtitle}/>
      <RecentOrder/>

    </div>
  )
}

export default page