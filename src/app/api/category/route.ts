import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { useQuery, useMutation } from "react-query";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export const GET = async (req) => {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
};

export async function POST(req: Request) {
  const data = await req.json();

  const res = await prisma.category.create({
    data: data,
  });
  return NextResponse.json(res);
}
