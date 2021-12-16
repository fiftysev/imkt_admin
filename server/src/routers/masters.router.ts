import { Router } from "express";
import mastersController from "../controllers/masters.controller";

export const mastersRouter = Router();

mastersRouter.get("/", mastersController.getAll);
mastersRouter.get("/:id", mastersController.getById);

mastersRouter.post("/create", mastersController.addOne);

mastersRouter.delete("/:id", mastersController.deleteOne);

mastersRouter.patch("/update", mastersController.updateMaster);
