import HeroSection from '@/Components/Shared/HeroSection';
import React from 'react'

const AboutHero = () => {
    const backgroundimg="/assets/images/about/AboutBanner.png";

  return (
    <div>
        <HeroSection title="About Us" backgroundimg={backgroundimg}/>
    
    </div>
  )
}

export default AboutHero