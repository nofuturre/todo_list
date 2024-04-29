import { z } from "zod";

export const Todo = z.object({
  title: z.string(),
  description: z.string(),
  dueDate: z.date(),
  completed: z.boolean(),
  createdAt: z.date(),
});

export type Todo = z.infer<typeof Todo>;
