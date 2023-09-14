import React from "react";
import Image from "next/image";
import Button from "../../Shared/button";

const HomeAbout = () => {
  return (
    <div>
      <div className="container flex flex-col xl:flex-row items-center justify-center gap-[30px] xl:gap-9 pt-[60px] lg:pt-[162px] pb-[40px] xl:pb-[190px]">
        <div className="bg-[url('/assets/images/Home/natural.jpg')] bg-styles w-[375px] h-[350px] xl:w-[682px] xl:h-[367px] xl:rounded-[30px] ">
          <div className=" px-[24px] py-[101px] xl:px-[54px] xl:py-[109px]">
            <h4 className="yellow text-white">Natural!!</h4>
            <h3 className="max-w-[277px] text-white">
              Get Garden Fresh Fruits
            </h3>
          </div>
        </div>
        <div className="bg-[url('/assets/images/Home/offer.png')] bg-styles w-[375px] h-[350px] xl:w-[682px] xl:h-[367px]  xl:rounded-[30px]">
          <div className="px-[24px] py-[101px] xl:px-[54px] xl:py-[109px]">
            <h4 className="yellow text-green">Offer!!</h4>
            <h3 className="max-w-[277px]">Get 10% off on Vegetables</h3>
          </div>
        </div>
      </div>

      <div className="xl:ml-[148px] bg-cream h-[1067px]">
        <div className="flex flex-col xl:flex-row px-10 gap-10">
          <div className=" bg-[url('/assets/images/Home/about.png')] bg-styles w-[911px] h-[867px]"></div>
          <div className="flex flex-col items-center xl:items-start justify-center xl:max-w-[690px]">
            <h4 className="yellow">About Us</h4>
            <h2 className="text-center lg:text-start ">
              We Believe in Working Accredited Farmers
            </h2>
            <p className="pt-[24px] xl:pt-[14px] text-center lg:text-start">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>
            <div className="pt-[46px] flex gap-[23px] xl:gap-[19px]">
              <div className="w-[48px] h-[48px] xl:w-[101px] xl:h-[101px] flex items-center justify-center bg-white rounded-[8px] xl:rounded-[20px]">
                <div className="h-[21px] w-[21px] xl:w-[46px] xl:h-[46px] relative">
                  <Image
                    src="/assets/images/Home/about1.png"
                    fill
                    alt="abouticon"
                  />
                </div>
              </div>
              <div className="max-w-[444px]">
                <h6>Organic Foods Only</h6>
                <p className="pt-[7px] text-dark_gray">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="pt-[46px] flex gap-[19px]">
              <div className="w-[101px] h-[101px] flex items-center justify-center bg-white rounded-[20px]">
                <div className="w-[46px] h-[46px] relative">
                  <Image
                    src="/assets/images/Home/about2.png"
                    fill
                    alt="abouticon"
                  />
                </div>
              </div>
              <div className="max-w-[444px]">
                <h6>Quality Standards</h6>
                <p className="pt-[7px] text-dark_gray">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="pt-[48px] max-w-[220px]">
              <Button title="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
