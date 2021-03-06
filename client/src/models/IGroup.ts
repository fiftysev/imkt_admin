interface Indexable {
  [key: string | number]: any;
}

export interface IPractice extends Indexable {
  _id?: string;
  uid?: string;
  title: string;
  practice_form: string;
}

export interface IDiscipline extends Indexable {
  _id?: string;
  uid?: string;
  title?: string;
  attestation_form?: string;
  teacher?: string;
  optional?: boolean;
  faculty?: boolean;
}

export interface ISemester extends Indexable {
  semester: number;
  disciplines: IDiscipline[];
}

export interface ICourseWork extends Indexable {
  _id?: string;
  uid?: string;
  title: string;
  attestation_form: string;
  semester: string;
}

export interface IGroup extends Indexable {
  _id?: string;
  groupName: string;
  groupNumber: string;
  master?: string;
  practices?: IPractice[];
  semesters?: ISemester[];
  courseWorks?: ICourseWork[];
}
