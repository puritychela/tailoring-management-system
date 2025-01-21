import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const { gender, categoryId, price, name, imageUrl, description } = req.body;
  console.log(req.body);

  try {
    const product = await prisma.product.create({
      data: {
        categoryId,
        price,
        gender,
        name,
        imageUrl,
        description,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
