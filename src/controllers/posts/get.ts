import { Request, Response } from "express";
import prisma from "../../config/prisma";
import { logger } from "../../services";
import { error } from "../../services/error";
import * as posts from "../../services/posts";

export const get = async (req: Request, res: Response) => {
  try {
    logger.info("[GET Posts] Finding posts");

    const { lang, pageId } = req.query;

    const postsfinded = await posts.get({
      pageId,
      prisma,
      lang,
    });

    return res.status(200).json(postsfinded);
  } catch (err) {
    return error({ res, err });
  }
};
