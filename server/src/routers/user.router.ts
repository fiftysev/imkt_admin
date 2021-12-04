import { Router } from "express";
import userController from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const userRouter = Router();

userRouter.post("/register", userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/refresh", userController.refresh);
userRouter.get("/users", authMiddleware, userController.getUsers);
userRouter.post("/logout", userController.logout);
