"use client";
import React from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { toast, useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
const CouponsForm = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const schema = z.object({
    percent: z.number({
      required_error: "percent is required",
      invalid_type_error: "percent must be a number",
    }),

    currency: z.number({
      required_error: "currency is required",
      invalid_type_error: "currency must be a number",
    }),
    expired: z.date({
      required_error: "Please select a date and time",
      invalid_type_error: "That's not a date!",
    }),
    description: z.string().nonempty("description is required"),
  });
  type FormCoupon = z.infer<typeof schema>;

  const form = useForm<FormCoupon>({
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = async (data: FormCoupon) => {
    console.log("Form submitted...", data);

    axios
      .post("http://localhost:3000/api/coupon", data)
      .then((res) => {
        console.log({ res });
        queryClient.invalidateQueries({ queryKey: ["coupon-data"] });
        toast({
          title: "Category successfully updated ",
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      <h4 className="mb-[10px]">New Coupon</h4>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className=" w-full lg:w-[300px]"
      >
        {/* <div className="flex flex-col gap-3 mb-4">
          <label htmlFor="couponcode">Coupon Code</label>
          <input
            type="text"
            className="w-full border border-[#ddd]  py-3"
            id="couponcode"
            {...register("couponcode", {
              required: {
                value: true,
                message: "Coupon code  is required",
              },
            })}
          />
          <p className="error">{errors.couponcode?.message}</p>
        </div> */}
        <div className="flex flex-col gap-3 mb-4">
          <label htmlFor="percent">By Percent</label>
          <input
            type="number"
            className="w-full border border-[#ddd]  py-3"
            id="percent"
            {...register("percent", {
              valueAsNumber: true,
            })}
          />
          <p className="error">{errors.percent?.message}</p>
        </div>

        <div className=" flex flex-col gap-3 mb-4">
          <label htmlFor="currency">By Currency</label>
          <input
            type="number"
            className="w-full border border-[#ddd]  py-3"
            id="currency"
            {...register("currency", {
              valueAsNumber: true,
            })}
          />

          <p className="error">{errors.currency?.message}</p>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <label htmlFor="expired">Expired Date</label>
          <input
            type="date"
            className="w-full border border-[#ddd] py-3"
            id="expired"
            {...register("expired", {
              valueAsDate: true,
            })}
          />
          <p className="error">{errors.expired?.message}</p>
        </div>
        <div className=" flex flex-col gap-3 mb-4">
          <label htmlFor="decription">Description</label>
          <textarea
            className="w-full border border-[#ddd] py-3"
            id="description"
            rows={6}
            cols={50}
            {...register("description")}
          />

          <p className="error">{errors.description?.message}</p>
        </div>

        <div className="flex justify-between lg:justify-center items-center lg:gap-4 mt-[50px]">
          <button className="py-[10px] px-[35px] border border-[#e5e5e5] bg-[#e5e5e5] uppercase">
            RESET
          </button>
          <button className="py-[10px] px-[35px] border border-[#80bc00] hover:bg-[#28a745] bg-[#80bc00] text-[#ffffff] uppercase">
            ADD NEW
          </button>
        </div>
      </form>
    </div>
  );
};

export default CouponsForm;
