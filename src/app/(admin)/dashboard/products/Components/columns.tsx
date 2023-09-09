import { createColumnHelper } from "@tanstack/react-table";
import { Product } from "@/app/(admin)/types";
import { DropdownMenuDemo } from "../addnewproducts/Components/DropdownMenuDemo";

const columnHelper = createColumnHelper<Product>();
export const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => <p className="tablep font-normal">{info.getValue()}</p>,
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
  columnHelper.accessor("categories", {
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
