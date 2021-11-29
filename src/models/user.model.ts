import { Schema, model } from "mongoose";
import * as bcrypt from "bcrypt";

import { IUser } from "./interfaces/user.interface";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, maxlength: 25 },
  password: { type: String, required: true },
});

export const User = model<IUser>("User", UserSchema);