-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'WORKER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'USER';
