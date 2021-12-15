import { Document, Types } from "mongoose";

interface IPractice {
  title: string;
  practice_form: string;
}

interface IDiscipline {
  title: string;
  attestation_form: string;
  teacher: string;
  optional?: boolean;
  faculty?: boolean;
}

interface ISemester {
  semester: number;
  disciplines: IDiscipline[];
}

interface ICourseWork {
  title: string;
  attestation_form: string;
  semester: string;
}

export interface IGroup extends Document {
  groupName: string;
  groupNumber: string;
  master: Types.ObjectId;
  practices: IPractice[];
  semesters: ISemester[];
  courseWorks: ICourseWork[];
}
