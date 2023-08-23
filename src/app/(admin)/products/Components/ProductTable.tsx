"use client";
import React, { FC } from "react";
import { columns } from "./columns";
import { flexRender, getCoreRowModel } from "@tanstack/react-table";
import {
  useReactTable,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import DefaultTable from "../../shared/Table/DefaultTable";
import { defaultData } from "./ProductTableData";

const ProductTable = () => {
  
  return (
    <DefaultTable columns={columns} data={defaultData}/>
  );
};

export default ProductTable;