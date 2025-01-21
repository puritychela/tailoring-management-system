/*
  Warnings:

  - Added the required column `waist` to the `Dress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dress" ADD COLUMN     "waist" INTEGER NOT NULL;
