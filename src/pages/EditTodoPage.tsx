import { Box, Container } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditTodoForm from "../components/EditTodoForm";
import useTodoListStore from "../store";

const EditTodoPage = () => {
  const { todos, editTodo } = useTodoListStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.filter((t) => t.id === parseInt(id!))[0];

  return (
    <Container
      maxW={{
        base: "sm",
        md: "md",
        lg: "container.md",
        xl: "container.lg",
      }}
      marginTop={20}
    >
      <Box mb={2}>
        <Link to="/">Back to Home</Link>
      </Box>
      <EditTodoForm
        todo={todo}
        onSubmit={(t) => {
          editTodo(parseInt(t.id), t.text);
          navigate("/");
        }}
      />
    </Container>
  );
};

export default EditTodoPage;
