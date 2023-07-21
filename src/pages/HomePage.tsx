import { Box, Container, effect } from "@chakra-ui/react";
import TodoForm from "../components/TodoForm";
import TodoTable from "../components/TodoTable/TodoTable";
import useTodoListStore from "../store";
import { useEffect, useState } from "react";

interface UserResponse {
  users: object[];
}

const HomePage = () => {
  const { addTodo } = useTodoListStore();

  // const [data, setData] = useState<UserResponse>();
  // useEffect(() => {
  //   fetch("http://localhost:5000/api")
  //     .then((res) => res.json())
  //     .then((d) => {
  //       setData(d);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <>
      {/* {data?.users.map((user, i) => (
        <p>{user.toString()}</p>
      ))} */}
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
