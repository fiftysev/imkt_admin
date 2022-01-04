import { AxiosResponse } from "axios";
import { IMaster } from "../models/IMaster";
import $api from "./http.service";

export default class MastersService {
  static async getMastersList(): Promise<AxiosResponse<IMaster[]>> {
    return $api.get("/masters");
  }

  static async getMasterById(id: string): Promise<AxiosResponse<IMaster>> {
    return $api.get(`/masters/${id}`);
  }

  static async deleteMasterById(id: string) {
    return $api.delete(`/masters/${id}`);
  }

  static async createMaster(master: IMaster) {
    return $api.post("/masters/create", master);
  }

  static async updateMaster(master: IMaster) {
    return $api.patch("/masters/update", master);
  }
}
