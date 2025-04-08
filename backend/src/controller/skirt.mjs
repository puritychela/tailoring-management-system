import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllSkirts = async (req, res) => {
  try {
    const skirts = await prisma.skirt.findMany();
    res.status(200).json(skirts);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateSkirt = async (req, res) => {
  const { id } = req.params;
  const { waist, hips, skirt_length, description, userId } = req.body;

  try {
    const product = await prisma.skirt.update({
      where: { id: parseInt(id) },
      data: {
        waist,
        hips,
        skirt_length,
        description,
        userId,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createSkirt = async (req, res) => {
  const { waist, hips, skirt_length, description, userId } = req.body;

  try {
    const skirt = await prisma.skirt.create({
      data: {
        waist,
        hips,
        skirt_length,
        description,
        userId,
      },
    });
    res.status(201).json(skirt);
  } catch (error) {
    console.error("Error creating skirt:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteSkirt = async (req, res) => {
  const { id } = req.params; // Extract shirt ID from request parameters

  try {
    const deleteSkirt = await prisma.skirt.delete({
      where: { id: parseInt(id) }, // Ensure ID is an integer
    });

    res
      .status(200)
      .json({ message: "Skirt deleted successfully", deleteSkirt });
  } catch (error) {
    console.error("Error deleting Skirt:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
