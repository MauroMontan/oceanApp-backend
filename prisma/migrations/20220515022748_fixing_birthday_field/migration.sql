/*
  Warnings:

  - You are about to drop the column `birtday` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "birtday",
ADD COLUMN     "birthday" TIMESTAMP(3);
