/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Coupons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coupons" DROP COLUMN "createdAt",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "expired" TIMESTAMP(3),
ADD COLUMN     "status" TEXT;
