import cors from "cors";
import express, { Express } from "express";
import { PrismaClient } from "@prisma/client";
import { secure } from "./middleware/secure.middleware";
import { TodoController } from "./routes/todos/todo.controller";
import { AuthRequest } from "./types/auth-request.type";
import { AuthController } from "./routes/auth/auth.controller";
import bodyParser from "body-parser";

export const prisma = new PrismaClient();

const app: Express = express();

app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }));

// app.use("/api/todos", (req: Request, res: Response, next: NextFunction) =>
//   new SecureMiddleware(req, res, next).init()
// );

app.use(bodyParser.json());

const authController = new AuthController();

app.post(`/api/auth/register`, (req, res) => authController.register(req, res));
app.post(`/api/auth/login`, (req, res) => authController.login(req, res));

const todoController = new TodoController();

app.get(`/api/todos`, secure, (req, res) => todoController.getAll(req, res));
app.get(`/api/todos/:id`, secure, (req, res) =>
  todoController.getById(req, res)
);
app.post(`/api/todos`, secure, (req, res) =>
  todoController.create(req as AuthRequest, res)
);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
