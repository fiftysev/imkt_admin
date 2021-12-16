import { Schema, model } from "mongoose";

import { IUser } from "./interfaces/user.interface";

const UserSchema = new Schema({
  username: { type: String, required: true, maxlength: 25 },
  password: { type: String, required: true },
});

export const AuthUser = model<IUser>("AuthUser", UserSchema);
