import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { AppError } from "../../utils/AppError";
import { generateToken } from "../../utils/generateToken";
import { loginSchema } from "../../validators/auth.schema";

export const login = async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError("Credenciais inválidas", 400);
  }

  const { email, password } = parsed.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AppError("Credenciais inválidas", 401);

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new AppError("Credenciais inválidas", 401);

  const token = generateToken(user.id);

  res.json({ token });
};
