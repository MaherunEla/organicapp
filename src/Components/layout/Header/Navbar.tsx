"use client";
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
 
  const [showPageMenu, setShowPageMenu] = useState(false);

  return (
    <div className="bg-white">
      <nav className="container py-[69px] flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-row gap-2">
            <div className="w-[36px] h-[53px] relative">
              <Image src="/assets/images/Home/Logo.svg" fill alt="logo" />
            </div>
            <span className="font-roboto text-2xl lg:text-[38px] font-bold leading-normal text-sea_green">
              Organick
            </span>
          </div>
        </Link>

        <Menu showPageMenu={showPageMenu} setShowPageMenu={setShowPageMenu} />
        <div className="flex flex-row items-center  gap-[18px]">
        <div className=" h-[48px] w-[376px] lg:h-[66px] flex items-center right-0 border border-[#FAFAFA] rounded-full bg-[#FAFAFA]">
            <div className="w-[56px] h-[56px] relative">
                <Image 
                className="ml-[246px] lg:ml-[314px] "
                src='/assets/images/Home/Search Icon.svg' fill alt="search-icon"/>
           
            </div>
         
        </div>

        <div className="w-[156px] h-[66px] flex items-center gap-3 border border-[#E0E0E0] rounded-full bg-white">
            <div className="w-[56px] h-[56px] relative ">
                <Image 
                className="ml-[6px]"
                src="/assets/images/Home/Cart Icon.svg" fill alt="carticon"/>

            </div>
            <span className="font-roboto text-lg font-semibold leading-normal text-sea_green">Cart (0)</span>

        </div>
            
        </div>

       
      </nav>
    </div>
  );
};

export default Navbar;
