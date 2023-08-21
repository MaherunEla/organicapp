import HeroSection from '@/Components/Shared/HeroSection'
import React from 'react'

const ServiceSingleHero = () => {
    const backgroundimg='/assets/images/servic/Background.jpg';
  return (
    <div>
        <HeroSection title="Quality Standard" backgroundimg={backgroundimg}/>
    </div>
  )
}

export default ServiceSingleHero