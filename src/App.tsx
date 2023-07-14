import moment from "moment";
import { useState } from "react";
import TodoTable from "./components/TodoTable";
import TodoForm from "./components/TodoForm";
import { Box, Container } from "@chakra-ui/react";

export interface Todo {
  id: number;
  createDate: string;
  lastModified: string;
  text: string;
  status: "Pending" | "Done";
}

const todoList: Todo[] = [
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

function App() {
  const [todos, setTodos] = useState(todoList);

  const deleteTodo = (todo: Todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const markTodoAsDone = (markedTodo: Todo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === markedTodo.id ? { ...markedTodo, status: "Done" } : todo
      )
    );
  };

  return (
    <>
      {/* add todo */}
      <Container
        maxW={{
          base: "sm",
          md: "md",
          lg: "container.md",
          xl: "container.lg",
        }}
        marginTop={20}
      >
        <Box marginBottom={10}>
          <TodoForm
            onSubmit={(todo) =>
              setTodos([
                ...todos,
                {
                  ...todo,
                  id: todos.length + 1,
                  createDate: moment(new Date()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  ),
                  lastModified: moment(new Date()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  ),
                  status: "Pending",
                },
              ])
            }
          />
        </Box>
        <TodoTable
          todos={todos}
          onDeleteTodo={deleteTodo}
          onMarkTodo={markTodoAsDone}
        />
      </Container>
    </>
  );
}

export default App;
