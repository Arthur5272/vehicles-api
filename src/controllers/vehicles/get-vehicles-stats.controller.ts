import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const getVehicleStats = async (req: Request, res: Response) => {
  const userId = req.user?.userId;

  const [total, active, inactive] = await Promise.all([
    prisma.vehicle.count({ where: { userId } }),
    prisma.vehicle.count({ where: { userId, status: true } }),
    prisma.vehicle.count({ where: { userId, status: false } }),
  ]);

  res.json({ total, active, inactive });
};
