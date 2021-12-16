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
    await AuthService.login(email, password)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  async register(username: string, password: string) {
    await AuthService.register(username, password)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  async logout() {
    try {
      await AuthService.logout();
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
