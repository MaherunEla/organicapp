"use client"

import 'src/app/styles/style.css'
import { Work_Sans } from 'next/font/google'
import { ReactElement } from 'react'
import { Provider } from 'react-redux/es/exports'
import { store } from '../redux_store/store'
import Sidebar from './layout/Sidebar'



const work_sans= Work_Sans({
  subsets:['latin'],
  weight:['400','600','500','700'],
  variable:"--work_sans"
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }:{children:ReactElement}) {
  return (
    <html lang="en">
      <body className={`${work_sans.variable} `}>
       <div className='flex '>

       <Sidebar />
       <div className='flex-1'>
       {children}

       </div>
        

       </div>
       
      
        </body>
    </html>
  )
}