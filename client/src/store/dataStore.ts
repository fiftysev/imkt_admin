import { makeAutoObservable, toJS } from "mobx";
import { ICourseWork, IDiscipline, IGroup, IPractice } from "../models/IGroup";
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

  updatePracticesOrCourseworks(
    type: string,
    id: string,
    field: string,
    value: string
  ) {
    const idx = this.newGroup[type].findIndex(
      (v: IPractice | ICourseWork) => v.uid === id || v._id === id
    );
    this.newGroup[type][idx][field] = value;
  }

  updateSemestersData(
    semesterNum: number,
    id: string,
    field: string,
    value: string | boolean
  ) {
    const semIdx = this.newGroup.semesters.findIndex(
      (v) => v.semester === semesterNum
    );
    const disciplineIdx = this.newGroup.semesters[semIdx].disciplines.findIndex(
      (v) => v._id === id || v.uid === id
    );

    this.newGroup.semesters[semIdx].disciplines[disciplineIdx][field] = value;
  }

  addNewPractice(id: string) {
    this.newGroup.practices.push({
      uid: id,
      practice_form: "",
      title: "",
    } as IPractice);
  }

  addNewCoursework(id: string) {
    this.newGroup.courseWorks.push({
      uid: id,
      title: "",
      attestation_form: "",
      semester: "",
    });
  }

  addNewDiscipline(semesterNum: number, discipline: IDiscipline) {
    const idx = this.newGroup.semesters.findIndex(
      (v) => v.semester === semesterNum
    );
    this.newGroup.semesters[idx].disciplines.push({
      discipline,
    });
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
