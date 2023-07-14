import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stack,
  Button,
  TableCaption,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Todo } from "../App";
import "./TodoTable.css";

interface Props {
  todos: Todo[];
  onDeleteTodo: (todo: Todo) => void;
  onMarkTodo: (todo: Todo) => void;
}

const TodoTable = ({ todos, onDeleteTodo, onMarkTodo }: Props) => {
  return (
    <TableContainer>
      <Table
        id="todoTable"
        variant="striped"
        size={{ base: "sm", md: "md" }}
        // layout="fixed"
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
                  <HStack spacing={1}>
                    <Button colorScheme="blue" size={{ base: "xs", md: "sm" }}>
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      size={{ base: "xs", md: "sm" }}
                      onClick={() => onDeleteTodo(todo)}
                    >
                      Delete
                    </Button>
                  </HStack>
                  {todo.status !== "Done" && (
                    <Button
                      colorScheme="green"
                      size={{ base: "xs", md: "sm" }}
                      onClick={() => onMarkTodo(todo)}
                      width="100%"
                    >
                      Mark as Done
                    </Button>
                  )}
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
