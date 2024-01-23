/*
  Warnings:

  - Changed the type of `designNumber` on the `Design` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Design" DROP COLUMN "designNumber",
ADD COLUMN     "designNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Design_designNumber_key" ON "Design"("designNumber");
