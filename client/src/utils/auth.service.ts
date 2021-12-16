import $api from "./http.service";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "../models/IAuthResponse";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/auth/login", { username, password });
  }

  static async register(
    username: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/auth/register", {
      username,
      password,
    });
  }

  static async logout(): Promise<void> {
    return $api.post("/auth/logout");
  }

  static async refresh(): Promise<AxiosResponse<IAuthResponse>> {
    return $api.get<IAuthResponse>("/auth/refresh");
  }
}
