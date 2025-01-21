import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const skirtMiddleware = async (req, res, next) => {
  const { id } = req.params;

  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.sendStatus(400);
  }

  const skirt = await prisma.skirt.findUnique({
    where: {
      id: parsedId,
    },
  });

  if (!skirt) {
    return res.sendStatus(404);
  }
  req.skirtId = parsedId;
  next();
};

export default skirtMiddleware;
