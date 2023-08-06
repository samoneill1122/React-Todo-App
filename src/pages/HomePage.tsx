import { Box, Container } from "@chakra-ui/react";
import TodoForm from "../components/TodoForm";
import TodoTable from "../components/TodoTable/TodoTable";
import useTodoListStore from "../store";

const HomePage = () => {
  const { addTodo } = useTodoListStore();

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
