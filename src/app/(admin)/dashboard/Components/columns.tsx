import { createColumnHelper } from "@tanstack/react-table";
import { Order } from "../../types";
import { DropdownMenuDemo } from "../orders/Components/DropdownMenuDemo";
import { BsDot } from "react-icons/bs";

const columnHelper = createColumnHelper<Order>();
export const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => <p className="tablep font-semibold">{info.getValue()}</p>,
    header: () => <span>Date</span>,
  }),
  columnHelper.accessor("product", {
    cell: (info) => {
      const products = info.getValue();
      console.log("products", products);
      return (
        <div>
          {products.map((e, index) => (
            <span
              className="font-semibold text-base font-work_sans"
              key={index}
            >
              {e.name}({e.quantity}){", "}
            </span>
          ))}
        </div>
      );
    },
    header: () => "Products",
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
    cell: (info) => {
      const Color = info.getValue();
      console.log(Color);
      if (Color == "Delivered") {
        return (
          <p className="tablep flex items-center font-semibold ">
            <BsDot size={40} className="text-green" />
            {info.getValue()}
          </p>
        );
      }
      if (Color == "InProgress") {
        return (
          <p className="tablep flex items-center font-semibold">
            <BsDot size={40} className="text-green" />
            {info.getValue()}
          </p>
        );
      }
      if (Color == "Cancel") {
        return (
          <p className="tablep flex items-center font-semibold">
            <BsDot size={40} className="text-red-500" />
            {info.getValue()}
          </p>
        );
      } else {
        return (
          <p className="tablep flex items-center font-semibold">
            <BsDot size={40} className="text-green" />
            {info.getValue()}
          </p>
        );
      }
    },

    header: () => " Fullfillments",
  }),
  columnHelper.accessor("total", {
    header: () => "Total",
    cell: (info) => (
      <p className="tablep font-semibold">${info.renderValue().toFixed(2)}</p>
    ),
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
