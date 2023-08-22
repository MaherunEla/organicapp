"use client"
import React,{useMemo,useState} from 'react'
import ReactDOM from 'react-dom/client'

import {COLUMNS} from './columns'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

type Person = {
    id: number,
    date: string
    product: string,
    payment: string,
    fullfillments: string,
    total: number,
    edit:string
}

const defaultData: Person[] = [
    {
    id: 1,
    date: "Aug 15,2021",
    product: "Unero Black Militery",
    payment: "Paid",
    fullfillments: "Delivered",
    total: 56.00,
    edit: "..."
    },
    {
        id: 2,
        date: "Aug 15,2021",
        product: "Unero Black Militery",
        payment: "Paid",
        fullfillments: "Delivered",
        total: 56.00,
        edit: "..."
        }
]
const columnHelper = createColumnHelper<Person>()
const columns = [
    columnHelper.accessor('id',{
        header:()=>"ID",
        cell:info=>info.getValue(),

    }),
    columnHelper.accessor('date',{
        cell:info=> <i className='font-semibold text-sm text-[#212529]'>{info.getValue()}</i>,
        header:()=><span>Date</span>,
    }),
    columnHelper.accessor('product',{
        cell:info=> <i className='font-semibold text-sm text-[#212529]'>{info.getValue()}</i>,
        header:()=>'Product'
    }),
    columnHelper.accessor('payment',{
        cell:info=> <i className='font-semibold text-sm text-[#212529]'>{info.getValue()}</i>,
        header:()=>'Payment'
    }),
    columnHelper.accessor('fullfillments',{
        cell:info=> <i className='font-semibold text-sm text-[#212529]'>{info.getValue()}</i>,
        header:()=>' Fullfillments'
    }),
    columnHelper.accessor('total',{
        header:()=> 'Total',
        cell: info=><i className='font-semibold text-sm text-[#212529]'>{info.renderValue()}</i>,

    }),
    columnHelper.accessor('edit',{
        header:()=>"",
        cell:info => info.getValue()

    })
    

]
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
        <h4 className='text-xl font-semibold text-[#222]'>Recent Orders</h4>
        <table className='border-collapse w-full xl:w-[762px]' id="order">
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id} className='h-14'>
                        {headerGroup.headers.map(header  => (
                            <th key={header.id} className='text-[#999999] font-normal text-sm text-left'>
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
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default RecentOrder