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
import { DELETE } from "@/app/api/category/[id]/route";

export function DropdownMenuDemo(props: { id: string }) {
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
            <Link href={`/dashboard/categories/${props.id}`}>
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span onClick={() => DELETE(props.id)}>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
