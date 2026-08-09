/*
  Warnings:

  - You are about to drop the column `prefferedDate` on the `Bookings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bookings" DROP COLUMN "prefferedDate",
ADD COLUMN     "preferredDate" TIMESTAMP(3);
