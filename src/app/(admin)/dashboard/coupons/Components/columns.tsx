import {createColumnHelper} from '@tanstack/react-table'
import { Coupons } from '@/app/(admin)/types'

const columnHelper = createColumnHelper<Coupons>()
export const columns = [
    columnHelper.accessor('code',{
        header:()=>"Code",
        cell:info=>info.getValue(),

    }),
    columnHelper.accessor('percent',{
        cell:info=><p className='tp'>{info.getValue()}%</p>,
        header:()=><span>Percent</span>,
    }),
    columnHelper.accessor('currency',{
        cell:info=> <p className='tp hover:text-[#669900] '>${info.getValue().toFixed(2)}</p>,
        header:()=>'Currency'
    }),
    columnHelper.accessor('created',{
        cell:info=> <p className='tp'>{info.renderValue()}</p>,
        header:()=>'Balance'
    }),
    columnHelper.accessor('status',{
        cell:info=> <p className='w-fit tablep text-[#666666] py-[6px] px-[10px] font-semibold border border-[#e9e9e9] rounded-[4px] bg-[#e9e9e9]'>{info.renderValue()}</p>,
        header:()=>'Total orders'
    }),
    columnHelper.accessor('icon',{
        header:()=>"",
        cell:info => {
            const Icon = info.getValue()
            return <button><Icon size={14}/></button>
        }

    })
    

]