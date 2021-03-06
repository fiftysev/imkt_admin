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

  setGroupNumber(v: string) {
    this.newGroup.groupNumber = v;
  }

  setMaster(v: string) {
    this.newGroup.master = v;
  }

  setGroupName(v: string) {
    this.newGroup.groupName = v;
  }

  setPractices(practices: IPractice[]) {
    this.newGroup.practices = practices;
  }

  setCourseWorks(courseWorks: ICourseWork[]) {
    this.newGroup.courseWorks = courseWorks;
  }

  setDisciplines(semesterNum: number, disciplines: IDiscipline[]) {
    const idx = this.newGroup.semesters.findIndex(
      (v) => v.semester === semesterNum
    );
    this.newGroup.semesters[idx].disciplines = disciplines;
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

  addNewPractice(practice: IPractice) {
    this.newGroup.practices.push(practice);
  }

  addNewCoursework(courseWork: ICourseWork) {
    this.newGroup.courseWorks.push(courseWork);
  }

  addNewDiscipline(semesterNum: number, discipline: IDiscipline) {
    const idx = this.newGroup.semesters.findIndex(
      (v) => v.semester === semesterNum
    );
    this.newGroup.semesters[idx].disciplines.push(discipline);
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
