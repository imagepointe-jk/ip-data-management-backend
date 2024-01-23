-- CreateTable
CREATE TABLE "Design" (
    "id" SERIAL NOT NULL,
    "designNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Draft',

    CONSTRAINT "Design_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Design_designNumber_key" ON "Design"("designNumber");
