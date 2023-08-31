"use client";
import DefaultTable from "@/app/(admin)/shared/Table/DefaultTable";
import React, { useEffect } from "react";
import { columns } from "./columns";
import { defaultData } from "./CategoryTableData";

const CategoryTable = () => {
  useEffect(() => {
    const fun = async () => {
      const categories = await fetch("/api/category").then(
        async (res) => await res.json()
      );
      console.log(categories);
    };
    fun();
  }, []);

  return (
    <div>
      <DefaultTable columns={columns} data={defaultData} />
    </div>
  );
};

export default CategoryTable;
