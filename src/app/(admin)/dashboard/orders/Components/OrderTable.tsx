"use client"
import React from 'react'
import DefaultTable from '@/app/(admin)/shared/Table/DefaultTable'
import { columns } from '../../Components/columns'
import { defaultData } from '../../Components/RecentTableData'

const OrderTable = () => {
  return (
    <div>
        <DefaultTable columns={columns} data={defaultData}/>
    </div>
  )
}

export default OrderTable