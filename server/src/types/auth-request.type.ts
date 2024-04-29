import { Request } from "express";
import { TokenPayloadDto } from "../routes/auth/auth.dto";

export type AuthRequest = Request & { tokenPayload: TokenPayloadDto };
