import { model, Schema } from "mongoose";
import { IMaster } from "./interfaces/master.interface";

const masterSchema = new Schema({
  name: { type: String, required: true },
  classroom: { type: String },
  another_contact: { type: String },
  email: { type: String },
});

export const Master = model<IMaster>("Master", masterSchema);
