-- AlterTable
ALTER TABLE "Design" ADD COLUMN     "defaultBackgroundColorId" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "imageId" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_defaultBackgroundColorId_fkey" FOREIGN KEY ("defaultBackgroundColorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
