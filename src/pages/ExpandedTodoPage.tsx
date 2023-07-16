import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { todoList } from "../data/todos";

const ExpandedTodoPage = () => {
  const { id } = useParams();
  const todo = todoList.filter((t) => t.id === parseInt(id!))[0];

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
      <Card>
        <CardHeader>
          <Heading size="md" textAlign="center" mb={0}>
            Todo Details
          </Heading>
        </CardHeader>

        <Divider m={0} />

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Id
              </Heading>
              <Text pt="2" fontSize="sm">
                {todo.id}
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Created On
              </Heading>
              <Text pt="2" fontSize="sm">
                {todo.createDate}
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Last Modified
              </Heading>
              <Text pt="2" fontSize="sm">
                {todo.lastModified}
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Todo
              </Heading>
              <Text pt="2" fontSize="sm">
                {todo.text}
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Status
              </Heading>
              <Text
                pt="2"
                fontSize="sm"
                color={todo.status === "Pending" ? "blue.300" : "green.300"}
              >
                {todo.status}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ExpandedTodoPage;
