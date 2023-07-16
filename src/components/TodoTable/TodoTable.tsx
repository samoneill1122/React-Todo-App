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

const TodoTable = () => {
  const { todos, deleteTodo, markTodoAsDone } = useTodoListStore();
  return (
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
            <Th>Created On</Th>
            <Th>Last Modified</Th>
            <Th>Todo</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((todo) => (
            <Tr key={todo.id}>
              <Td>{todo.id}</Td>
              <Td>{todo.createDate.toString()}</Td>
              <Td>{todo.lastModified.toString()}</Td>
              <Td className="fixed-width-cell">{todo.text}</Td>
              <Td>{todo.status}</Td>
              <Td>
                <VStack direction="row" spacing={1} align="center">
                  <HStack spacing={1} marginX={0}>
                    {/* <Button colorScheme="blue" size={{ base: "xs", md: "sm" }}>
                      Edit
                    </Button> */}
                    <Link to={`/todos/${todo.id}/edit`}>Edit</Link>
                    <Button
                      colorScheme="red"
                      size={{ base: "xs", md: "sm" }}
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </Button>
                  </HStack>
                  <HStack>
                    {todo.status !== "Done" && (
                      <Button
                        colorScheme="green"
                        size={{ base: "xs", md: "sm" }}
                        onClick={() => markTodoAsDone(todo.id)}
                        width="100%"
                      >
                        Mark as Done
                      </Button>
                    )}
                    <Link to={`/todos/${todo.id}`}>View</Link>
                  </HStack>
                </VStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <TableCaption>Todo list</TableCaption>
      </Table>
    </TableContainer>
  );
};

export default TodoTable;
