import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { SlidebarData } from "./SlidebarData";

const MobileNavbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <div className="container py-5 flex items-center justify-between">
        <div
          onClick={() => {
            setopen(!open);
          }}
        >
          {open ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <Link href="/">
          <div className="flex gap-2">
            <div className="w-[30px] h-[30px] relative">
              <Image src="/assets/images/Home/Logo.svg" fill alt="logo" />
            </div>
            <span className="font-roboto text-2xl lg:text-[38px] font-bold leading-normal text-sea_green">
              Organick
            </span>
          </div>
        </Link>
        <IoExitOutline size={30} />
      </div>
      <div className="w-full h-[1px] lg:hidden bg-[#ddd]"></div>
      <div className={clsx("w-[300px] h-screen", open ? "block" : "hidden")}>
        <div className=" flex flex-col gap-[10px] mb-[80px]">
          {SlidebarData.map((item, index) => (
            <Link href={item.url} key={index}>
              <div className="flex gap-[30px] pb-[10px] hover:text-[#26901b] active:text-[#26901b]">
                <item.icon
                  className="text-[#222] hover:text-[#26901b] active:text-[#26901b]"
                  size={20}
                />
                <p className="font-medium font-work_sans hover:text-[#26901b] active:text-[#26901b] text-base text-[#222] leading-5">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
