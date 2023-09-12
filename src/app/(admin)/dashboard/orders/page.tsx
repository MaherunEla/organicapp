"use client";
import React from "react";
import Navbar from "../../shared/Navbar";
import DefaultTable from "../../shared/Table/DefaultTable";
import OrderTable from "./Components/OrderTable";
import { BiDiamond } from "react-icons/bi";

const page = () => {
  return (
    <div className="container">
      <Navbar title="Orders" subtitle="farmart orders listings" />
      <div className="pb-[50px]">
        <form className="flex gap-5">
          <div className=" border border-[#e5e5e5] active:border-[#26901b] w-full xl:w-[420px] px-5 py-[10px]">
            <input type="text" placeholder="Search product" value=""></input>
          </div>
          <select className="border border-[#ddd] py-[10px] px-[20px] w-full lg:w-[289px]">
            <option selected value="0">
              Status
            </option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
          </select>

          <button className="flex justify-center items-center px-7 border border-[#e5e5e5] bg-[#e5e5e5] hover:bg-[#26901b]">
            <BiDiamond size={20} />
            <span className="uppercase ml-2 font-medium text-sm text-[#000000]">
              filter
            </span>
          </button>
        </form>
      </div>
      <OrderTable />
    </div>
  );
};

export default page;
