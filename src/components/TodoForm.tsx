import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
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
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TodoFormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (isSubmitSuccessful) reset({ text: "" });
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Heading as="h4" size="md" marginBottom={2}>
          Add Todo
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EditIcon></EditIcon>
          </InputLeftElement>
          <Input
            {...register("text")}
            id="text"
            placeholder="todo details"
            type="text"
          />
        </InputGroup>
        {errors.text && <Text color="crimson">{errors.text.message}</Text>}
      </FormControl>
      <Button type="submit" colorScheme="green" size="sm" mt={3}>
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
