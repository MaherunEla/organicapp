import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async (req) => {
  const users = await prisma.user.create({
    data: {
      name: "ela",
      email: "ela@gmail.com",
      age: 23,
      UserPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
  });
  return NextResponse.json(users);
};
