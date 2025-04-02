import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await prisma.category.create({
      data: { name },
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Category creation failed" });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};
