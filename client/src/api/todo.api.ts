import { useState } from "react";
import { apiCall } from "./api-call";
import { Todo } from "../types/todo.types";
import { useAsyncEffect } from "../hooks/useAsyncEffect";
import { TodoFormSchema } from "../forms/todo-form/todo-form.schema";

export const useGetAllTodos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Todo[]>();

  useAsyncEffect(async () => {
    await getAllTodos();
  }, []);

  const getAllTodos = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await apiCall<Todo[]>("/todos");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching todos", error);
      setIsError(true);
    }
  };

  return {
    data,
    isLoading,
    isError,
  };
};

export const createTodo = async (dto: TodoFormSchema) => {
  return await apiCall("/todos", {
    method: "POST",
    data: { ...dto, dueDate: new Date(dto.dueDate!) },
  });
};
