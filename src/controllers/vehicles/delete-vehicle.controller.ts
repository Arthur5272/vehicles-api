import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const vehicle = await prisma.vehicle.delete({
      where: { id, userId: req.user?.userId },
    });

    res.json({ message: "Veículo removido", vehicle });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover veículo", error });
  }
};
