import { z } from "zod";

export const createVehicleSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  plate: z
    .string()
    .regex(/^[A-Z]{3}\d[A-Z]\d{2}$/, "Formato inválido (AAA1A11)"),
});

export const updateVehicleSchema = createVehicleSchema.partial();

export const vehicleParamsSchema = z.object({
  id: z.string().uuid("ID inválido"),
});
