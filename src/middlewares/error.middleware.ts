import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      details: (err as any).details,
    });
  }

  console.error(err);
  res.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
  });
};
