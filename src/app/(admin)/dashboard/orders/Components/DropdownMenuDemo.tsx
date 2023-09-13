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
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function DropdownMenuDemo(props: { id: string }) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const deleteOrder = async (id) => {
    try {
      const response = await axios.delete(`/api/order/${id}`);
      queryClient.invalidateQueries({ queryKey: ["orders-data"] });
      console.log(response);
    } catch (error) {
      console.error("An error occurred while deleting the order:", error);
    }
  };

  const ChangefullfillmentStatus = async (id, fullfillment) => {
    try {
      const response = await axios.put(`/api/order/${id}`, { fullfillment });
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["orders-data"] });
      toast({
        title: "fullfillment status change successfully ",
      });
    } catch (error) {
      console.error(
        "An error occurred while changing fullfillment status:",
        error
      );
    }
  };
  const ChangePaymentStatus = async (id, payment) => {
    try {
      const response = await axios.put(`/api/order/${id}`, { payment });
      queryClient.invalidateQueries({ queryKey: ["orders-data"] });
      console.log(response);
      toast({
        title: "Payment status change successfully ",
      });
    } catch (error) {
      console.error("An error occurred while changing payment status:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
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
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Payment</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className=" bg-white border-white ">
                {["Paid", "Unpaid"].map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <button
                      onClick={() => {
                        ChangePaymentStatus(props.id, item);
                      }}
                    >
                      {item}
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Fullfilments</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className=" bg-white border-white ">
                {["Delivered", "InProgress", "Cancel"].map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <button
                      onClick={() => {
                        ChangefullfillmentStatus(props.id, item);
                      }}
                    >
                      {item}
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <button
              onClick={() => {
                deleteOrder(props.id);
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
