import { Document, Types } from "mongoose";

export interface IToken extends Document {
  user: Types.ObjectId;
  refreshToken: string;
}
