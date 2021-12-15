import { Types } from "mongoose";

export class UserDTO {
  id: Types.ObjectId;
  username: string;
  firstName: string;
  lastName: string;

  constructor(model: any) {
    this.id = model._id;
    this.username = model.username;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
  }
}
