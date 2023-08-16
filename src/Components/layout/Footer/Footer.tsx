import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { BsFacebook, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
         <div className="container flex items-center justify-center py-[60px] xl:py-10">
      <div className="flex flex-col xl:flex-row gap-10">
        <div>
          <h5 className="text-sea_green text-left xl:text-right">Contact Us</h5>
          <p className="font-bold text-dark_gray text-left xl:text-right">Email</p>
          <p className="mb-2 text-dark_gray  text-left xl:text-right">
            needhelp@Organia.com
          </p>
          <p className="font-bold text-dark_gray  text-left xl:text-right">Phone</p>
          <p className="mb-2 text-dark_gray  text-left xl:text-right">666 888 888</p>
          <p className="font-bold text-dark_gray  text-left xl:text-right">Address</p>
          <p className="mb-2 text-dark_gray  text-left xl:text-right">
            88 road, borklyn street, USA
          </p>
        </div>
        <div className="order-first xl:order-none flex flex-col flex-1 xl:w-[583px] xl:border-r-2 xl:border-gray xl:border-l-2 items-center ">
          <Link href="/">
            <div className="flex flex-row gap-2">
              <div className="w-[36px] h-[53px] relative">
                <Image src="/assets/images/Home/Logo.svg" fill alt="logo" />
              </div>
              <span className="mb-[26px] font-roboto text-[38px] font-bold  leading-normal text-sea_green">
                Organick
              </span>
            </div>
          </Link>
          <p className="text-dark_gray text-center mb-[49px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <div className="order-3  flex flex-row gap-[15px]">
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
        <div className="flex flex-col gap-4 ">
          <h5 className="text-sea_green">Utility Pages</h5>
          <p className="text-dark_gray">Style Guide</p>
          <p className="text-dark_gray">404 Not Found</p>
          <Link href="/Password">
          <p className="text-dark_gray">Password Protected</p>

          </Link>
          <Link href='/Licenses'>
          <p className="text-dark_gray">Licences</p>

          </Link>
          
        
          <Link href='/Changelog'>
          <p className="text-dark_gray">Changelog</p>
          </Link>
         
        </div>
      </div>
    </div>
    <div className="w-full h-[40px] xl:border-t-2 xl:border-gray">
        <p className="text-dark_gray text-center ">Copyright © <span className="font-bold">Organick</span> | Designed by <span className="font-bold">VictorFlow</span> Templates - Powered by <span className="font-bold">Webflow</span></p>


    </div>

    </div>
   
  );
};

export default Footer;
