import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormSchema } from "./register-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input";
import { Button } from "@nextui-org/react";

type RegisterFormProps = {
  onSubmit?: (data: RegisterFormSchema) => void;
};

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const { handleSubmit, control } = useForm<RegisterFormSchema>({
    values: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const submit: SubmitHandler<RegisterFormSchema> = (data) => onSubmit?.(data);

  return (
    <form onSubmit={handleSubmit(submit)}>
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
      <Input
        label="Confirm Passowrd"
        placeholder={"Password"}
        name="confirmPassword"
        type="password"
        control={control}
      />
      <Button type="submit">Create account</Button>
    </form>
  );
};
