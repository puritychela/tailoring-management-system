import { PrismaClient } from "@prisma/client";
import { matchedData, validationResult } from "express-validator";

const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  const { value, name } = matchedData(req);
  console.log(req.body);
  console.log(matchedData(req));
  // 1         0 = false
  // 0           1 = false
  // 1           1 = false
  // 0           0 = true
  if (!value && !name) {
    return res.json(products);
  }

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (name && value) {
    const filterCondition = {
      ...(name && value && { name: { contains: value, mode: "insensitive" } }), // Case-insensitive search
      ...(name && value && { [name]: parseInt(value) }), // e.g., { categoryId: 1 }
    };
    console.log(filterCondition);
    const products = await prisma.product.findMany({
      where: filterCondition,
    });

    return res.json(products);
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

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { gender, categoryId, price, name, imageUrl, description } = req.body;

  try {
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        categoryId: parseInt(categoryId),
        price: parseInt(price),
        gender,
        name,
        imageUrl,
        description,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);

  const deletedProduct = await prisma.product.delete({
    where: { id },
  });

  res.sendStatus(200);
};
