import { Request, Response, NextFunction } from "express";
import { IUser } from "../models/interfaces/user.interface";
import { User } from "../models/user.model";

export class UserController {
  constructor() {}
  async registration(req: Request, res: Response, next: NextFunction) {
    const user = req.body as IUser;
    console.log(user);
  }
}
