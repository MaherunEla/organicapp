import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'

const ButtonD = (props:{title:string}) => {
  return (
    <div className='px-[39px] py-[28px] bg-white border border-sea_green rounded-2xl flex items-center justify-center gap-[10px]'>
      
      <h6 className='font-roboto text-[20px] font-bold leading-normal text-sea_green'>{props.title}</h6>
      <BsArrowRightShort className=' m-[2px] border rounded-full border-[#335B6B] bg-[#335B6B] text-white'/>

        
    </div>
  )
}

export default ButtonD