import { createColumnHelper } from "@tanstack/react-table";
import { Product } from "@/app/(admin)/types";
import { DropdownMenuDemo } from "../addnewproducts/Components/DropdownMenuDemo";
import Image from "next/image";

const columnHelper = createColumnHelper<Product>();
export const columns = [
  // columnHelper.accessor("id", {
  //   header: () => "ID",
  //   cell: (info) => <p className="tablep font-normal">{info.getValue()}</p>,
  // }),
  columnHelper.accessor("productgallery", {
    header: () => "Image",
    cell: (info) => {
      const image = info.getValue();
      return (
        <div>
          <Image src={image} height={60} width={60} alt="product" />
        </div>
      );
    },
  }),

  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => (
      <p className="tablep hover:text-[#669900] cursor-pointer">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("sku", {
    header: () => "SKU",
    cell: (info) => <p className="tablep font-normal">{info.getValue()}</p>,
  }),
  columnHelper.accessor("stock", {
    header: () => "Stock",
    cell: (info) => (
      <p className="w-fit tablep text-[#669900] py-[6px] px-[10px] bg-[#eff4e5] rounded-[4px]">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("price", {
    header: () => "Price",
    cell: (info) => <p className="tablep">£{info.renderValue().toFixed(2)}</p>,
  }),
  columnHelper.accessor("discountprice", {
    header: () => "Discount Price",
    cell: (info) => <p className="tablep">£{info.renderValue().toFixed(2)}</p>,
  }),
  columnHelper.accessor("productcategory.name", {
    header: () => "Categories",
    cell: (info) => (
      <p className="tablep font-normal hover:text-[#669900] cursor-pointer">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("createdAt", {
    header: () => "Date",
    cell: (info) => <p className="tablep font-normal">{info.renderValue()}</p>,
  }),
  columnHelper.accessor("icon", {
    header: () => "",
    cell: (info) => {
      const Icon = info.getValue();
      const id = info.row.original.id;
      return <DropdownMenuDemo id={id} />;
    },
  }),
];
