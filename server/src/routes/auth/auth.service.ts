import bcrypt from "bcryptjs";
import { UserService } from "../users/user.service";
import { LoginDto, RegisterDto, TokenPayloadDto } from "./auth.dto";
import { User } from "@prisma/client";
import { JWTService } from "../../common/jwt.service";

export class AuthService {
  private userService = new UserService();
  private jwtService = new JWTService();

  async login(dto: LoginDto): Promise<{ user: User; token: string }> {
    const user = await this.userService.getByEmail(dto.email);
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    return {
      user,
      token: this.jwtService.generateToken(user),
    };
  }

  async createAccount(dto: RegisterDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(dto.password, 12);

    return this.userService.create({
      email: dto.email,
      password: hashedPassword,
    });
  }
}
