import { Fullfillment, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET = async (req, { params }) => {
  console.log(params);

  const query = await prisma.order.findUnique({
    where: { id: params?.id as string },
  });

  // console.log("user", user);
  return NextResponse.json(query);
};

export const PUT = async (req: Request, { params }) => {
  const data = await req.json();
  console.log(data);

  const updatefullfilment = await prisma.order.update({
    where: { id: params?.id as string },
    data: data,
  });

  return NextResponse.json(updatefullfilment);
};
export const DELETE = async (req, { params }) => {
  const prisma = new PrismaClient();

  const OrderDelete = await prisma.order.delete({
    where: { id: params?.id as string },
  });
  return NextResponse.json({ OrderDelete });
};
