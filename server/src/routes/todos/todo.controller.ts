import { Request, Response } from "express";
import { TodoService } from "./todo.service";
import { CreateTodoDto, GetTodoByIdParams } from "./todo.dto";
import { AuthRequest } from "../../types/auth-request.type";

export class TodoController {
  private todoService = new TodoService();

  async getAll(req: Request, res: Response): Promise<void> {
    const todos = await this.todoService.getAll();
    res.json(todos);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = GetTodoByIdParams.parse(req.params);
    const todo = await this.todoService.getById(id);
    res.json(todo);
  }

  async create(req: AuthRequest, res: Response): Promise<void> {
    const dto = CreateTodoDto.parse(req.body);

    const todo = await this.todoService.create(req.tokenPayload.user.id, dto);
    res.json(todo);
  }
}
