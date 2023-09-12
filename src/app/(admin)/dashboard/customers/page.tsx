import React from "react";
import Navbar from "../../shared/Navbar";
import CustomerTable from "./Components/CustomerTable";
import Link from "next/link";
import { BiDiamond } from "react-icons/bi";

const page = () => {
  return (
    <div className="container">
      <Navbar title="Customers" subtitle="farmart Customers" />
      <div className="flex items-end justify-end pb-[50px] ">
        <Link href="/dashboard/customers/addnewcustomers">
          <p className="w-[190px] py-[10px] px-[35px] uppercase font-medium text-sm text-[#ffffff] bg-[#80bc00] hover:bg-[#26901b]">
            + New Product
          </p>
        </Link>
      </div>
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
      <CustomerTable />
    </div>
  );
};

export default page;
