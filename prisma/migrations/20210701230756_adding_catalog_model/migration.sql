/*
  Warnings:

  - Added the required column `catalogId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "catalogId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Catalog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Category" ADD FOREIGN KEY ("catalogId") REFERENCES "Catalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
