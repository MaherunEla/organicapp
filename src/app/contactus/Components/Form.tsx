"use client"
import React from 'react'
import { useState } from 'react';

const Form : React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    console.log('Form submited' ,inputValue);
  }
  return (
    <div className='container flex items-center justify-center '>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-[50px] ' >
       <div className='flex gap-5'>
        <div className=' max-w-[569px]'>
          
       <label ><p className='font-semibold pb-[26px]'>Full Name*</p></label>
        <input type="text" className='font-roboto text-lg italic font-normal pl-[23px] py-[28px]  pr-[300px] border border-green rounded-[16px]' placeholder='Your Name Here' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} required />
        </div>

        <div className='max-w-[569px]'>
          
          <label ><p className='font-semibold pb-[26px]'>Your Email*</p></label>
           <input type="text" className='font-roboto text-lg italic font-normal pl-[23px] py-[28px]  pr-[300px] border border-green rounded-[16px]' placeholder='example@yourmail.com' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} required />
           </div>
        
        
        
         
       </div>

       <div className='flex gap-5'>
        <div className=' max-w-[569px]'>
          
       <label ><p className='font-semibold pb-[26px]'>Company*</p></label>
        <input type="text" className='font-roboto text-lg italic font-normal pl-[23px] py-[28px]  pr-[300px] border border-green rounded-[16px]' placeholder='yourcompany name here' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} required />
        </div>

        <div className='max-w-[569px]'>
          
          <label ><p className='font-semibold pb-[26px]'>Subject*</p></label>
           <input type="text" className='font-roboto text-lg italic font-normal pl-[23px] py-[28px]  pr-[300px] border border-green rounded-[16px]' placeholder='how can we help' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} required />
           </div>
        
        
        
         
       </div>

       <div className='max-w-[1138px]'>
        <label htmlFor='textArea'><p className='font-semibold pb-[26px]'>Message*</p></label>
        <textarea 
        id="textArea"
         className='pt-[28px] pl-[23px]  w-full font-roboto text-lg italic font-normal border border-green rounded-[16px] h-[247px]' 
         rows={30}
         cols={50}

         value={inputValue} 
         placeholder='hello there,i would like to talk about how to...'
          onChange={(e)=>setInputValue(e.target.value)} required> 

        </textarea>


        
       </div>
       <div className='w-[220px] flex items-center justify-center'>
       <button type="submit" className='w-full py-[28px] text-white border bg-sea_green rounded-[16px] font-robot text-xl  font-bold'>Send Message</button>

       </div>
       
      </form>
      
    </div>
  )
}

export default Form