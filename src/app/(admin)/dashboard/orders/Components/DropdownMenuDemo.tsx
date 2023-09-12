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
import { useQuery } from "@tanstack/react-query";
export function DropdownMenuDemo(props: { id: string }) {
  const { toast } = useToast();
  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(`/api/category/${id}`);
      console.log(response);
    } catch (error) {
      console.error("An error occurred while deleting the category:", error);
    }
  };
  // const fetchOrder = () => {
  //   return axios.get(`/api/order/${props.id}`);
  // };
  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery({
  //   queryKey: ["orders-data"],
  //   queryFn: fetchOrder,
  // });
  // console.log({ data });
  const deleverd = async (id) => {
    const { data } = await axios.get(`api/order/${id}`);
    console.log({ data });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <IoEllipsisHorizontalOutline />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-[100px] w-32  bg-white border-white">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className=" bg-[#e5e7eb] ">
            <Link href={`/dashboard/order/user/${props.id}`}>
              <span>view</span>
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
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Fullfilments</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className=" bg-white border-white ">
                <DropdownMenuItem>
                  <button
                    onClick={() => {
                      deleverd(props.id);
                      toast({
                        title: "Product Deleted successfully ",
                      });
                    }}
                  >
                    Deliverd
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>In Progress</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <span>Cancel</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
