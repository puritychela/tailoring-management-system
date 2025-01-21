import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTrousers = async (req, res) => {
  try {
    const trousers = await prisma.trouser.findMany();
    res.status(200).json(trousers);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createTrouser = async (req, res) => {
  const {
    waist,
    hips,
    thigh,
    Kneel,
    leg_opening,
    height,
    description,
    userId,
  } = req.body;

  try {
    const trouser = await prisma.trouser.create({
      data: {
        waist,
        hips,
        thigh,
        Kneel,
        leg_opening,
        height,
        description,
        userId,
      },
    });
    res.status(201).json(trouser);
  } catch (error) {
    console.error("Error creating trouser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export const deleteTrousersController = (req, res) => {
//   const Id = req.trouserId;
//   const findTrouser = Trousers.find((Trouser) => Trouser.id === Id);
//   if (findTrouser) {
//     res.send(Trousers.filter((Trouser) => Trouser !== findTrouser));
//   }
// };
