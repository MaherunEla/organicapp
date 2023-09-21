"use client";
import React from "react";
import DefaultTable from "@/app/(admin)/shared/Table/DefaultTable";
import { columns } from "./columns";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetchCustomer = () => {
  return axios.get("/api/customer");
};

const CustomerTable = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["customer-data"],
    queryFn: fetchCustomer,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log(data.data);

  return (
    <div>
      <DefaultTable columns={columns} data={data.data} />
    </div>
  );
};

export default CustomerTable;
