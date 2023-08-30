"use client";
import React, { FC } from "react";
import {MdNavigateNext} from 'react-icons/md'
import {GrFormPrevious} from 'react-icons/gr'
import { flexRender, getCoreRowModel } from "@tanstack/react-table";

import {
  useReactTable,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { getJsPageSizeInKb } from "next/dist/build/utils";

const DefaultTable:FC<{data:any,columns:any}> = ({data,columns}) => {
  const table = useReactTable({
    data,
    columns,

    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  console.log("table state",table.getState());
  var pages = Array.from({length: table.getPageCount()}, (_, index) => index + 1);
  
  return (
    <div>
      <table className="border-collapse w-full  " id="order">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-[#999999] font-normal text-sm text-left px-[10px]"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-[10px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pt-[50px] flex justify-between ">
        <div>
            <p className="tablep text-[#666666]">show  {table.getState().pagination.pageSize} in {data.length} items</p>
        </div>
      <div className="flex items-center gap-[10px]">
        <button
          className="border border-[#f5f5f5] active:border-[#26901b] active:bg-[#26901b]  bg-[#f5f5f5] w-[30px] h-[30px] cursor-pointer"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <GrFormPrevious  className="ml-[4px] "/>
        </button>
        {pages.map((page,index)=>{
          return <button
          key={index}
          className={`border border-[#f5f5f5] bg-[#f5f5f5]  text-[#222] w-[30px] h-[30px] cursor-pointer ${table.getState().pagination.pageIndex== (page-1)&&"border-[#26901b] bg-[#26901b] text-white"}`}
          onClick={() => table.setPageIndex(page-1)}
        >
          <p className="text-[13px] font-normal">{page}</p>
       </button>
        })}
        
        <button
        className="border border-[#f5f5f5] bg-[#f5f5f5] active:border-[#26901b] active:bg-[#26901b] cursor-pointer w-[30px] h-[30px] "
        onClick={()=>table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}>
           <MdNavigateNext className="ml-[4px]" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default DefaultTable;
