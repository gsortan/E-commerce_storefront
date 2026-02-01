/*
  Warnings:

  - You are about to drop the column `deliveryAddress` on the `Order` table. All the data in the column will be lost.
  - Added the required column `shipAddress` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipCity` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipCountry` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipPostalCode` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipRegion` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deliveryAddress",
ADD COLUMN     "shipAddress" TEXT NOT NULL,
ADD COLUMN     "shipCity" TEXT NOT NULL,
ADD COLUMN     "shipCountry" TEXT NOT NULL,
ADD COLUMN     "shipName" TEXT NOT NULL,
ADD COLUMN     "shipPostalCode" TEXT NOT NULL,
ADD COLUMN     "shipRegion" TEXT NOT NULL;
