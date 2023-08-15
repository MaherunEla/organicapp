
import Subscribe from '@/Components/Shared/Subscribe'
import Image from 'next/image'
import React from 'react'
import CheckOutHero from './components/CheckOutHero'

const page = () => {
  return (
    <div>
      <CheckOutHero/>
        <div className='container flex items-center justify-center py-[73px]'>
            <div className='w-[705px] h-[216px] border rounded-lg border-white shadow-2xl flex flex-row items-center justify-center gap-[30px]'>
                <div className='w-[164px] h-[164px] relative'>
                    <Image src='/assets/images/Home/changelog.jpg' fill alt="changelog"/>
                </div>
                <div className='flex flex-row items-center justify-center gap-[15px]'>
                <h3>V.1</h3>
                <p className='text-dark_gray'>Initial Organick Webflow Template Release</p>

                </div>
               

            </div>

        </div>
        <Subscribe/>
    </div>
  )
}

export default page