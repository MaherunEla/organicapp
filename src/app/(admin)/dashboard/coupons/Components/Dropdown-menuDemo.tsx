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
import { useToast } from "@/components/ui/use-toast";
export function DropdownMenuDemo(props: { id: string }) {
  const { toast } = useToast();
  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(`/api/recentorder/${id}`);
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
            <Link href={`/dashboard/Components/edit/${props.id}`}>
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <button
              onClick={() => {
                deleteCategory(props.id);
                toast({
                  title: "Product Deleted successfully ",
                });
              }}
            >
              Delete
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
