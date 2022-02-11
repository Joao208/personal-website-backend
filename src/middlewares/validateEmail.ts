import { BodyPropertyError } from "errors-stack";
import { NextFunction, Request, Response } from "express";
import prisma from "../config/prisma";
import { error } from "../services/error";

export interface ReqEmail extends Request {
  email?: string;
}

export const validateEmail = async (
  req: ReqEmail,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const formatEmail = () => {
      return String(email).toLowerCase().trim();
    };

    const validate = () => {
      return formatEmail().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    if (email && !validate()) {
      throw new BodyPropertyError("Body params is invalid!");
    }

    const emailAlreadyExist = await prisma.subscriptions.findFirst({
      where: { email: formatEmail() },
    });

    if (emailAlreadyExist) {
      return res.status(200).json("Email already subscribed");
    }

    req.email = formatEmail();

    return next();
  } catch (err) {
    return error({ res, err });
  }
};
