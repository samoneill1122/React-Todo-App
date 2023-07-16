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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Todo } from "../store";

const schema = z.object({
  id: z.string(),
  text: z
    .string()
    .min(5, { message: "Todo details must be at least 5 characters long" }),
});

type EditTodoFormData = z.infer<typeof schema>;

interface Props {
  todo: Todo;
  onSubmit: (data: EditTodoFormData) => void;
}

const EditTodoForm = ({ todo, onSubmit }: Props) => {
  const [value, setValue] = useState(todo.text);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTodoFormData>({ resolver: zodResolver(schema) });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("id")}
        id="id"
        type="number"
        defaultValue={todo.id}
        className="d-none"
      />
      {errors.id && <Text color="crimson">{errors.id.message}</Text>}
      <FormControl>
        <Heading as="h4" size="md" marginBottom={2}>
          Edit Todo
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
            // defaultValue="SPLONK!"
            value={value}
            onChange={handleChange}
          />
        </InputGroup>
        {errors.text && <Text color="crimson">{errors.text.message}</Text>}
      </FormControl>
      <Button type="submit" colorScheme="green" size="sm" mt={3}>
        Update Todo
      </Button>
    </form>
  );
};

export default EditTodoForm;
