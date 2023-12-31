"use client";
import React from "react";
import { useParams } from "next/navigation";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FormCategory } from "@/app/(admin)/types";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

import { useToast } from "@/components/ui/use-toast";

const fetchCategoryId = (id) => {
  return axios.get(`/api/category/${id}`);
};
const Page = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // const [name, setName] = useState("");
  // const [slug, setSlug] = useState("");
  // const [description, setDescription] = useState("");
  const params = useParams();
  console.log("param", params);

  const form = useForm<FormCategory>({
    defaultValues: async () => {
      const { data } = await axios.get(`/api/category/${params.id}`);

      return data;
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors, defaultValues } = formState;
  console.log({ defaultValues });

  const onSubmit = async (data: FormCategory) => {
    console.log("Form submitted...", data);
    axios
      .put(`http://localhost:3000/api/category/${params.id}`, data)
      .then((res) => {
        console.log({ res });
        queryClient.invalidateQueries({ queryKey: ["category-data"] });
      })
      .catch((err) => console.log({ err }));
  };

  // const {isLoading, data, isError,error, isFetching} = useCategoryData(onSuccess,onError)

  // const handleAddCategory = () => {
  //   console.log({ name, slug, description });
  // };
  return (
    <div className="container py-10">
      <h4 className="mb-[10px]">New Category</h4>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className=" w-[300px]">
        {/* <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="couponcode">ID</label>
            <input type='text' className="w-full border border-[#ddd]  py-3" id="id" {...register("id",{required:{
                value:true,
                message:"id  is required",
            }})}/>
            <p className="error">{errors.id?.message}</p>
           </div> */}
        <div className="flex flex-col gap-3 mb-4">
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            className="w-full border border-[#ddd]  py-3"
            id="name"
            //onChange={(e) => setName(e.target.value)}
            {...register("name", {
              required: {
                value: true,
                message: "Category Name  is required",
              },
            })}
          />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className=" flex flex-col gap-3 mb-4">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            className="w-full border border-[#ddd]  py-3"
            id="slug"
            // onChange={(e) => setSlug(e.target.value)}
            {...register("slug", {
              required: {
                value: true,
                message: "slug is required",
              },
            })}
            defaultValue={form.getValues("slug")}
          />
          <p className="error">{errors.slug?.message}</p>
        </div>

        {/* <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="expaireddate" >Created</label>
            <input type='text' className="w-full border border-[#ddd] py-3" id="created" {...register("created",{required:{
                value:true,
                message:" created name is required",
            }})}/>
            <p className="error">{errors.created?.message}</p>
           </div> */}
        <div className=" flex flex-col gap-3 mb-4">
          <label htmlFor="decription">Description</label>
          <textarea
            className="w-full border border-[#ddd] py-3"
            id="description"
            rows={6}
            cols={50}
            //onChange={(e) => setDescription(e.target.value)}
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          />

          <p className="error">{errors.description?.message}</p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-[50px]">
          <Link href="/dashboard/categories">
            <button className="py-[10px] px-[35px] border border-[#e5e5e5] bg-[#e5e5e5] uppercase">
              Back
            </button>
          </Link>

          <button
            className="py-[10px] px-[35px] border border-[#80bc00] hover:bg-[#28a745] bg-[#80bc00] text-[#ffffff] uppercase"
            onClick={() => {
              toast({
                title: "Category successfully updated ",
              });
            }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
