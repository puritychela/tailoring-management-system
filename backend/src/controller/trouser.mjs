import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTrousers = async (req, res) => {
  try {
    const trousers = await prisma.trouser.findMany();
    res.status(200).json(trousers);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createTrouser = async (req, res) => {
  const {
    waist,
    hips,
    thigh,
    Kneel,
    leg_opening,
    height,
    description,
    userId,
  } = req.body;

  try {
    const trouser = await prisma.trouser.create({
      data: {
        waist,
        hips,
        thigh,
        Kneel,
        leg_opening,
        height,
        description,
        userId,
      },
    });
    res.status(201).json(trouser);
  } catch (error) {
    console.error("Error creating trouser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTrouser = async (req, res) => {
  const { id } = req.params; // Extract shirt ID from request parameters

  try {
    const trouser = await prisma.trouser.delete({
      where: { id: parseInt(id) }, // Ensure ID is an integer
    });

    res.status(200).json({ message: "trouser deleted successfully", trouser });
  } catch (error) {
    console.error("Error deleting trouser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTrouser = async (req, res) => {
  const { id } = req.params;
  const {
    waist,
    hips,
    thigh,
    Kneel,
    leg_opening,
    height,
    description,
    userId,
  } = req.body;

  try {
    const trouser = await prisma.trouser.update({
      where: { id: parseInt(id) },
      data: {
        waist,
        hips,
        thigh,
        Kneel,
        leg_opening,
        height,
        description,
        userId,
      },
    });
    res.status(200).json(trouser);
  } catch (error) {
    console.error("Error updating trouser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
