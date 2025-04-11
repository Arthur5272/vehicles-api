import { Router } from "express";
import authRoutes from "./auth.routes";
import vehicleRoutes from "./vehicles.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/vehicles", vehicleRoutes);

export default router;
