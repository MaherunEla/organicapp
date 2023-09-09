"use client";
import React, { FC } from "react";
import { columns } from "./columns";
import axios from "axios";

import DefaultTable from "@/app/(admin)/shared/Table/DefaultTable";

import { QueryClient, useQuery } from "@tanstack/react-query";
const fetchProduct = () => {
  return axios.get("/api/product");
};

const ProductTable = () => {
  //const [data, setData] = useState([])
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

  return <DefaultTable data={data.data} columns={columns} />;
};

export default ProductTable;
