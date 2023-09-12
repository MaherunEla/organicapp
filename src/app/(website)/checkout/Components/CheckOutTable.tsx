"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useAppDispatch, useAppSelector } from "@/app/redux_store/store";
import Image from "next/image";
import {
  addQuantity,
  decrementQuantity,
  removeCart,
} from "@/app/redux_store/cartAddSlice";
import axios from "axios";
import { toast, useToast } from "@/components/ui/use-toast";
const CheckOutTable = () => {
  const { toast } = useToast();
  const cart = useAppSelector((state) => state?.cart?.products);
  console.log(cart);

  const total = cart.reduce(
    (sum, item) => sum + item.discount * item.quantity,
    0
  );
  const handleCheckout = async () => {
    console.log("cart data", cart);
    const data = {
      product: cart,
      total,
    };
    axios
      .post("/api/order", data)
      .then((res) => {
        console.log({ res });
        toast({
          title: "Category Add successfully  ",
        });
      })
      .catch((err) => console.log({ err }));
  };
  const dispatch = useAppDispatch();
  return (
    <div className="container flex flex-col items-center justify-center pt-[134px] ">
      <table className="table-auto w-[1400px] border-collapse mb-20 ">
        <thead className="text-lg font-normal text-sea_green font-open_sen">
          <tr>
            <th className="border border-gray ">Products</th>
            <th className="border border-gray">Price</th>
            <th className="border border-gray">Quantity</th>
            <th className="border border-gray">Subtotal</th>
            <th className="border border-gray"></th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 &&
            cart?.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray ">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center">
                      <div className="w-[124px] h-[138px] relative">
                        <Image src={item.images} fill alt="product" />
                      </div>
                      <p className="text-sea_green font-roboto text-[22px] font-normal ">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-sea_green font-roboto text-[22px] font-normal border border-gray text-center">
                  {item.discount}
                </td>
                <td className="border border-gray ">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-between w-[171px] h-[51px] bg-very_light_green rounded-full p-1">
                      <button
                        disabled={item.quantity === 1}
                        onClick={() => {
                          dispatch(decrementQuantity(item.id));
                        }}
                        className="w-[44px] h-[43px] rounded-full border border-white bg-white"
                      >
                        -
                      </button>
                      <p className="text-sea_green font-roboto text-[22px] font-medium">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() => {
                          dispatch(addQuantity(item.id));
                        }}
                        className="w-[44px] h-[43px] rounded-full border border-white bg-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td className="text-sea_green font-roboto text-[22px] font-medium border border-gray text-center"></td>
                <td className="border border-gray">
                  <button
                    onClick={() => {
                      dispatch(removeCart(item.id));
                    }}
                    className="flex items-center justify-center px-10"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                </td>
              </tr>
            ))}

          <tr>
            <td></td>
            <td></td>
            <td className="text-sea_green font-roboto text-[22px] font-medium text-center">
              Total Price
            </td>
            <td className="text-sea_green font-roboto text-[22px] font-medium text-center ">
              {total}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="px-[20px] py-[15px] lg:px-[39px] lg:py-[28px] bg-sea_green rounded-2xl ">
        <button
          onClick={handleCheckout}
          className="font-roboto text-base lg:text-[20px] font-bold leading-normal text-white"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOutTable;
