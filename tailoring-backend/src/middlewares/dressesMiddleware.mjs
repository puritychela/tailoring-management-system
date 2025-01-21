import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dressMiddleware = async (req, res, next) => {
  const { id } = req.params;

  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.sendStatus(400);
  }

  const dress = await prisma.dress.findUnique({
    where: {
      id: parsedId,
    },
  });

  if (!dress) {
    return res.sendStatus(404);
  }
  req.dressId = parsedId;
  next();
};

export default dressMiddleware;
