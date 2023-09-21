"use client";
import React from "react";
import { ShopCardData } from "./ShopCardData";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Card from "../../Components/layout/card/Card";
import Link from "next/link";
import { products } from "../../Components/home/Components/HomeProductData";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetchProduct = () => {
  return axios.get("/api/product");
};
const ShopCard = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["product-data"],
    queryFn: fetchProduct,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log(data.data);
  return (
    <div className="container flex items-center justify-center pt-[90px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 ld:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {data.data.map((item, index) => (
          <Link href={`/shop/${item.id}`} key={index}>
            <Card item={item} key={index} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
