"use client";
import React, { FC } from "react";
import { columns } from "./columns";
import axios from "axios";

import DefaultTable from "@/app/(admin)/shared/Table/DefaultTable";
import { defaultData } from "./ProductTableData";
import { useQuery } from "@tanstack/react-query";
const fetchCategory = ()=> {
  return  axios.get("/api/product")
}

  
const ProductTable = () => {
  //const [data, setData] = useState([])
  const {isLoading,data,isError,error,isFetching,refetch} = useQuery({
    queryKey:['product-data'], 
    queryFn: fetchCategory
  })
  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  
  console.log({data})
  
  return (
    <DefaultTable columns={columns} data={data}/>
  );
};

export default ProductTable;