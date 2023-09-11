"use client";
import React from "react";
import Navbar from "../../shared/Navbar";
import { useState } from "react";

import Link from "next/link";
import ProductTable from "./Components/ProductTable";
import { BiDiamond } from "react-icons/bi";

const Page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("0");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="container">
      <Navbar title="Products" subtitle="Products Listings" />
      <div className="flex items-end justify-end pb-[50px] ">
        <Link href="/dashboard/products/addnewproducts">
          <p className="w-[190px] py-[10px] px-[35px] uppercase font-medium text-sm text-[#ffffff] bg-[#80bc00]">
            + New Product
          </p>
        </Link>
      </div>
      <div className="flex gap-[10px] pb-[50px] ">
        <form className="flex gap-2 ">
          <select className="border border-[#ddd] py-[10px] px-[20px] w-full lg:w-[289px]">
            <option selected value="0">
              Select Category
            </option>
            <option value="1">Clothing & Apparel</option>
            <option value="2">Clothing & Apparel</option>
          </select>

          <select className="border border-[#ddd] py-[10px] px-[20px] w-full lg:w-[289px]">
            <option selected value="0">
              Product Type
            </option>
            <option value="1">Simple Product </option>
            <option value="2">Groupped product</option>
          </select>

          <select className="border border-[#ddd] py-[10px] px-[20px] w-full lg:w-[289px]">
            <option selected value="0">
              Status
            </option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
          </select>
          <button className="flex justify-center items-center px-7">
            <BiDiamond size={20} />
            <span className="uppercase">filter</span>
          </button>
        </form>
      </div>
      <ProductTable />
    </div>
  );
};

export default Page;
