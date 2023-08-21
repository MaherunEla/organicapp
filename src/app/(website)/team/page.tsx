import React from 'react'
import TeamHero from './Components/TeamHero'
import TeamCard from './Components/TeamCard'
import Subscribe from '@/Components/Shared/Subsribe'

const page = () => {
  return (
    <div>
        <TeamHero/>
        <TeamCard/>
        <Subscribe/>
    </div>
  )
}

export default page