/*
  Warnings:

  - You are about to drop the column `shipAddress` on the `Order` table. All the data in the column will be lost.
  - Added the required column `shipAddressLine1` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipAddressLine2` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "shipAddress",
ADD COLUMN     "shipAddressLine1" TEXT NOT NULL,
ADD COLUMN     "shipAddressLine2" TEXT NOT NULL;
