import { Router } from "express";
import mastersController from "../controllers/masters.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const mastersRouter = Router();

mastersRouter.get("/", authMiddleware, mastersController.getAll);
mastersRouter.get("/:id", authMiddleware, mastersController.getById);

mastersRouter.post("/create", authMiddleware, mastersController.addOne);

mastersRouter.delete("/:id", authMiddleware, mastersController.deleteOne);

mastersRouter.patch("/update", authMiddleware, mastersController.updateMaster);
