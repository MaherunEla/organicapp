"use client"
import React,{useMemo,useState} from 'react'
import {FcNext} from 'react-icons/fc'
import { columns } from './columns'
import ReactDOM from 'react-dom/client'

import { defaultData } from './RecentTableData'
import {
   
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
const RecentOrder = () => {
    // const columns =useMemo(()=>COLUMNS,[])
   const [data,setData] = React.useState(()=> [...defaultData])
   const rerender = React.useReducer(()=>({}),{})[1]

   const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
   })

   
  return (
    <div>
        <h4 className='text-xl font-semibold text-[#222] pb-[30px]'>Recent Orders</h4>
        <table className='border-collapse w-full xl:w-[762px]' id="order">
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id} >
                        {headerGroup.headers.map(header  => (
                            <th key={header.id} className='text-[#999999] font-normal text-sm text-left px-[10px] '>
                                {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                    
                                )
                                }
                                
                            </th>
                        ))}
                    </tr>
                ))
                    
                }
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {
                            row.getVisibleCells().map(cell => (
                                <td key={cell.id} className='px-[10px]'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>

        </table>

        <div className='pt-[30px] '>
            <button className='text-sm font-medium text-[#0099ff] flex items-center gap-1 '>View Full Orders <FcNext size={12}/></button>
        </div>
    </div>
  )
}

export default RecentOrder