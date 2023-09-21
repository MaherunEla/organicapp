import { createColumnHelper } from "@tanstack/react-table";

import { FormCustomers } from "@/types";

const columnHelper = createColumnHelper<FormCustomers>();
export const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor("district", {
    cell: (info) => (
      <p className="tablep hover:text-[#669900] ">{info.getValue()}</p>
    ),
    header: () => "District",
  }),
  columnHelper.accessor("town", {
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
    header: () => "Town",
  }),
  columnHelper.accessor("postalcode", {
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
    header: () => "Postal Code",
  }),
  columnHelper.accessor("area", {
    header: () => "Area",
    cell: (info) => <p className="tablep">{info.renderValue()}</p>,
  }),
  columnHelper.accessor("phonenumber", {
    header: () => "Phone Number",
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
  }),

  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
  }),
  columnHelper.accessor("alternativephnnum", {
    header: () => "Alternative Number",
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
  }),
  columnHelper.accessor("ordersnote", {
    header: () => "Note",
    cell: (info) => <p className="tablep">{info.getValue()}</p>,
  }),
  // columnHelper.accessor("icon", {
  //   header: () => "",
  //   cell: (info) => {
  //     const Icon = info.getValue();
  //     const id = info.row.original.id;
  //     return <DropdownMenuDemo id={id} />;
  //   },
  // }),
];
