import { Types } from "mongoose";

export class UserDTO {
  id: Types.ObjectId;
  username: string;

  constructor(model: any) {
    this.id = model._id;
    this.username = model.username;
  }
}
