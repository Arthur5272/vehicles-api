import { Router } from "express";
import {
  archiveVehicle,
  createVehicle,
  deleteVehicle,
  getVehicles,
  getVehicleStats,
  unarchiveVehicle,
  updateVehicle,
} from "../controllers/vehicles/index";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/", createVehicle);
router.get("/", getVehicles);
router.put("/:id", updateVehicle);
router.patch("/:id/archive", archiveVehicle);
router.patch("/:id/unarchive", unarchiveVehicle);
router.delete("/:id", deleteVehicle);
router.get("/stats", getVehicleStats);

export default router;
