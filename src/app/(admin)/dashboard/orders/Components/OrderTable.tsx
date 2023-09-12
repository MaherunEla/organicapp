"use client";
import React from "react";
import DefaultTable from "@/app/(admin)/shared/Table/DefaultTable";
import { columns } from "../../Components/columns";
import { defaultData } from "../../Components/RecentTableData";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
const fetchOrder = async () => {
  const { data } = await axios.get("/api/order");
  return data;
};
const OrderTable = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ["orders-data"],
    queryFn: fetchOrder,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <DefaultTable columns={columns} data={data} />
    </div>
  );
};

export default OrderTable;
