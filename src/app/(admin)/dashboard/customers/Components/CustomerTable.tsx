"use client"
import React from 'react'
import DefaultTable from '@/app/(admin)/shared/Table/DefaultTable'
import { columns } from './columns'
import { defaultData } from './CustomerTableData'

const CustomerTable = () => {
  return (
    <div>
        <DefaultTable columns={columns} data={defaultData}/>
    </div>
  )
}

export default CustomerTable