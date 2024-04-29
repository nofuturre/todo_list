import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { TokenPayloadDto } from "../routes/auth/auth.dto";

const TOKEN_SECRET = "Imaprogammer";

export class JWTService {
  generateToken(user: User) {
    const payload = TokenPayloadDto.parse({ user: { id: user.id } });

    return jwt.sign(payload, TOKEN_SECRET, {
      expiresIn: "6h",
    });
  }

  verifyToken(token: string): TokenPayloadDto {
    const decoded = jwt.verify(token.toString(), TOKEN_SECRET);
    return TokenPayloadDto.parse(decoded);
  }
}
