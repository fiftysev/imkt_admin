import { makeAutoObservable, toJS } from "mobx";
import { IGroup } from "../models/IGroup";
import { IMaster } from "../models/IMaster";
import GroupsService from "../utils/groups.service";

export default class DataStore {
  groupsList: IGroup[];
  newGroup: IGroup;
  groupToUpdate: IGroup;

  mastersList: IMaster[];
  newMaster: IMaster;
  masterToUpdate: IMaster;

  constructor() {
    makeAutoObservable(this);
  }

  setGroupsList(groupsList: IGroup[]) {
    this.groupsList = groupsList;
  }

  setGroupToUpdate(group: IGroup) {
    this.groupToUpdate = group;
  }

  get groups() {
    return toJS(this.groupsList);
  }

  get groupToUpd() {
    return toJS(this.groupToUpdate);
  }

  async updateGroupsList() {
    await GroupsService.getGroupsList()
      .then((res) => {
        this.setGroupsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getGroupToUpdate(id: string) {
    await GroupsService.getGroupById(id)
      .then((res) => {
        this.setGroupToUpdate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
