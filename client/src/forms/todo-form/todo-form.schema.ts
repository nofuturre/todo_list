import { z } from "zod";

export const TodoFormSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  dueDate: z.string().optional(),
});

export type TodoFormSchema = z.infer<typeof TodoFormSchema>;
