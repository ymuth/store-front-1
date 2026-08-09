/*
  Warnings:

  - Added the required column `notes` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "prefferedDate" TIMESTAMP(3),
ALTER COLUMN "phone" DROP NOT NULL;
