import { Request, Response } from "express";
import { LoginDto, RegisterDto } from "./auth.dto";
import { AuthService } from "./auth.service";

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response) {
    const dto = LoginDto.parse(req.body);
    res.json(await this.authService.login(dto));
  }

  async register(req: Request, res: Response) {
    console.log(req.body);
    const dto = RegisterDto.parse(req.body);
    res.json(await this.authService.createAccount(dto));
  }
}
