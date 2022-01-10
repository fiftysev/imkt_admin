import { Router } from "express";
import GroupsController from "../controllers/groups.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const groupsRouter = Router();

groupsRouter.get("/", authMiddleware, GroupsController.getAll);
groupsRouter.get("/:id", authMiddleware, GroupsController.getById);

groupsRouter.delete("/:id", authMiddleware, GroupsController.deleteOne);

groupsRouter.post("/create", authMiddleware, GroupsController.addOne);

groupsRouter.patch("/update", authMiddleware, GroupsController.updateGroup);
