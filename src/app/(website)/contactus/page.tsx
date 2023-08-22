

import React from "react";

import ContactAbout from "./Components/ContactAbout";
import Form from "./Components/Form";
import Subscribe from "../Components/Shared/Subsribe";
import HeroSection from "../Components/Shared/HeroSection";

const page = () => {
  const backgroundimg="/assets/images/contact/banner.jpg";
  return (
    <div>
      <HeroSection title="Contact Us" backgroundimg={backgroundimg}/>
      <ContactAbout/>
      <Form/>
      <Subscribe/>
      
    </div>
    
  );
};

export default page;
