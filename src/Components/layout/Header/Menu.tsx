import React from 'react'
import Link from 'next/link'
import {IoIosArrowDown} from 'react-icons/io'
import { Data, SubMenuData } from './HeaderData'

const Menu:React.FC<{showPageMenu:boolean,setShowPageMenu:any}> = ({showPageMenu, setShowPageMenu}) => {
    
  return (
    <ul className='hidden md:flex items-center gap-8 font-roboto text-xl font-bold leading-normal text-sea_green '>
        {
            Data.map((item)=>{
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li 
                            className='cursor-pointer flex items-center gap-2 relative' 
                            onMouseEnter={()=> setShowPageMenu(true)}
                            onMouseLeave={()=> setShowPageMenu(false)}
                            >
                                {item.name}
                                <IoIosArrowDown size={16}/>

                                {showPageMenu && (
                                    <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 text-lg text-sea_green shadow-lg'>
                                        {SubMenuData.map((submenu)=>{
                                            return (
                                                <Link href={submenu.url} key={submenu.id}>
                                                    <li className='h-14 px-4 flex justify-between items-center hover:bg-black/[0.03] rounded-md'>
                                                        {submenu.name}

                                                    </li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )}

                            </li>
                        ): (
                            <li className='cursor-pointer'>
                                <Link href={item?.url}>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                )
            })
        }

    </ul>
  )
}

export default Menu