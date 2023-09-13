import React from "react";
import Navbar from "../shared/Navbar";
import OrderTable from "./orders/Components/OrderTable";
import Statics from "./Components/Statics";

const page = () => {
  const title = "Dashboard";
  const subtitle = "Everything here";
  return (
    <div className="container ">
      <Navbar title={title} subtitle={subtitle} />
      {/* <RecentOrder /> */}

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:flex-1">
          <OrderTable />
        </div>
        <div className="hidden lg:flex w-[1px] bg-[#ddd]"></div>

        <Statics />
      </div>
    </div>
  );
};

export default page;
