import { Router } from "express";
import GroupsController from "../controllers/groups.controller";

export const groupsRouter = Router();

groupsRouter.get("/groups", GroupsController.getAll);
groupsRouter.get("/groups/:id", GroupsController.getById);
groupsRouter.delete("/groups/:id", GroupsController.deleteOne);
