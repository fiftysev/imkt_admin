import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  validatePassword(password: string): boolean;
}
