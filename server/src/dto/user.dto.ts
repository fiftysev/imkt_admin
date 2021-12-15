import { Types } from "mongoose";

export class UserDTO {
  id: Types.ObjectId;
  username: string;
  firstName: string;
  lastName: string;
  password: string;

  constructor(model: any) {
    this.id = model._id;
    this.username = model.username;
    this.password = model.password;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
  }
}
