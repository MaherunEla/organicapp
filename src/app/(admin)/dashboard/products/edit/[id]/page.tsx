"use client";
import React from "react";
import { useParams } from "next/navigation";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FormProduct } from "@/app/(admin)/types";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { uploadImages } from "../../../../../../../prisma/utilts/uploadImage";
import { useToast } from "@/components/ui/use-toast";

const fetchCategory = () => {
  return axios.get("/api/category");
};
const Page = () => {
  const { toast } = useToast();

  // const [name, setName] = useState("");
  // const [slug, setSlug] = useState("");
  // const [description, setDescription] = useState("");
  const [images, setImages] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);

  const params = useParams();
  console.log("param", params);

  const form = useForm<FormProduct>({
    defaultValues: async () => {
      const { data } = await axios.get(`/api/product/${params.id}`);
      return data;
    },
  });

  const { register, handleSubmit, formState } = form;
  const categoryresult = useQuery({
    queryKey: ["category-data"],
    queryFn: fetchCategory,
  });
  const { errors, defaultValues } = formState;
  console.log(defaultValues?.productgallery);
  const [preview, setPreview] = useState(defaultValues?.productgallery);
  const onSubmit = async (data: FormProduct) => {
    console.log("Form submitted...", data);
    axios
      .put(`http://localhost:3000/api/product/${params.id}`, data)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  };

  console.log({ preview });

  // const {isLoading, data, isError,error, isFetching} = useCategoryData(onSuccess,onError)

  // const handleAddCategory = () => {
  //   console.log({ name, slug, description });
  // };
  return (
    <div className="container py-10">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* <div className="flex flex-col gap-3 mb-4">
           <label htmlFor="couponcode">ID</label>
            <input type='text' className="w-full border border-[#ddd]  py-3" id="id" {...register("id",{required:{
                value:true,
                message:"id  is required",
            }})}/>
            <p className="error">{errors.id?.message}</p>
           </div> */}
        <div>
          <div className="flex gap-20">
            <div>
              <div className="flex flex-col gap-3 mb-4">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="w-full border border-[#ddd]  py-3"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Product Name  is required",
                    },
                  })}
                />
                <p className="error">{errors.name?.message}</p>
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
                <label htmlFor="summery">Product Summery</label>
                <textarea
                  className="w-full border border-[#ddd] py-3"
                  id="summery"
                  rows="6"
                  cols="50"
                  {...register("productsummary", {
                    required: {
                      value: true,
                      message: "Product Summery is required",
                    },
                  })}
                />

                <p className="error">{errors.productsummary?.message}</p>
              </div>

              <div className=" flex flex-col gap-3 mb-4">
                <label htmlFor="slug">Sale Price</label>
                <input
                  type="number"
                  className="w-full border border-[#ddd]  py-3"
                  id="price"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Sale Price is required",
                    },
                  })}
                />
              </div>
              <select
                {...register("productcategoryId")}
                className="border border-[#ddd] py-[10px] px-[20px]"
              >
                <option selected value="0">
                  Select Category
                </option>
                {categoryresult?.data?.data?.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
              {/* <select {...register("productcategoryId")}>
        <option value="" disabled>
          Select category
        </option>
        <option value="41e3dc97-590f-4576-b9cf-501dd8e0bac9">cAT 1</option>
        <option value="2">Option 2</option>
      </select> */}
              <div className=" flex flex-col gap-3 mb-4">
                <label htmlFor="decription">Product Description</label>
                <textarea
                  className="w-full border border-[#ddd] py-3"
                  id="description"
                  rows="6"
                  cols="50"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Production Description is required",
                    },
                  })}
                />

                <p className="error">{errors.description?.message}</p>
              </div>
            </div>

            <div>
              {(defaultValues?.productgallery || preview) && (
                <Image
                  src={preview || defaultValues?.productgallery}
                  width={400}
                  height={400}
                  alt="product"
                />
              )}

              <input
                type="file"
                id="productgallery"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  console.log("file", file);

                  setPreview(URL.createObjectURL(file));

                  const { url } = await uploadImages(file, () => {});

                  console.log({ url });
                  form.setValue("productgallery", url);
                }}

                // {...register("productgallery", {
                //   required: {
                //     value: true,
                //     message: "Product gallery is required",
                //   },
                // })}
              />
              <p className="error">{errors.productgallery?.message}</p>

              {/* <div className="flex flex-col gap-3 mb-4">
                <label htmlFor="name">Product Gallery</label>
                <UploadButton<OurFileRouter>
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    if (res) {
                      setImages(res);
                      const json = JSON.stringify;
                      // Do something with the response
                      console.log(json);

                      // alert("Upload Completed");
                    }
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div> */}

              <div className="flex flex-col gap-3 mb-4">
                <label htmlFor="name">SKU</label>
                <input
                  type="text"
                  className="w-full border border-[#ddd]  py-3"
                  id="sku"
                  onChange={(e) => setSku(e.target.value)}
                  {...register("sku", {
                    required: {
                      value: true,
                      message: "SKU is required",
                    },
                  })}
                />
                <p className="error">{errors.sku?.message}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-[50px]">
          <Link href="/dashboard/products">
            <button className="py-[10px] px-[35px] border  bg-[#222] hover:bg-[#28a745] text-white uppercase">
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
            ADD NEW
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
