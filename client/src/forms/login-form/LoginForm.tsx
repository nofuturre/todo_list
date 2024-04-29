import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema } from "./login-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input";
import { Button } from "@nextui-org/react";

type LoginFormProps = {
  onSubmit?: (data: LoginFormSchema) => void;
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<LoginFormSchema>({
    values: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const submitHandle: SubmitHandler<LoginFormSchema> = (data) =>
    onSubmit?.(data);

  return (
    <form onSubmit={handleSubmit(submitHandle)}>
      <Input
        label="Enter your email address"
        placeholder={"test@gmail.com"}
        name="email"
        control={control}
      />
      <Input
        label="Password"
        placeholder={"Password"}
        name="password"
        type="password"
        control={control}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
