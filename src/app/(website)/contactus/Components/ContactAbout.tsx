import React from "react";
import Image from "next/image";
import { BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { BsFacebook, BsPinterest } from "react-icons/bs";
const ContactAbout = () => {
  return (
    <div className="container flex flex-col items-center justify-center  py-10 xl:py-32">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-[75px] pb-[98px]">
        <div className="w-[375px] h-[350px] lg:w-[623px] lg:h-[640px] relative">
          <Image
            className="rounded-lg"
            src="/assets/images/contact/i1.jpg"
            fill
            alt="contact"
          />
        </div>
        <div className=" xl:w-[702px] flex flex-col gap-[34px] ">
          <div>
            <h2 className="text-[35px] pb-[11px]">
              We'd love to talk about how we can work together.
            </h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>

          <div>
            <div className="w-[352px] px-[12px] py-[12px] border border-white rounded-2xl flex items-center gap-[19px] shadow-lg mb-[17px]">
              <div className="w-[89px] h-[89px] relative">
                <Image src="/assets/images/contact/icon1.png" fill alt="icon" />
              </div>
              <div>
                <h6>Massege</h6>
                <p>support@organic.com</p>
              </div>
            </div>

            <div className="w-[352px] px-[12px] py-[12px] border border-white rounded-2xl flex items-center gap-[19px] shadow-lg">
              <div className="w-[89px] h-[89px] relative">
                <Image src="/assets/images/contact/icon2.png" fill alt="icon" />
              </div>
              <div>
                <h6>Contact Us</h6>
                <p>+01 123 456 789</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[15px]">
            <div className="w-[60px] h-[60px] border rounded-full border-very_light_green bg-very_light_green">
              <BiLogoInstagram className="fill-sea_green m-5 " size={20} />
            </div>
            <div className="w-[60px] h-[60px] border rounded-full border-very_light_green bg-very_light_green">
              <BsFacebook className="fill-sea_green m-5 " size={20} />
            </div>
            <div className="w-[60px] h-[60px] border rounded-full border-very_light_green bg-very_light_green">
              <BiLogoTwitter className="fill-sea_green m-5 " size={20} />
            </div>
            <div className="w-[60px] h-[60px] border rounded-full border-very_light_green bg-very_light_green">
              <BsPinterest className="fill-sea_green m-5" size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[375px] h-[505px]  xl:w-[1400px] xl:h-[758px] bg-[url('/assets/images/contact/banner2.jpg')] bg-styles rounded-lg flex items-center justify-center xl:justify-end xl:pr-[108px]">
        <div className="w-[327px] h-[425px] xl:w-[514px] xl:h-[514px] px-5 py-5 xl:px-[53px] xl:py-[46px] bg-white rounded-lg  ">
          <h4 className="yellow">Location</h4>
          <h2 className="text-[36px] pb-[10]">Our Farms</h2>
          <p className="pb-[19px]">
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using.
          </p>
          <div className="pb-[22px] flex gap-[6px]">
            <div className="w-[40px] h-[40px]  xl:w-[50px] xl:h-[50px] relative">
            <Image
             
             src="/assets/images/contact/icon3.png"
            fill
             alt="icon"
           />

            </div>
           
            <div>
              <p className="font-bold">New York, USA:</p>
              <p>299 Park Avenue New York, New York 10171</p>
            </div>
          </div>

          <div className="flex gap-[6px]">
            <div className="w-[40px] h-[40px]  xl:w-[50px] xl:h-[50px] relative">
            <Image
             
             src="/assets/images/contact/icon3.png"
            fill
             alt="icon"
           />

            </div>
           
            <div>
              <p className="font-bold">London, UK:</p>
              <p> 30 Stamford Street, London SE1 9LQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
