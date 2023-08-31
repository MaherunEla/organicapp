import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async (req) => {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
};
