import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const trouserMiddleware = async (req, res, next) => {
  const { id } = req.params;

  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.sendStatus(400);
  }

  const Trouser = prisma.trouser.findUnique({
    where: {
      id: parsedId,
    },
  });

  if (!Trouser) {
    return res.sendStatus(404);
  }
  req.trouserId = parsedId;
  next();
};

export default trouserMiddleware;
