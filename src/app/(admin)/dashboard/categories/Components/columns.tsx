import { createColumnHelper } from "@tanstack/react-table";
import { Categories } from "@/app/(admin)/types";
import { DropdownMenuDemo } from "./Dropdown-menuDemo";

const columnHelper = createColumnHelper<Categories>();
export const columns = [
  columnHelper.accessor("id", {
    header: () => "id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    cell: (info) => <p className="tp">{info.getValue()}</p>,
    header: () => <span>Category Name</span>,
  }),
  columnHelper.accessor("slug", {
    cell: (info) => (
      <p className="tp hover:text-[#669900] ">{info.getValue()}</p>
    ),
    header: () => "Slug",
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => <p className="tp">{info.renderValue()}</p>,
    header: () => "created",
  }),
  columnHelper.accessor("icon", {
    header: () => "",
    cell: (info) => {
      const Icon = info.getValue();
      return <DropdownMenuDemo />;
    },
  }),
];
