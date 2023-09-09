"use client";
import React from "react";
import DefaultTable from "@/app/(admin)/shared/Table/DefaultTable";
import { columns } from "./columns";
import { defaultData } from "./CouponsTableData";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetchCoupon = () => {
  return axios.get("/api/coupon");
};
const CouponsTable = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["coupon-data"],
    queryFn: fetchCoupon,
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log({ data });
  return (
    <div>
      <DefaultTable columns={columns} data={data.data} />
    </div>
  );
};

export default CouponsTable;
