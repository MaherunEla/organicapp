"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FormProduct } from "@/app/(admin)/types";
import { useState } from "react";
import axios from "axios";
import { QueryClient,useQueryClient ,useQuery} from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { uploadImages } from "../../../../../../../prisma/utilts/uploadImage";

const fetchCategory = ()=> {
  return  axios.get("/api/category")
}
const NewProducts = () => {
  const [name, setName] = useState("");
  const [summery, setSummery] = useState("");
  const [sale, setSale] = useState("");
  const [description, setDescription] = useState("");
  const [productgallery,setProductgallery] = useState("");
  const [sku,setSku] = useState("");
  const [ productcategoryId, setProductcategoryId]= useState("")
  const form = useForm<FormProduct>();
  const categoryresult = useQuery({
    queryKey:['category-data'], 
    queryFn: fetchCategory
  })
  // if(isLoading)
  // {
  //   return <h2>Loading...</h2>
  // }
  // if(isError){
  //   return <h2>{error.message}</h2>
  // }


  

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [preview,setPreview] = useState(null)
  const onSubmit = async (data: FormProduct) => {
    data.price = Number(data.price)
    console.log("Form submitted...", data);
    console.log({data});
    
    axios
      .post("http://localhost:3000/api/product", data)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  };
  console.log({preview})
  // const queryClient = useQueryClient()
  // queryClient.invalidateQueries({ queryKey: ['product-data'] })
 

  // const {isLoading, data, isError,error, isFetching} = useCategoryData(onSuccess,onError)

  const handleAddCategory = () => {

    // console.log({ name, summery,sale, description ,productgallery,sku, productcategoryId});
  };
  return (
    <div>
      

      <form onSubmit={handleSubmit(onSubmit)} noValidate >
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setSummery(e.target.value)}
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
            onChange={(e) => setSale(e.target.value)}
            {...register("price", {
              required: {
                value: true,
                message: "Sale Price is required",
              },
            })}
          />
          
        </div>
        <select {...register("productcategoryId")} className='border border-[#ddd] py-[10px] px-[20px]'>
              <option selected value="0">
                Select Category

              </option>
              {categoryresult?.data?.data?.map((item,index)=>(
                 <option value={item.id} key={index}>{item.name}</option>

              ))
             
         } 
             

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
            onChange={(e) => setDescription(e.target.value)}
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
        {preview&&<Image src={preview} width={400} height={400} alt="product"/>}
        <div className="flex flex-col gap-3 mb-4">
          <label htmlFor="name">Product Gallery</label>
          <input
            type="file"
            className="w-full border border-[#ddd]  py-3"
            id="productgallery"
            onChange={async(e) => {
              // form.setValue("productgallery",e.target.files[0])
              const file = e.target.files[0]
              console.log("files",e.target.files[0]);

              setPreview(URL.createObjectURL(e.target.files[0]));
              const { url } = await uploadImages(
                file,
                ()=>{},
                "organic"
              );
              console.log({url});
              form.setValue('productgallery',url)
              
            }}
            
            // {...register("productgallery", {
            //   required: {
            //     value: true,
            //     message: "Product gallery is required",
            //   },
            // })}
          />
          <p className="error">{errors.productgallery?.message}</p>
        </div>

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
            onClick={handleAddCategory}
          >
            ADD NEW
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProducts;