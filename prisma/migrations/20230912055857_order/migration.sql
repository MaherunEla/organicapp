-- CreateEnum
CREATE TYPE "Payment" AS ENUM ('Paid', 'Unpaid');

-- CreateEnum
CREATE TYPE "Fullfillment" AS ENUM ('Delivered', 'InProgrss', 'Cancel');

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "product" JSONB NOT NULL,
    "payment" "Payment" NOT NULL DEFAULT 'Unpaid',
    "fullfillment" "Fullfillment" NOT NULL DEFAULT 'InProgrss',
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
