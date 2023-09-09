import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { useQuery, useMutation } from "react-query";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export const GET = async (req) => {
  const coupon = await prisma.coupons.findMany();
  return NextResponse.json(coupon);
};

export async function POST(req: Request) {
  const data = await req.json();

  const res = await prisma.coupons.create({
    data: data,
  });
  return NextResponse.json(res);
}
