/*
  Warnings:

  - You are about to drop the column `name` on the `Log` table. All the data in the column will be lost.
  - Added the required column `model` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `operation` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "name",
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "operation" TEXT NOT NULL;
