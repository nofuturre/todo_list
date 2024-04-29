import { z } from "zod";

export const RegisterDto = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginDto = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const AuthDto = z.object({
  email: z.string().email(),
  token: z.string(),
});

export const TokenPayloadDto = z.object({
  user: z.object({
    id: z.string(),
  }),
});

export type RegisterDto = z.infer<typeof RegisterDto>;
export type LoginDto = z.infer<typeof LoginDto>;
export type TokenPayloadDto = z.infer<typeof TokenPayloadDto>;
