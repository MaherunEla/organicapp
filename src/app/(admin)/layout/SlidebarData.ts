import {BiHome} from 'react-icons/bi';
import {BsDatabase} from 'react-icons/bs'
import {IoBagHandleOutline } from 'react-icons/io5'
import {HiOutlineUsers} from 'react-icons/hi'
import {CiPercent} from 'react-icons/ci'
import {IoNewspaperOutline} from 'react-icons/io5'
import {TbSettings} from 'react-icons/tb'
export const SlidebarData = [
    {
        id:1,
        icon:BiHome,
        title:"Dashboard",
        url:"/dashboard",
    },
    {
        id:2,
        icon:BsDatabase,
        title:"Products",
        url:"/dashboard/products",
    },
    {
        id:3,
        icon:IoBagHandleOutline,
        title:"Orders",
        url:"/dashboard/orders",
    },
    {
        id:4,
        icon:HiOutlineUsers,
        title:"Customers",
        url:"/dashboard/customers",
    },
    {
        id:4,
        icon:CiPercent,
        title:"Coupons",
        url:"/dashboard/coupons",
    },
    {
        id:5,
        icon:IoNewspaperOutline,
        title:"Categories",
        url:"/dashboard/categories",
    },
    {
        id:6,
        icon:TbSettings,
        title:"Settings",
        url:"/dashboard/settings",
    },
]