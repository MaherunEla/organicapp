import React from "react";
import Navbar from "../../shared/Navbar";
import CustomerTable from "./Components/CustomerTable";
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
      <Navbar title="Customers" subtitle="farmart Customers" />
      <div className="flex items-end justify-end pb-[50px] ">
        <Link href="/dashboard/customers/addnewcustomers">
          <p className="w-[190px] py-[10px] px-[35px] uppercase font-medium text-sm text-[#ffffff] bg-[#80bc00]">
            + New Product
          </p>
        </Link>
      </div>
      <CustomerTable />
    </div>
  );
};

export default page;
