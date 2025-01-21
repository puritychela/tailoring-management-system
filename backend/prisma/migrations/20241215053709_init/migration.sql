/*
  Warnings:

  - Added the required column `userId` to the `Dress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Shirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Skirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Trouser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Dress" DROP CONSTRAINT "Dress_id_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_id_fkey";

-- DropForeignKey
ALTER TABLE "Shirt" DROP CONSTRAINT "Shirt_id_fkey";

-- DropForeignKey
ALTER TABLE "Skirt" DROP CONSTRAINT "Skirt_id_fkey";

-- DropForeignKey
ALTER TABLE "Trouser" DROP CONSTRAINT "Trouser_id_fkey";

-- AlterTable
ALTER TABLE "Dress" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shirt" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Skirt" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Trouser" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Shirt" ADD CONSTRAINT "Shirt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dress" ADD CONSTRAINT "Dress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skirt" ADD CONSTRAINT "Skirt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trouser" ADD CONSTRAINT "Trouser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
