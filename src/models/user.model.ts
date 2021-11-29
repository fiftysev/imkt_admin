import { Schema, model } from "mongoose";
import * as bcrypt from "bcrypt";

import { IUser } from "./interfaces/user.interface";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, maxlength: 25 },
  password: { type: String, required: true, maxlength: 25 },
});

UserSchema.pre("save", async function (next) {
  const thisObj = this as IUser;

  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = process.env.SALT_ROUNDS || 3;
    thisObj.password = await bcrypt.hash(thisObj.password, +salt);
    return next();
  } catch (e) {
    console.log(e);
    return next();
  }
});

UserSchema.methods.validatePassword = async function (pass: string) {
  return bcrypt.compare(pass, this.password);
};

export const User = model<IUser>("User", UserSchema);
