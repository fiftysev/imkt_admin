import { makeAutoObservable } from "mobx";

import { IUser } from "../models/IUser";
import AuthService from "../utils/auth.service";

export default class Store {
  user = {} as IUser;
  isAuth: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setAuth(flag: boolean) {
    this.isAuth = flag;
  }

  setLoading(flag: boolean) {
    this.isLoading = flag;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.error(e);
    }
  }

  async register(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) {
    try {
      const response = await AuthService.register(
        firstName,
        lastName,
        username,
        password
      );
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      console.error(e);
    }
  }

  async refreshAuth() {
    this.setLoading(true);
    try {
      const response = await AuthService.refresh();
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.error(e);
    } finally {
      this.setLoading(false);
    }
  }
}
