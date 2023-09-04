/*
  Warnings:

  - You are about to drop the column `salequantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `solditems` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "salequantity",
DROP COLUMN "solditems";
