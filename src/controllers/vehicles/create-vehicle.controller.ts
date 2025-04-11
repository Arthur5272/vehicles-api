import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { AppError } from "../../utils/AppError";
import { createVehicleSchema } from "../../validators/vehicles.schema";

export const createVehicle = async (req: Request, res: Response) => {
  try {
    const parsed = createVehicleSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new AppError("Dados inválidos", 400);
    }

    const { name, plate } = parsed.data;
    const userId = req.user?.userId;

    if (!userId) throw new AppError("Não autenticado", 401);

    const existingPlate = await prisma.vehicle.findUnique({ where: { plate } });
    if (existingPlate) throw new AppError("Placa já cadastrada", 409);

    const vehicle = await prisma.vehicle.create({
      data: { name, plate, userId, status: true },
    });

    res.status(201).json(vehicle);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: "Erro ao criar veículo" });
  }
};
