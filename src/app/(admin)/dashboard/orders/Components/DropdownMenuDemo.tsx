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
import { BsDot } from "react-icons/bs";
import { DialogDemo } from "./DialogDemo";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function DropdownMenuDemo({ row }) {
  const { toast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  console.log({ row });

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
        <Button className="active:border active:border-slate-100 rounded-[10px] active:bg-slate-100">
          <IoEllipsisHorizontalOutline />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
              <DialogTrigger asChild>
                <span>view</span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Invoice</DialogTitle>
                  <DialogDescription>Hello</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Payment</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {["Paid", "Unpaid"].map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <button
                      onClick={() => {
                        ChangePaymentStatus(row.id, item);
                      }}
                    >
                      <span>{item}</span>
                    </button>
                    {item == row.payment && <BsDot size={20} />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Fullfillments</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {["Delivered", "InProgrss", "Cancel"].map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <button
                      onClick={() => {
                        ChangefullfillmentStatus(row.id, item);
                      }}
                    >
                      {item}
                    </button>
                    {item == row.fullfillment && <BsDot size={20} />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem className="flex justify-between">
            <button
              onClick={() => {
                deleteOrder(row.id);
                toast({
                  title: "Product Deleted successfully ",
                });
              }}
            >
              Delete
            </button>
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
