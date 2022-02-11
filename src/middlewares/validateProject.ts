import { default as Ajv } from "ajv";
import { BodyPropertyError } from "errors-stack";
import { NextFunction, Request, Response } from "express";
import { error } from "../services/error";

export const validateProject = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req as {
      body: {
        title: string;
        lang?: string;
        cover: string;
        description: string;
        gitLink: string;
      };
    };

    const schema = {
      type: "object",
      properties: {
        title: {
          type: "string",
        },
        description: {
          type: "string",
        },
        gitLink: {
          type: "string",
        },
        cover: {
          type: "string",
        },
        lang: {
          type: "string",
        },
      },
      required: ["title", "description", "gitLink", "cover"],
      additionalProperties: false,
    };

    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    if (!validate(body)) {
      throw new BodyPropertyError("Body params is invalid!");
    }

    if (!body.lang) req.body.lang = "en";

    return next();
  } catch (err) {
    return error({ res, err });
  }
};
