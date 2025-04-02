import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllShirts = async (req, res) => {
  try {
    const shirts = await prisma.shirt.findMany();
    res.status(200).json(shirts);
  } catch (error) {
    // console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createShirt = async (req, res) => {
  const {
    userId,
    waist,
    front_length,
    sleeve_length,
    chest,
    collar,
    description,
  } = req.body;

  try {
    const shirt = await prisma.shirt.create({
      data: {
        userId,
        waist,
        front_length,
        sleeve_length,
        chest,
        collar,
        description,
      },
    });
    res.status(201).json(shirt);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
