import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const unarchiveVehicle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = await prisma.vehicle.update({
    where: { id, userId: req.user?.userId },
    data: { status: true },
  });
  res.json(vehicle);
};
