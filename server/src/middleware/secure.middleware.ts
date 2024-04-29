import { NextFunction, Request, Response } from "express";
import { JWTService } from "../common/jwt.service";

export const secure = (req: Request, res: Response, next: NextFunction) => {
  const jwtService = new JWTService();
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwtService.verifyToken(token.split(" ")[1]);
    // @ts-ignore
    req.tokenPayload = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
