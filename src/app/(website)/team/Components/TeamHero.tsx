import HeroSection from '../../Components/Shared/HeroSection';
import React from 'react'

const TeamHero = () => {
    const backgroundimg="/assets/images/Home/BannerTeam.png";
  return (
    <div>
        <HeroSection title="Our Team" backgroundimg={backgroundimg}/>

    </div>
  )
}

export default TeamHero