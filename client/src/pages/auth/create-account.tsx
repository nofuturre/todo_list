import { useNavigate } from "react-router-dom";
import { createAccount } from "../../api/auth.api";
import { RegisterForm } from "../../forms/register-form/RegisterForm";
import { RegisterFormSchema } from "../../forms/register-form/register-form.schema";
import { MainLayout } from "../../layout/MainLayout";

export const CreateAccountPage = () => {
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      await createAccount(data);
      navigate("/auth/login");
    } catch (error) {
      alert("Error creating account");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-[400px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create Account</h1>
        <RegisterForm onSubmit={onSubmit} />
      </div>
    </MainLayout>
  );
};
