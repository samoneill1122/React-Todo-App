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
} from "@chakra-ui/react";
import { Todo } from "../App";

interface Props {
  todos: Todo[];
  onDeleteTodo: (todo: Todo) => void;
  onMarkTodo: (todo: Todo) => void;
}

const TodoTable = ({ todos, onDeleteTodo, onMarkTodo }: Props) => {
  return (
    <TableContainer>
      <Table variant="simple">
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
              <Td>{todo.text}</Td>
              <Td>{todo.status}</Td>
              <Td>
                <Stack direction="row" spacing={1} align="center">
                  <Button colorScheme="blue" size="sm">
                    Edit
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => onDeleteTodo(todo)}
                  >
                    Delete
                  </Button>
                  {todo.status !== "Done" && (
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => onMarkTodo(todo)}
                    >
                      Mark as Done
                    </Button>
                  )}
                </Stack>
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
