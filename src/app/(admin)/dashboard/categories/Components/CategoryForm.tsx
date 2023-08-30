"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { FormCategory } from '@/app/(admin)/types';
const CategoryForm = () => {
    const form = useForm<FormCategory>();
       
      const {register,handleSubmit,formState}=form;
      const {errors}=formState;
      const onSubmit = (data: FormCategory)=> {
        console.log('Form submitted',data)
      };
  return (
    <div>
    <h4 className="mb-[10px]">New Category</h4>

    <form onSubmit={handleSubmit(onSubmit)} noValidate className=" w-[300px]">
       
           <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="couponcode">ID</label>
            <input type='text' className="w-full border border-[#ddd]  py-3" id="id" {...register("id",{required:{
                value:true,
                message:"id  is required",
            }})}/>
            <p className="error">{errors.id?.message}</p>
           </div>
           <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="name" >Category Name</label>
            <input type='text' className="w-full border border-[#ddd]  py-3" id="name" {...register("name",{required:{
                value:true,
                message:"Category Name  is required",
            }})}/>
            <p className="error">{errors.name?.message}</p>
           </div>
     
      
        <div className=" flex flex-col gap-3 mb-4">
           <label htmlFor="slug" >Slug</label>
            <input type='text' className="w-full border border-[#ddd]  py-3" id="slug" {...register("slug",{required:{
                value:true,
                message:"slug is required",
            }})}/>
            <p className="error">{errors.slug?.message}</p>
           </div>

        
           <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="expaireddate" >Created</label>
            <input type='text' className="w-full border border-[#ddd] py-3" id="created" {...register("created",{required:{
                value:true,
                message:" created name is required",
            }})}/>
            <p className="error">{errors.created?.message}</p>
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

export default CategoryForm