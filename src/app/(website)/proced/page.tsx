import React from 'react'
import BillingHero from './Components/BillingHero'
import BillingDetailes from './Components/BillingDetailes'
import Subscribe from '../Components/Shared/Subsribe'
const page = () => {
  return (
    <div>
        <BillingHero/>
        <BillingDetailes/>
        <Subscribe/>

    </div>
  )
}

export default page