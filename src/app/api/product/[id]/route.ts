import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET = async (req, { params }) => {
  console.log(params);

  const query = await prisma.product.findUnique({
    where: { id: params?.id as string },
  });

  // console.log("user", user);
  return NextResponse.json(query);
};

export const PUT = async (req: Request, { params }) => {
  console.log(params);
  const data = await req.json();
  console.log({ data });

  const productupdate = await prisma.product.update({
    where: { id: params?.id as string },
    data: data,
  });

  return NextResponse.json(productupdate);
  // console.log("user", user);
  //const data = NextResponse.json(query);
};
export const DELETE = async (req, { params }) => {
  const prisma = new PrismaClient();

  const produtsDelete = await prisma.product.delete({
    where: { id: params?.id as string },
  });
  return NextResponse.json({ produtsDelete });
};
