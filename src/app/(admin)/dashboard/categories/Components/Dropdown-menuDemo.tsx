"use client";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import Link from "next/link";
import axios from "axios";

export function DropdownMenuDemo(props: { id: string }) {
  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(`/api/category/${id}`);
      console.log(response);
    } catch (error) {
      console.error("An error occurred while deleting the category:", error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <IoEllipsisHorizontalOutline />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-[100px] w-32  bg-white">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className=" bg-[#e5e7eb] ">
            <Link href={`/dashboard/categories/edit/${props.id}`}>
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span onClick={() => deleteCategory(props.id)}>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
