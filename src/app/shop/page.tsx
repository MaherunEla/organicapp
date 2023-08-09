import React from 'react'
import ShopHero from './Components/ShopHero'
import ShopCard from './Components/ShopCard'
import Subscribe from '@/Components/Shared/Subsribe'

const page = () => {
  return (
    <div>
        <ShopHero/>
        <ShopCard/>
        <Subscribe/>
    </div>
  )
}

export default page