import { UnauthorizedError } from "errors-stack";
import { NextFunction, Request, Response } from "express";
import { error } from "../services/error";

export const requireToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { headers } = req;

    if (headers.authorization !== process.env.AUTH_TOKEN) {
      throw new UnauthorizedError({ message: "Token invalid", status: 401 });
    }

    return next();
  } catch (err) {
    return error({ err, res });
  }
};
