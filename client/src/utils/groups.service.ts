import { AxiosResponse } from "axios";
import { IGroup } from "../models/IGroup";
import $api from "./http.service";

export default class GroupsService {
  static async getGroupsList(): Promise<AxiosResponse<IGroup[]>> {
    return $api.get("/groups");
  }

  static async getGroupById(id: string): Promise<AxiosResponse<IGroup>> {
    return $api.get(`/groups/${id}`);
  }

  static async deleteGroupById(id: string) {
    return $api.delete(`/groups/${id}`);
  }

  static async createGroup(group: IGroup) {
    return $api.post("/groups/create", { group });
  }

  static async updateGroup(group: IGroup) {
    return $api.patch("/groups/update", { group });
  }
}
