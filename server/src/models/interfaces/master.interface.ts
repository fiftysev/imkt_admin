import { Document } from "mongoose";

export interface IMaster extends Document{
  name: string;
  classroom: string;
  another_contact?: string;
  email?: string;
}
