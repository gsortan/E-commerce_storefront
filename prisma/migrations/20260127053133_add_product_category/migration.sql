/*
  Warnings:

  - Added the required column `deliveryAddress` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "deliveryAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" TEXT NOT NULL;
