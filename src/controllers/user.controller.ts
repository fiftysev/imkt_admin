import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.model";
import userService from "../services/user.service";

export class UserController {
  constructor() {}
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName, username, password } = req.body;

      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ error: `User ${username} is already exists` });
      }

      const userData = await userService.registration(
        firstName,
        lastName,
        username,
        password
      );

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.status(200).json(userData);
    } catch (e) {
      next(e);
    }
  }
}
