import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";

const MobileNavbar = () => {
  return (
    <div className="container py-5 flex items-center justify-between">
      <AiOutlineMenu size={25} />
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
  );
};

export default MobileNavbar;
