import React from 'react'
import AboutHero from './Components/AboutHero'
import AboutCreative from './Components/AboutCreative'
import AboutChooseUs from './Components/AboutChooseUs'
import AboutTeam from './Components/AboutTeam'
import AboutUs from './Components/AboutUs'
import Subscribe from '@/Components/Shared/Subsribe'

const page = () => {
  return (
    <div>
         <AboutHero/>
         <AboutCreative/>
         <AboutChooseUs/>
         <AboutTeam/>
         <AboutUs/>
         <Subscribe/>

    </div>
   
    
  )
}

export default page