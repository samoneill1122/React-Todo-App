import { Box, Container } from "@chakra-ui/react";
import TodoForm from "../components/TodoForm";
import TodoTable from "../components/TodoTable/TodoTable";
import useTodoListStore, { Todo } from "../store";
import apiClient, { CanceledError } from "../services/api-client";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { addTodo } = useTodoListStore();

  useEffect(() => {
    apiClient.get<Todo>("/todos").then((res) => console.log(res));
  }, []);

  return (
    <>
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
          <TodoForm onSubmit={(todo) => addTodo(todo.text)} />
        </Box>
        <TodoTable />
      </Container>
    </>
  );
};

export default HomePage;
