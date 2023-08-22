import HeroSection from '../Components/Shared/HeroSection';
import React from 'react'

const page = () => {
    const backgroundimg="/assets/images/Home/BannerShopS.jpg";
  return (
    <div>
         <div>
        <HeroSection title="Billing Details" backgroundimg={backgroundimg}/>

    </div>

    </div>
   
  )
}

export default page