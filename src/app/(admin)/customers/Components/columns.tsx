import {createColumnHelper} from '@tanstack/react-table'
import { Customers } from '../../types'

const columnHelper = createColumnHelper<Customers>()
export const columns = [
    columnHelper.accessor('id',{
        header:()=>"ID",
        cell:info=>info.getValue(),

    }),
    columnHelper.accessor('name',{
        cell:info=> <p className='tablep'>{info.getValue()}</p>,
        header:()=><span>Name</span>,
    }),
    columnHelper.accessor('phone',{
        cell:info=> <p className='tablep hover:text-[#669900] '>{info.getValue()}</p>,
        header:()=>'Phone Number'
    }),
    columnHelper.accessor('balance',{
        cell:info=> <p className='w-fit font-semibold text-sm text-[#669900] py-[6px] px-[10px] bg-[#eff4e5] rounded-[4px] '>{info.renderValue()}</p>,
        header:()=>'Balance'
    }),
    columnHelper.accessor('totalorder',{
        cell:info=> <p className='tablep'>{info.renderValue()}</p>,
        header:()=>'Total orders'
    }),
    columnHelper.accessor('created',{
        header:()=> 'Created at',
        cell: info=><p className='tablep'>${info.renderValue()}</p>,

    }),
    columnHelper.accessor('status',{
        header:()=> 'Status',
        cell: info=><p className='tablep'>${info.renderValue()}</p>,

    }),
    columnHelper.accessor('icon',{
        header:()=>"",
        cell:info => {
            const Icon = info.getValue()
            return <button><Icon size={14}/></button>
        }

    })
    

]