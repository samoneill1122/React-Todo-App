import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  text: z
    .string()
    .min(5, { message: "Todo details must be at least 5 characters long" }),
});

type TodoFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: TodoFormData) => void;
}

const TodoForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="text">Todo Details</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EditIcon></EditIcon>
          </InputLeftElement>
          <Input
            {...register("text")}
            id="text"
            placeholder="todo"
            type="text"
          />
        </InputGroup>
        {errors.text && <Text color="crimson">{errors.text.message}</Text>}
      </FormControl>
      <Button type="submit" colorScheme="green" size="sm" mt={3}>
        Submit Todo
      </Button>
    </form>
  );
};

export default TodoForm;
