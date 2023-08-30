"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { FormCoupons } from '@/app/(admin)/types';
const CouponsForm = () => {
    const form = useForm<FormCoupons>();
       
      const {register,handleSubmit,formState}=form;
      const {errors}=formState;
      const onSubmit = (data: FormCoupons)=> {
        console.log('Form submitted',data)
      };
  return (
    <div>
    <h4 className="mb-[10px]">New Coupon</h4>

    <form onSubmit={handleSubmit(onSubmit)} noValidate className=" w-[300px]">
       
           <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="couponcode">Coupon Code</label>
            <input type='text' className="w-full border border-[#ddd]  py-3" id="couponcode" {...register("couponcode",{required:{
                value:true,
                message:"Coupon code  is required",
            }})}/>
            <p className="error">{errors.couponcode?.message}</p>
           </div>
           <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="bypercent" >By Percent</label>
            <input type='text' className="w-full border border-[#ddd]  py-3" id="bypercent" {...register("bypercent",{required:{
                value:true,
                message:"bypercent  is required",
            }})}/>
            <p className="error">{errors.bypercent?.message}</p>
           </div>
     
      
        <div className=" flex flex-col gap-3 mb-4">
           <label htmlFor="bycurrency" >By Currency</label>
            <input type='text' className="w-full border border-[#ddd]  py-3" id="bycurrency" {...register("bycurrency",{required:{
                value:true,
                message:"bycurrency is required",
            }})}/>
            <p className="error">{errors.bycurrency?.message}</p>
           </div>

        
           <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="expaireddate" >Expired Date</label>
            <input type='text' className="w-full border border-[#ddd] py-3" id="expaireddate" {...register("expireddate",{required:{
                value:true,
                message:" expireddate name is required",
            }})}/>
            <p className="error">{errors.expireddate?.message}</p>
           </div>
           <div className=" flex flex-col gap-3 mb-4">
           <label htmlFor="decription" >Description</label>
           <textarea 
                className="w-full border border-[#ddd] py-3" 
                id="description"
                 rows="6"
                  cols="50" 
                  {...register("description",{required:{
                    value:true,
                    message:"Description is required",
                }})}/>
                
            <p className="error">{errors.description?.message}</p>
           </div>
     

       

           <div className="flex justify-center items-center gap-4 mt-[50px]">
            <button className="py-[10px] px-[35px] border border-[#e5e5e5] bg-[#e5e5e5] uppercase">RESET</button>
            <button className="py-[10px] px-[35px] border border-[#80bc00] hover:bg-[#28a745] bg-[#80bc00] text-[#ffffff] uppercase">ADD NEW</button>
           </div>

    
    </form>
  </div>
  )
}

export default CouponsForm