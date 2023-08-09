import React from 'react'
import HeroSection from '@/Components/Shared/HeroSection';
const BillingHero = () => {
    const backgroundimg="/assets/images/Home/BannerShopS.jpg";
    return (
      <div>
          <HeroSection title="Billing Details" backgroundimg={backgroundimg}/>
      
      </div>
    )
}

export default BillingHero