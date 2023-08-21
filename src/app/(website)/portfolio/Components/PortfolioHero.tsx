import React from 'react'
import HeroSection from '@/Components/Shared/HeroSection';
const PortfolioHero = () => {
    const backgroundimg="/assets/images/portfolio/banner.png";
    return (
      <div>
          <HeroSection title="Portfolio Standard" backgroundimg={backgroundimg}/>
      
      </div>
    
    )
}

export default PortfolioHero