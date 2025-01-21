import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllSkirts = async (req, res) => {
  try {
    const skirts = await prisma.skirt.findMany();
    res.status(200).json(skirts);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createSkirt = async (req, res) => {
  const { waist, hips, skirt_length, description, userId } = req.body;

  try {
    const skirt = await prisma.skirt.create({
      data: {
        waist,
        hips,
        skirt_length,
        description,
        userId,
      },
    });
    res.status(201).json(skirt);
  } catch (error) {
    console.error("Error creating skirt:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export const deleteskirtsController = (req, res) => {
//   const Id = req.skirtId;
//   const findskirt = skirts.find((skirt) => skirt.id === Id);
//   if (findskirt) {
//     res.send(skirts.filter((skirt) => skirt !== findskirt));
//   }
// };
