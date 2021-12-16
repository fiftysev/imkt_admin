import { Router } from "express";
import GroupsController from "../controllers/groups.controller";

export const groupsRouter = Router();

groupsRouter.get("/", GroupsController.getAll);
groupsRouter.get("/:id", GroupsController.getById);

groupsRouter.delete("/:id", GroupsController.deleteOne);

groupsRouter.post("/create", GroupsController.addOne);

groupsRouter.patch("/update", GroupsController.updateGroup);
