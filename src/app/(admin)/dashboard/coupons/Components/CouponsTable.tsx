"use client"
import React from 'react'
import DefaultTable from '@/app/(admin)/shared/Table/DefaultTable'
import { columns } from './columns'
import { defaultData } from './CouponsTableData'

const CouponsTable = () => {
  return (
    <div>
        <DefaultTable columns={columns} data={defaultData}/>
    </div>
  )
}

export default CouponsTable