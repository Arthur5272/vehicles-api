import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const getVehicles = async (req: Request, res: Response) => {
  const vehicles = await prisma.vehicle.findMany({
    where: { userId: req.user?.userId },
  });
  res.json(vehicles);
};
