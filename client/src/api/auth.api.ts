import { LoginFormSchema } from "../forms/login-form/login-form.schema";
import { RegisterFormSchema } from "../forms/register-form/register-form.schema";
import { apiCall } from "./api-call";

export const createAccount = async (dto: RegisterFormSchema) => {
  return await apiCall("/auth/register", { method: "POST", data: dto });
};

export const login = async (dto: LoginFormSchema) => {
  const response = await apiCall("/auth/login", { method: "POST", data: dto });
  localStorage.setItem("token", response.data.token);
};
