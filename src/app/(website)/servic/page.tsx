import React from 'react'
import ServicesHero from './Components/ServicesHero'
import ServicesVideo from './Components/ServicesVideo'
import ServicesAbout from './Components/ServicesAbout'

const page = () => {
  return (
    <div>
        <ServicesHero/>
        <ServicesAbout/>
        <ServicesVideo/>
    </div>
  )
}

export default page