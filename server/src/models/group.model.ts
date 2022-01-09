import { Schema, model } from "mongoose";
import { IGroup } from "./interfaces/group.interface";

const practiceSchema = new Schema({
  title: { type: String },
  practice_form: { type: String },
});

const disciplineSchema = new Schema({
  title: { type: String },
  attestation_form: { type: String },
  teacher: { type: String, default: "" },
  optional: { type: Boolean },
  faculty: { type: Boolean },
});

const semesterSchema = new Schema({
  disciplines: [disciplineSchema],
  semester: { type: Number, unique: true },
});

const courseWorkSchema = new Schema({
  title: { type: String },
  semester: { type: String },
  attestation_form: { type: String },
});

const groupSchema = new Schema({
  groupName: { type: String, required: true },
  groupNumber: { type: String, required: true },
  master: { type: String, required: true, ref: "master" },
  practices: { type: [practiceSchema], default: [], minlength: 6 },
  semesters: { type: [semesterSchema], default: [], maxlength: 8 },
  courseWorks: { type: [courseWorkSchema], default: [] },
});

export const Group = model<IGroup>("Group", groupSchema);
