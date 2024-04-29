import { Prisma, Todo } from "@prisma/client";
import { prisma } from "../..";
import { CreateTodoDto } from "./todo.dto";

export class TodoService {
  async getAll(): Promise<Todo[]> {
    return prisma.todo.findMany();
  }

  async getById(id: string): Promise<Todo> {
    return prisma.todo.findUniqueOrThrow({ where: { id } });
  }

  async create(userId: string, data: CreateTodoDto): Promise<Todo> {
    return prisma.todo.create({ data: { ...data, createById: userId } });
  }

  async updateById(
    userId: string,
    id: string,
    data: Prisma.TodoUpdateInput
  ): Promise<Todo> {
    return prisma.todo.update({ where: { id, createById: userId }, data });
  }

  async delete(id: string): Promise<Todo> {
    return prisma.todo.delete({ where: { id } });
  }
}
