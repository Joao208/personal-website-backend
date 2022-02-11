import { Request, Response } from "express";
import prisma from "../../config/prisma";
import { logger } from "../../services";
import { error } from "../../services/error";
import * as projects from "../../services/projects";

export const create = async (req: Request, res: Response) => {
  try {
    logger.info("[Create Projects] Create new project");

    const post = await projects.create(req.body, prisma);

    return res.status(200).json(post);
  } catch (err: any) {
    return error({ res, err });
  }
};
