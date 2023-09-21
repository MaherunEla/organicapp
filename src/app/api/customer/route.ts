import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { useQuery, useMutation } from "react-query";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export const GET = async (req) => {
  const customer = await prisma.customers.findMany();
  return NextResponse.json(customer);
};

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);

  const customeremail = await prisma.customers.findFirst({
    where: { email: data.email as string },
  });
  if (customeremail == null) {
    const res = await prisma.customers.create({
      data: data,
    });

    return NextResponse.json(res);
  }
}
