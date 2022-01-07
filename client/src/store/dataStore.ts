import { makeAutoObservable, toJS } from "mobx";
import { IGroup } from "../models/IGroup";
import { IMaster } from "../models/IMaster";
import GroupsService from "../utils/groups.service";
import MastersService from "../utils/masters.service";

export default class DataStore {
  groupsList: IGroup[];
  newGroup: IGroup;

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
    this.newGroup = group;
    return group;
  }

  setMastersList(list: IMaster[]) {
    this.mastersList = list;
  }

  setMasterToUpdate(master: IMaster) {
    this.masterToUpdate = master;
  }

  get groups() {
    return toJS(this.groupsList);
  }

  get groupToUpdate() {
    return toJS(this.newGroup);
  }

  get masters() {
    return toJS(this.mastersList);
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

  async deleteGroup(id: string) {
    await GroupsService.deleteGroupById(id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async updateMastersList() {
    await MastersService.getMastersList()
      .then((res) => {
        this.setMastersList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async deleteMaster(id: string) {
    await MastersService.deleteMasterById(id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
