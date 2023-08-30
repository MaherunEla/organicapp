"use client"
import DefaultTable from '@/app/(admin)/shared/Table/DefaultTable'
import React from 'react'
import { columns } from './columns'
import { defaultData } from './CategoryTableData'

const CategoryTable = () => {
  return (
    <div>
        <DefaultTable columns={columns} data={defaultData}/>

    </div>
  )
}

export default CategoryTable