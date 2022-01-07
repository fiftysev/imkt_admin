import { IGroup } from "../models/IGroup";

export const tabNames = [
  {
    title: "Информация",
  },
  {
    title: "Дисциплины",
  },
  {
    title: "Курсовые работы",
  },
  {
    title: "Практики",
  },
];

export const attestationFormsList = [
  {
    value: "credit",
    label: "Зачет",
  },
  {
    value: "exam",
    label: "Экзамен",
  },
  {
    value: "graded_credit",
    label: "Зачет с оценкой",
  },
  {
    value: "credit_and_exam",
    label: "Зачет и экзамен",
  },
  {
    value: "credit_exam_kp",
    label: "Зачет, экзамен и курсовой проект",
  },
  {
    value: "graded_credit_kp",
    label: "Зачет с оценкой и курсовой проект",
  },
  {
    value: "graded_credit_kr",
    label: "Зачет с оценкой и курсовая работа",
  },
  {
    value: "credit_exam_kr",
    label: "Зачет, экзамен и курсовая работа",
  },
  {
    value: "exam_kp",
    label: "Экзамен и курсовой проект",
  },
  {
    value: "exam_kr",
    label: "Экзамен и курсовая работа",
  },
  {
    value: "credit_kp",
    label: "Зачет и курсовой проект",
  },
  {
    value: "credit_kr",
    label: "Зачет и курсовая работа",
  },
  {
    value: "kr",
    label: "Курсовая работа",
  },
  {
    value: "kp",
    label: "Курсовой проект",
  },
  {
    value: "kr_kp",
    label: "Курсовой проект и курсовая работа",
  },
  {
    value: "credit_kr_kp",
    label: "Зачет, курсовой проект и курсовая работа",
  },
  {
    value: "exam_kr_kp",
    label: "Экзамен, курсовой проект и курсовая работа",
  },
];

export const practiceForms = [
  {
    name: "Учебная",
    value: "educational",
  },
  {
    name: "Производственная",
    value: "internship",
  },
];

export const emptyGroup: IGroup = {
  groupName: "",
  groupNumber: "",
  master: "",
  practices: [],
  semesters: [
    {
      semester: 1,
      disciplines: [],
    },
    {
      semester: 2,
      disciplines: [],
    },
    {
      semester: 3,
      disciplines: [],
    },
    {
      semester: 4,
      disciplines: [],
    },
    {
      semester: 5,
      disciplines: [],
    },
    {
      semester: 6,
      disciplines: [],
    },
    {
      semester: 7,
      disciplines: [],
    },
    {
      semester: 8,
      disciplines: [],
    },
  ],
  courseWorks: [],
};
