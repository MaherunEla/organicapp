import React from "react";
import Navbar from "../../shared/Navbar";
import CategoryTable from "./Components/CategoryTable";
import CategoryForm from "./Components/CategoryForm";

const page = () => {
  return (
    <div className="container">
      <Navbar title="Category" subtitle="Category Listings" />
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:flex-1">
          <CategoryTable />
        </div>
        <div className="hidden lg:flex w-[1px] bg-[#ddd]"></div>
        <CategoryForm />
      </div>
    </div>
  );
};

export default page;
