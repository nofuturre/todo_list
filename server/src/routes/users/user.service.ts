import { Prisma, User } from "@prisma/client";
import { prisma } from "../..";

export class UserService {
  async getAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async getById(id: string): Promise<User> {
    return prisma.user.findUniqueOrThrow({ where: { id } });
  }

  async getByEmail(email: string): Promise<User> {
    return prisma.user.findUniqueOrThrow({ where: { email } });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data });
  }

  async updateById(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<User> {
    return prisma.user.delete({ where: { id } });
  }
}
