import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'

const Button = (props:{title:string}) => {
  return (
    <div className='px-[20px] py-[15px] lg:px-[39px] lg:py-[28px] bg-sea_green rounded-2xl flex items-center justify-center gap-[10px]'>
      
      <h6 className='font-roboto text-base lg:text-[20px] font-bold leading-normal text-white'>{props.title}</h6>
      <BsArrowRightShort className=' m-[2px] border rounded-full border-[#335B6B] bg-[#335B6B] text-white'/>

        
    </div>
  )
}

export default Button