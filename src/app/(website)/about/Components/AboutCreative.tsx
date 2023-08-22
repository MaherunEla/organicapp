import React from "react";
import Image from "next/image";
import Button from "../../Components/Shared/button";
const AboutCreative = () => {
  return (
    <div className="pt-[68px]">
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <div className="w-full h-[700px] xl:w-[1016px] xl:h-[764px] relative">
          <Image src="/assets/images/about/about.png" fill alt="image" />
        </div>
        <div className="w-full xl:w-[671px] text-center xl:text-start px-[24px] xl:px-0">
          <h4 className="yellow">About Us</h4>
          <h2>
            We do Creative <br></br>Things for Success
          </h2>
          <p className="text-dark_gray pt-[14px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.<br></br>
            <br></br>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex flex-col xl:flex-row pt-[49px] pb-[58px] gap-4">
            <div className="flex gap-[15px]">
              <div className="w-[46px] h-[46px] relative">
                <Image src="/assets/images/about/about1.png" fill alt="icon"/>
                

              </div>
              <div className="w-[226px]">
              <h6>Modern Agriculture Equipment</h6>

              </div>
             
            </div>

            <div className="flex gap-[15px]">
              <div className="w-[46px] h-[46px] relative">
                <Image src="/assets/images/about/about2.png" fill alt="icon"/>
                

              </div>
              <div className="w-[226px]">
              <h6>No growth hormones are used</h6>

              </div>
              
            </div>
            

          </div>
          <div className="w-[256px] h-[80px]">
          <Button title="Explore More"/>

          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutCreative;
