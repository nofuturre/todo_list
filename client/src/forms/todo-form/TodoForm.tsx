import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input";
import { TodoFormSchema } from "./todo-form.schema";
import { Button } from "@nextui-org/react";

type TodoFormProps = {
  onSubmit: (data: TodoFormSchema) => void;
};

export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const { handleSubmit, control } = useForm<TodoFormSchema>({
    values: {
      title: "",
      description: "",
      dueDate: "",
    },
    resolver: zodResolver(TodoFormSchema),
  });

  const submitHandler: SubmitHandler<TodoFormSchema> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Input label="Title" placeholder={""} name="title" control={control} />
      <Input label="Description" name="description" control={control} />
      <Input label="Date" name="dueDate" type="date" control={control} />
      <Button color="primary" className="w-full" type="submit">
        Save
      </Button>
    </form>
  );
};
