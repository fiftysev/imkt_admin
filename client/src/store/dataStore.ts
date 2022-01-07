import { makeAutoObservable, toJS } from "mobx";
import { IGroup, IPractice } from "../models/IGroup";
import { IMaster } from "../models/IMaster";
import GroupsService from "../utils/groups.service";
import MastersService from "../utils/masters.service";

export default class DataStore {
  groupsList: IGroup[];
  newGroup: IGroup;

  mastersList: IMaster[];

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

  get groups() {
    return toJS(this.groupsList);
  }

  get groupToUpdate() {
    return toJS(this.newGroup);
  }

  get masters() {
    return toJS(this.mastersList);
  }

  changeGroupNumber(v: string) {
    this.newGroup.groupNumber = v;
  }

  changeMaster(v: string) {
    this.newGroup.master = v;
  }

  updatePractices(id: string, field: string, value: string) {
    const idx = this.newGroup.practices.findIndex(
      (v) => v.uid === id || v._id === id
    );
    this.newGroup.practices[idx][field] = value;
  }

  addNewPractice(id: string) {
    this.newGroup.practices.push({
      uid: id,
      practice_form: "",
      title: "",
    } as IPractice);
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
