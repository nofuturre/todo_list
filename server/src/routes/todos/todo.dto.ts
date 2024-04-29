import { Prisma } from "@prisma/client";
import z from "zod";

export const GetTodoByIdParams = z.object({
  id: z.string(),
});

export const CreateTodoDto = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  dueDate: z
    .string()
    .or(z.date())
    .transform((arg) => new Date(arg)),
});

export type GetTodoByIdParams = z.infer<typeof GetTodoByIdParams>;
export type CreateTodoDto = z.infer<typeof CreateTodoDto>;
