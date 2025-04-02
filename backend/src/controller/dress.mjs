import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllDresses = async (req, res) => {
  try {
    const dresses = await prisma.dress.findMany();
    res.status(200).json(dresses);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createDress = async (req, res) => {
  const {
    userId,
    waist,
    hips,
    bust,
    full_length,
    shoulder,
    sleeve_length,
    description,
  } = req.body;

  try {
    const dress = await prisma.dress.create({
      data: {
        userId,
        waist,
        hips,
        bust,
        full_length,
        shoulder,
        sleeve_length,
        description,
      },
    });
    res.status(201).json(dress);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
