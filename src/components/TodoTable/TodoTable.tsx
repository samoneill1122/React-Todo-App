import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useTodoListStore from "../../store";
import TodoActionsButton from "../TodoActionsButton/TodoActionsButton";
import "./TodoTable.css";

const TodoTable = () => {
  const { todos } = useTodoListStore();
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
                  <TodoActionsButton todoId={todo.id} />
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
