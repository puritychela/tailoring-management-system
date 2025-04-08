import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCart = async (req, res) => {
  const { userId, items } = req.body;

  console.log("Received payload:", req.body); // <-- log this

  if (!userId || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Invalid cart data" });
  }

  try {
    const cart = await prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });

    for (const item of items) {
      const { productId, quantity } = item;

      console.log("Processing item:", item); // <-- log each item

      await prisma.cartItem.upsert({
        where: {
          cartId_productId: {
            cartId: cart.id,
            productId,
          },
        },
        update: { quantity },
        create: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }

    res.status(200).json({ message: "Cart items added successfully" });
  } catch (error) {
    console.error("Backend Error:", error); // <-- most important
    res.status(500).json({ error: "Error adding items to cart" });
  }
};

export const getAllCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const { userId } = req.params;

    // Fetch the cart for the given userId and populate CartItems
    const cart = await prisma.cart.findOne({ userId }).populate("cartItems");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Return the cart items
    res.status(200).json(cart.cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Server error" });
  }
};
