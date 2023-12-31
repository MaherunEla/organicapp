import Image from "next/image";
import React from "react";
import { ImExit } from "react-icons/im";
import { SlidebarData } from "./SlidebarData";
import { BiHome } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import { CiPercent } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbSettings } from "react-icons/tb";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[375px] h-screen bg-[#f1f2f6] px-[60px] py-[60px] ">
      <div className=" flex items-center justify-between mb-[80px]">
        <div className="flex items-center justify-center gap-[10px]">
          <div className="w-[50px] h-[50px] relative">
            <Image
              className="rounded-full"
              src="/assets/images/admin/admin.jpg"
              fill
              alt="admin pic"
            />
          </div>
          <div>
            <p className="text-[#666666] font-work_sans text-sm leading-5">
              Hello,
            </p>
            <p className="font-semibold text-lg font-work_sans text-[#222]">
              Soho Store
            </p>
          </div>
        </div>
        <ImExit className="text-[#666666]" size={20} />
      </div>

      <div className="pb-[70px]">
        <p className="font-semibold text-base text-[#666666] font-work_sans tracking-wide">
          Earning
        </p>
        <h3 className="text-3xl text-[#222] font-bold pb-[50px] font-work_sans">
          $12,560.55
        </h3>
        <hr className=" bg-[#ddd] opacity-25"></hr>
      </div>
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
      <div>
        <Link href="/">
          <div className="flex gap-2">
            <div className="w-[40px] h-[50px] relative">
              <Image src="/assets/images/Home/Logo.svg" fill alt="logo" />
            </div>
            <span className="font-roboto text-2xl lg:text-[38px] font-bold leading-normal text-sea_green">
              Organick
            </span>
          </div>
        </Link>
        <p className="text-sm text-[#666666] font-normal leading-6 font-work_sans">
          ©2021 Organic.
        </p>
        <p className="text-sm text-[#666666] font-normal leading-6 font-work_sans">
          {" "}
          All rights reversed.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
