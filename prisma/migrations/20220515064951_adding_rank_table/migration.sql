-- CreateTable
CREATE TABLE "SeasonsRank" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "prizes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatetedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeasonsRank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SeasonsRank_email_key" ON "SeasonsRank"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SeasonsRank_username_key" ON "SeasonsRank"("username");
