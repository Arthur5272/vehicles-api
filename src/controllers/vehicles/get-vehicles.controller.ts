import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const getVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await prisma.vehicle.findMany({
      where: { userId: req.user?.userId },
    });
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao obter veículos" });
  }
};
