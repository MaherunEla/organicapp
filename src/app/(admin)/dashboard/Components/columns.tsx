import { createColumnHelper } from "@tanstack/react-table";
import { Order } from "../../types";

const columnHelper = createColumnHelper<Order>();
export const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
    header: () => <span>Date</span>,
  }),
  columnHelper.accessor("product", {
    cell: (info) => {
      const products = info.getValue();
      console.log(products.name);
    },
    header: () => "Product",
  }),
  columnHelper.accessor("payment", {
    cell: (info) => (
      <p className="w-fit font-semibold text-sm text-[#669900] py-[6px] px-[10px] bg-[#eff4e5] rounded-[4px] ">
        {info.getValue()}
      </p>
    ),
    header: () => "Payment",
  }),
  columnHelper.accessor("fullfillment", {
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
    header: () => " Fullfillments",
  }),
  columnHelper.accessor("total", {
    header: () => "Total",
    cell: (info) => <p className="tablep">${info.renderValue().toFixed(2)}</p>,
  }),
];
