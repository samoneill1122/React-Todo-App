import { create } from "zustand";
import { todoList } from "./data/todos";
import moment from "moment";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface Todo {
  id: number;
  createDate: string;
  lastModified: string;
  text: string;
  status: "Pending" | "Done";
}

interface TodoListStore {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, todoText: string) => void;
  markTodoAsDone: (id: number) => void;
}

const useTodoListStore = create<TodoListStore>((set) => ({
  todos: todoList,
  addTodo: (todoText) =>
    set((store) => ({
      todos: [
        ...store.todos,
        {
          //   ...todo,
          id: store.todos.length + 1,
          createDate: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
          lastModified: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
          text: todoText,
          status: "Pending",
        },
      ],
    })),
  deleteTodo: (id) =>
    set((store) => ({
      todos: store.todos.filter((t) => t.id !== id),
    })),
  editTodo: (id, todoText) =>
    set((store) => ({
      todos: store.todos.map((todo) =>
        todo.id === id ? { ...todo, text: todoText } : todo
      ),
    })),
  markTodoAsDone: (id) =>
    set((store) => ({
      todos: store.todos.map((todo) =>
        todo.id === id ? { ...todo, status: "Done" } : todo
      ),
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Todo List Store", useTodoListStore);

export default useTodoListStore;
