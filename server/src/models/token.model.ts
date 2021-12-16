import { IToken } from "./interfaces/token.interface";
import { Schema, model } from "mongoose";

const tokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: "AuthUser" },
  refreshToken: { type: String, required: true },
});

export const Token = model<IToken>("Token", tokenSchema);
