import moment from "moment";
import { Todo } from "../store";

export const todoList: Todo[] = [
  {
    id: 1,
    createDate: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
    lastModified: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
    text: "Clean dishes",
    status: "Pending",
  },
  {
    id: 2,
    createDate: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
    lastModified: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
    text: "Take the dog for a walk",
    status: "Pending",
  },
  {
    id: 3,
    createDate: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
    lastModified: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
    text: "Do homework",
    status: "Done",
  },
];
