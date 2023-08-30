"use client";
import React from "react";
import Navbar from "../../shared/Navbar";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types";

const page = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      fullname: "",
      displayname: "",
      email: "",
      role: "",
      address: "",
      bio: "",
    },
  });
   
  const {register,handleSubmit,formState}=form;
  const {errors}=formState;
  const onSubmit = (data: FormValues)=> {
    console.log('Form submitted',data)
  };
  return (
    <div className="container">
      <Navbar title="Settings" subtitle="Account Settings" />

      <div>
        <h4 className="mb-[30px]">Account Settings</h4>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className=" w-[892px]">
            <div className=" flex gap-[20px]">
               <div className="w-full flex flex-col gap-3">
               <label htmlFor="fullname" >Full Name</label>
                <input type='text' className="w-full border border-[#ddd]  py-5" id="fullname" {...register("fullname",{required:{
                    value:true,
                    message:"Full name is required",
                }})}/><br></br>
                <p className="error">{errors.fullname?.message}</p>
               </div>
               <div className="w-full flex flex-col gap-3">
               <label htmlFor="displayname" >Display Name</label>
                <input type='text' className="w-full border border-[#ddd]  py-5" id="displayname" {...register("displayname",{required:{
                    value:true,
                    message:"Display Name name is required",
                }})}/><br></br>
                <p className="error">{errors.displayname?.message}</p>
               </div>
            </div>
          
            <div className=" flex flex-col gap-3">
               <label htmlFor="Email" >Email</label>
                <input type='text' className="w-full border border-[#ddd]  py-5" id="email" {...register("email",{required:{
                    value:true,
                    message:"Email is required",
                }})}/><br></br>
                <p className="error">{errors.email?.message}</p>
               </div>

               <div className=" flex gap-[20px]">
               <div className="w-full flex flex-col gap-3">
               <label htmlFor="Role" >Role</label>
                <input type='text' className="w-full border border-[#ddd] py-5" id="role" {...register("role",{required:{
                    value:true,
                    message:"Role name is required",
                }})}/><br></br>
                <p className="error">{errors.role?.message}</p>
               </div>
               <div className="w-full flex flex-col gap-3">
               <label htmlFor="Address" >Address</label>
                <input type='text' className="w-full border border-[#ddd]  py-5" id="address" {...register("address",{required:{
                    value:true,
                    message:"Address name is required",
                }})}/><br></br>
                <p className="error">{errors.address?.message}</p>
               </div>
            </div>

            <div className=" flex flex-col gap-3">
               <label htmlFor="bio" >Bio</label>
                <textarea 
                className="w-full border border-[#ddd] py-5" 
                id="bio"
                 rows="4"
                  cols="50" 
                  {...register("bio",{required:{
                    value:true,
                    message:"Bio is required",
                }})}/><br></br>
                <p className="error">{errors.bio?.message}</p>
               </div>

               <div className="flex justify-center items-center gap-4">
                <button className="py-[10px] px-[35px] border border-[#e5e5e5] bg-[#e5e5e5]">CANCEL</button>
                <button className="py-[10px] px-[35px] border border-[#80bc00] hover:bg-[#28a745] bg-[#80bc00] text-[#ffffff]">UPDATE PROFILE</button>
               </div>

        
        </form>
      </div>
    </div>
  );
};

export default page;
