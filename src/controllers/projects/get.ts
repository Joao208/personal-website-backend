import { Request, Response } from "express";
import prisma from "../../config/prisma";
import { logger } from "../../services";
import { error } from "../../services/error";
import * as project from "../../services/projects";

export const get = async (req: Request, res: Response) => {
  try {
    logger.info("[GET Projects] Finding projects");

    const { lang } = req.query;

    const projects = await project.get({ prisma, lang });

    return res.status(200).json(projects);
  } catch (err) {
    return error({ res, err });
  }
};
