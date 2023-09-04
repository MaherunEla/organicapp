-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "productsummary" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "salequantity" INTEGER NOT NULL,
    "solditems" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "productgallery" TEXT NOT NULL,
    "productcategoryId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productcategoryId_fkey" FOREIGN KEY ("productcategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
