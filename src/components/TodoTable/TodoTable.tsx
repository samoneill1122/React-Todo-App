import {
  Button,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useTodoListStore from "../../store";
import "./TodoTable.css";
import TodoActionsButton from "../TodoActionsButton/TodoActionsButton";

const TodoTable = () => {
  const { todos, deleteTodo, markTodoAsDone } = useTodoListStore();
  return (
    <>
      <TableContainer>
        <Table
          id="todoTable"
          variant="striped"
          size={{ base: "sm", md: "md" }}
          style={{ whiteSpace: "nowrap" }}
        >
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Todo</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                <Td>{todo.id}</Td>
                <Td id="todoTextCell" className="overflow-cell">
                  {todo.text}
                </Td>
                <Td>{todo.status}</Td>
                <Td>
                  <TodoActionsButton
                    todo={todo}
                    onDeleteTodo={deleteTodo}
                    onMarkTodo={markTodoAsDone}
                  />
                  <HStack spacing={1} display="none">
                    <Link to={`/todos/${todo.id}/edit`}>
                      <Button
                        size={{ base: "xs", md: "sm" }}
                        colorScheme="blue"
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button
                      colorScheme="red"
                      size={{ base: "xs", md: "sm" }}
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/todos/${todo.id}`}>
                      <Button
                        size={{ base: "xs", md: "sm" }}
                        colorScheme="yellow"
                      >
                        View{" "}
                      </Button>
                    </Link>
                    {todo.status !== "Done" && (
                      <Button
                        colorScheme="green"
                        size={{ base: "xs", md: "sm" }}
                        onClick={() => markTodoAsDone(todo.id)}
                      >
                        Mark as Done
                      </Button>
                    )}
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <TableCaption>Todo list</TableCaption>
        </Table>
      </TableContainer>{" "}
    </>
  );
};

export default TodoTable;
