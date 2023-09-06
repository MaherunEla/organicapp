import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { IoExitOutline } from "react-icons/io5";

const Navbar = (props: { title: string; subtitle: string }) => {
  return (
    <div className=" pt-[60px] pb-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center ">
      <div className="w-full xl:w-[300px]">
        <h3 className="text-2xl font-bold text-[#222]">{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>

      <div className="w-full xl:w-[600px] mr-[300px]">
        <form>
          <button className="p-5">
            <SlMagnifier size={18} />
          </button>
          <input type="text" placeholder="Search something" value=""></input>
          <hr className="bg-[#ddd] opacity-25"></hr>
        </form>
      </div>

      <div className="flex items-end gap-4 h-14 ">
        <span className="font-semibold text-[#222] uppercase">
          view your store
        </span>
        <IoExitOutline size={20} />
      </div>
    </div>
  );
};

export default Navbar;
