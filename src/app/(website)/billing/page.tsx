"use client";
import { useToast } from "@/components/ui/use-toast";
import HeroSection from "../Components/Shared/HeroSection";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormCustomers } from "@/types";
import axios from "axios";

const Page = () => {
  const backgroundimg = "/assets/images/Home/BannerShopS.jpg";
  const { toast } = useToast();
  const [inputValue, setInputValue] = useState("");
  const form = useForm<FormCustomers>();
  const { register, handleSubmit, formState } = form;
  const onSubmit = async (data: FormCustomers) => {
    console.log("Form submitted...", data);
    console.log({ data });

    axios
      .post("http://localhost:3000/api/customer", data)
      .then((res) => {
        console.log({ res });
        toast({
          title: "customer successfully updated ",
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      <div className="pb-32">
        <HeroSection title="Billing Details" backgroundimg={backgroundimg} />
      </div>

      <div className="container bg-[#FAFAFA] rounded-[8px] p-[68px]">
        <h5 className="pb-[11px]">Billing Details</h5>
        <hr className="w-full h-[1px] bg-gray"></hr>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full xl:w-[1129px] flex flex-col gap-[20px] py-[78px] xl:gap-[50px] "
        >
          <div className="w-full  flex flex-col xl:flex-row gap-[106px]">
            <div className="w-full">
              <label htmlFor="name">
                <p className="font-normal text-xl font-roboto pb-[26px]">
                  Full Name*
                </p>
              </label>
              <input
                type="text"
                className="w-full font-roboto text-lg italic font-normal h-[60px] border border-[#D4D4D4] rounded-[4px]"
                {...register("name", {
                  required: {
                    value: true,
                    message: " Name  is required",
                  },
                })}
              />
            </div>

            <div className="w-full">
              <label htmlFor="district">
                <p className="font-normal text-xl font-roboto  pb-[26px]">
                  District*
                </p>
              </label>
              <input
                type="text"
                className="w-full h-[60px] px-5 font-roboto text-lg italic font-normal border border-[#D4D4D4] rounded-[4px]"
                {...register("district", {
                  required: {
                    value: true,
                    message: "district Name  is required",
                  },
                })}
              />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-[106px]">
            <div className="w-full">
              <label htmlFor="town">
                <p className="font-normal text-xl font-roboto  pb-[26px]">
                  Town/City*
                </p>
              </label>
              <input
                type="text"
                className="w-full h-[60px] px-5 font-roboto text-lg italic font-normal border border-[#D4D4D4] rounded-[4px]"
                {...register("town", {
                  required: {
                    value: true,
                    message: "Product Name  is required",
                  },
                })}
              />
            </div>

            <div className="w-full">
              <label htmlFor="postalcode">
                <p className="font-normal text-xl font-roboto  pb-[26px]">
                  Postal code*
                </p>
              </label>
              <input
                type="text"
                className="w-full h-[60px] px-5 font-roboto text-lg italic font-normal border border-[#D4D4D4] rounded-[4px]"
                {...register("postalcode", {
                  required: {
                    value: true,
                    message: "postalcode is required",
                  },
                })}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-[106px]">
            <div className="w-full">
              <label htmlFor="area">
                <p className="font-normal text-xl font-roboto  pb-[26px]">
                  Area*
                </p>
              </label>
              <input
                type="text"
                className="w-full h-[60px] px-5 font-roboto text-lg italic font-normal border border-[#D4D4D4] rounded-[4px]"
                {...register("area", {
                  required: {
                    value: true,
                    message: "Area is required",
                  },
                })}
              />
            </div>

            <div className="w-full">
              <label htmlFor="phonenumber">
                <p className="font-normal text-xl font-roboto  pb-[26px]">
                  Phone Number*
                </p>
              </label>
              <input
                type="text"
                className="w-full h-[60px] px-5 font-roboto text-lg italic font-normal border border-[#D4D4D4] rounded-[4px]"
                {...register("phonenumber", {
                  required: {
                    value: true,
                    message: "phonenumber  is required",
                  },
                })}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-[106px]">
            <div className="w-full">
              <label htmlFor="email">
                <p className="font-normal text-xl font-roboto  pb-[26px]">
                  Email Address*
                </p>
              </label>
              <input
                type="text"
                className="w-full h-[60px] px-5 font-roboto text-lg italic font-normal border border-[#D4D4D4] rounded-[4px]"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email  is required",
                  },
                })}
              />
            </div>

            <div className="w-full">
              <label htmlFor="alternativephnnum">
                <p className="font-normal text-xl font-roboto pb-[26px]">
                  Alternative phone NUmber*
                </p>
              </label>
              <input
                type="text"
                className="w-full h-[60px] px-5 font-roboto text-lg italic font-normal border border-[#D4D4D4] rounded-[4px]"
                {...register("alternativephnnum", {
                  required: {
                    value: true,
                    message: "alternativephnnum is required",
                  },
                })}
              />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="textArea">
              <p className="font-normal text-xl font-roboto  pb-[26px]">
                Orders not (Optional)*
              </p>
            </label>
            <textarea
              id="textArea"
              className=" p-1 w-full font-roboto text-lg italic font-normal border border-[#D4D4D4] rounded-[4px] h-[247px]"
              rows={30}
              cols={50}
              {...register("ordersnote")}
            ></textarea>
          </div>
          <div className="w-[220px] flex items-center justify-center">
            <button
              type="submit"
              className="w-full py-[28px] text-white border bg-sea_green rounded-[16px] font-robot text-xl  font-bold"
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
