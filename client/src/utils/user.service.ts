import { AxiosResponse } from "axios";

import { IUser } from "../models/IUser";
import $api from "./http.service";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/auth/users");
  }
}
