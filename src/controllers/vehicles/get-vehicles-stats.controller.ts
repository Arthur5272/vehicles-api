import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const getVehicleStats = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    const [total, active, inactive] = await Promise.all([
      prisma.vehicle.count({ where: { userId } }),
      prisma.vehicle.count({ where: { userId, status: true } }),
      prisma.vehicle.count({ where: { userId, status: false } }),
    ]);

    res.json({ total, active, inactive });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erro ao obter estatísticas dos veículos" });
  }
};
