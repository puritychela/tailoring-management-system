export const createCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const cart = await prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });

    await prisma.cartItem.upsert({
      where: { cartId_productId: { cartId: cart.id, productId } },
      update: { quantity },
      create: { cartId: cart.id, productId, quantity },
    });

    res.json({ message: "Item added to cart" });
  } catch (error) {
    res.status(500).json({ error: "Error adding item to cart" });
  }
};

export const getAllCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await prisma.cart.findUnique({
      where: { userId: parseInt(userId) },
      include: { items: true },
    });

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cart" });
  }
};
