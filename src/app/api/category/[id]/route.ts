import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET = async (req, { params }) => {
  console.log(params);

  const query = await prisma.category.findUnique({
    where: { id: params?.id as string },
  });

  // console.log("user", user);
  return NextResponse.json(query);
};

export const PUT = async (req: Request, { params }) => {
  console.log(params);
  const data = await req.json();
  console.log({ data });

  const categoryupdate = await prisma.category.update({
    where: { id: params?.id as string },
    data: data,
  });

  return NextResponse.json(categoryupdate);
  // console.log("user", user);
  //const data = NextResponse.json(query);
};
export const DELETE = async (req, { params }) => {
  const prisma = new PrismaClient();
  const produtsDelete = await prisma.product.deleteMany({
    where: {
      productcategoryId: params?.id as string,
    },
  });
  const categoryDelete = await prisma.category.delete({
    where: { id: params?.id as string },
  });
  return NextResponse.json({ categoryDelete, produtsDelete });
};
