import {createColumnHelper} from '@tanstack/react-table'
import { Product } from '../../types'

const columnHelper = createColumnHelper<Product>()
export const columns = [
    columnHelper.accessor('id',{
        header:()=>"ID",
        cell:info=><p className='tablep font-normal'>{info.getValue()}</p>,
    }),
    columnHelper.accessor('name',{
        header:()=>"Name",
        cell:info=><p className='tablep hover:text-[#669900] cursor-pointer'>{info.getValue()}</p>

    }),
    columnHelper.accessor('sku',{
        header:()=>"SKU",
        cell:info=><p className='tablep font-normal'>{info.getValue()}</p>
    }),
    columnHelper.accessor('stock',{
        header:()=>"Stock",
        cell:info=><p className='w-fit tablep text-[#669900] py-[6px] px-[10px] bg-[#eff4e5] rounded-[4px]'>{info.getValue()}</p>

    }),
    columnHelper.accessor('price',{
        header:()=>"Price",
        cell:info=><p className='tablep'>£{info.renderValue().toFixed(2)}</p>
    }),
    columnHelper.accessor('categories',{
        header:()=>"Categories",
        cell:info=><p className='tablep font-normal hover:text-[#669900] cursor-pointer'>{info.getValue()}</p>
    }),
    columnHelper.accessor('date',{
        header:()=>"Date",
        cell:info=><p className='tablep font-normal'>{info.getValue()}</p>
    }),
    columnHelper.accessor('icon',{
        header:()=>"",
        cell:info =>{
            const Icon = info.getValue()
            return <button><Icon size={14}/></button>
        }
    })
]