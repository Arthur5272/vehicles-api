import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { AppError } from "../../utils/AppError";
import { updateVehicleSchema } from "../../validators/vehicles.schema";

export const updateVehicle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const parsed = updateVehicleSchema.safeParse(req.body);

  if (!parsed.success) {
    throw new AppError("Dados inválidos", 400);
  }

  const data = parsed.data;

  if (data.plate) {
    const existing = await prisma.vehicle.findFirst({
      where: { plate: data.plate, id: { not: id } },
    });
    if (existing) throw new AppError("Placa já existe", 409);
  }

  const vehicle = await prisma.vehicle.update({
    where: { id },
    data,
  });

  res.json(vehicle);
};
