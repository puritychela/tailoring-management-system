-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shirt" (
    "id" SERIAL NOT NULL,
    "waist" INTEGER NOT NULL,
    "sleeve_length" INTEGER NOT NULL,
    "collar" INTEGER NOT NULL,
    "chest" INTEGER NOT NULL,
    "front_length" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Shirt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dress" (
    "id" SERIAL NOT NULL,
    "hips" INTEGER NOT NULL,
    "waist" INTEGER NOT NULL,
    "bust" INTEGER NOT NULL,
    "full_length" INTEGER NOT NULL,
    "shoulder" INTEGER NOT NULL,
    "sleeve_length" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Dress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skirt" (
    "id" SERIAL NOT NULL,
    "waist" INTEGER NOT NULL,
    "hips" INTEGER NOT NULL,
    "skirt_length" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Skirt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trouser" (
    "id" SERIAL NOT NULL,
    "waist" INTEGER NOT NULL,
    "hips" INTEGER NOT NULL,
    "thigh" INTEGER NOT NULL,
    "Kneel" INTEGER NOT NULL,
    "leg_opening" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Trouser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Shirt" ADD CONSTRAINT "Shirt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dress" ADD CONSTRAINT "Dress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skirt" ADD CONSTRAINT "Skirt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trouser" ADD CONSTRAINT "Trouser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
