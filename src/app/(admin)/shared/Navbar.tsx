import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { IoExitOutline } from "react-icons/io5";

const Navbar = (props: { title: string; subtitle: string }) => {
  return (
    <div className="hidden pt-[60px] mb-[70px] lg:flex  items-center justify-between ">
      <div>
        <h3 className="text-2xl font-bold text-[#222]">{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>

      <div className="w-full lg:w-[400px]">
        <form>
          <button className="p-5">
            <SlMagnifier size={18} />
          </button>
          <input type="text" placeholder="Search something" value=""></input>
          <div className="w-full h-[1px] bg-[#ddd] hover:bg-[#26901b]"></div>
        </form>
      </div>

      <div className="flex justify-end items-end gap-4 h-14 ">
        <span className="font-semibold text-[#222] uppercase">
          view your store
        </span>
        <IoExitOutline size={30} />
      </div>
    </div>
  );
};

export default Navbar;
