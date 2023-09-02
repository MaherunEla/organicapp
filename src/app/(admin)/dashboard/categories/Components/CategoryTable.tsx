"use client";
import DefaultTable from "@/app/(admin)/shared/Table/DefaultTable";
import React, { useEffect,useState } from "react";
import {useQuery} from 'react-query'
import { columns } from "./columns";
import { data2, defaultData } from "./CategoryTableData";
import axios from 'axios'
const fetchCategory = ()=> {
  return  axios.get("/api/category")
}
const CategoryTable = () => {
  //const [data, setData] = useState([])
  const {isLoading,data,isError,error,isFetching,refetch} = useQuery('category-data', fetchCategory)
  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  
  console.log({data})
  // useEffect(() => {
  //   axios.get("/api/category").then((res:any)=>{
  //     setData(res.data)
  //   }).catch(err=>console.log(err)
  //   )
  //   // console.log({categories});
  // }, []);

  // console.log({data});
  
  return (
    <div>
      <DefaultTable columns={columns} data={data.data} />
    </div>
  );
};

export default CategoryTable;
