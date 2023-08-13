import React from 'react'
import ServiceSingleHero from './Components/ServiceSingleHero'
import ServiceSingleAbout from './Components/ServiceSingleAbout'
import Subscribe from '@/Components/Shared/Subsribe'

const page = () => {
  return (
    <div>
        <ServiceSingleHero/>
        <ServiceSingleAbout/>
        <Subscribe />
    </div>
  )
}

export default page