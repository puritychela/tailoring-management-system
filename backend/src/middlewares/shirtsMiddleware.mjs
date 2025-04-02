import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userMiddleware = async (req, res, next) => {
  const { id } = req.params;

  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.sendStatus(400);
  }

  const Shirt = await prisma.shirt.findUnique({
    where: {
      id: parsedId,
    },
  });

  if (!Shirt) {
    return res.sendStatus(404);
  }
  req.shirtId = parsedId;
  next();
};

export default userMiddleware;
