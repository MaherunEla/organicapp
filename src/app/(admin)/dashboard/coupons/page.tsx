import React from "react";
import Navbar from "../../shared/Navbar";
import CouponsTable from "./Components/CouponsTable";
import CouponsForm from "./Components/CouponsForm";

const page = () => {
  return (
    <div className="container">
      <Navbar title="Coupons" subtitle="farmart Counpon Listing" />
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:flex-1">
          <CouponsTable />
        </div>
        <div className="hidden lg:flex w-[1px] bg-[#ddd]"></div>

        <CouponsForm />
      </div>
    </div>
  );
};

export default page;
