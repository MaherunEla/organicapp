import {createColumnHelper} from '@tanstack/react-table'
import { Person } from '../../types'

const columnHelper = createColumnHelper<Person>()
export const columns = [
    columnHelper.accessor('id',{
        header:()=>"ID",
        cell:info=>info.getValue(),

    }),
    columnHelper.accessor('date',{
        cell:info=> <p className='tablep'>{info.getValue()}</p>,
        header:()=><span>Date</span>,
    }),
    columnHelper.accessor('product',{
        cell:info=> <p className='tablep hover:text-[#669900] '>{info.getValue()}</p>,
        header:()=>'Product'
    }),
    columnHelper.accessor('payment',{
        cell:info=> <p className='w-fit font-semibold text-sm text-[#669900] py-[6px] px-[10px] bg-[#eff4e5] rounded-[4px] '>{info.getValue()}</p>,
        header:()=>'Payment'
    }),
    columnHelper.accessor('fullfillments',{
        cell:info=> <p className='tablep'>{info.getValue()}</p>,
        header:()=>' Fullfillments'
    }),
    columnHelper.accessor('total',{
        header:()=> 'Total',
        cell: info=><p className='tablep'>${info.renderValue().toFixed(2)}</p>,

    }),
    columnHelper.accessor('icon',{
        header:()=>"",
        cell:info => {
            const Icon = info.getValue()
            return <button><Icon size={14}/></button>
        }

    })
    

]