import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../forms/login-form/LoginForm";
import { MainLayout } from "../../layout/MainLayout";
import { LoginFormSchema } from "../../forms/login-form/login-form.schema";
import { login } from "../../api/auth.api";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      await login(data);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-[400px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </MainLayout>
  );
};
