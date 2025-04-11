import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const archiveVehicle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = await prisma.vehicle.update({
    where: { id, userId: req.user?.userId },
    data: { status: false },
  });
  res.json(vehicle);
};
