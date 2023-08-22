import Image from 'next/image'
import React from 'react'
import {ImExit} from 'react-icons/im'

const Sidebar = () => {
  return (
    <div className='w-[375px] bg-[#f1f2f6] pl-[60px] py-[60px] pr-[30px]'>
      <div className='flex items-center justify-between mb-[80px]'>
        <div className='flex items-center justify-center gap-[10px]'>
          <div className='w-[50px] h-[50px] relative'>
            <Image 
            className='rounded-full'
            src="/assets/images/admin/admin.jpg" fill alt="admin pic" />
          </div>
          <div>
            <p className='text-[#666666] text-sm leading-5'>Hello,</p>
            <p className='font-semibold text-lg text-[#222]'>Soho Store</p>
          </div>

        </div>
        <ImExit className="text-[#666666]" size={20} />

      </div>

      <div className='pb-[70px]'>
        <p className='font-semibold text-base text-[#666666] tracking-wide'>Earning</p>
        <h3 className='text-3xl text-[#222] font-bold pb-[50px]'>$12,560.55</h3>
        <hr className=' bg-[#ddd] opacity-25'></hr>
      </div>
      <div className='flex '>
        {
          
        }


      </div>
      

    </div>
  )
}

export default Sidebar