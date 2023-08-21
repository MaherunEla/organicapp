import React from 'react'
import PortfolioHero from './Components/PortfolioHero'
import PortfolioProject from './Components/PortfolioProject'
import Subscribe from '@/Components/Shared/Subsribe'

const page = () => {
  return (
    <div>
        <PortfolioHero/>
        <PortfolioProject/>
        <Subscribe/>
    </div>
  )
}

export default page