import { Request, Response } from "express";
import { logger } from "../../services";
import { error } from "../../services/error";
import * as posts from "../../services/posts";

export const get = async (req: Request, res: Response) => {
  try {
    logger.info("[GET Posts] Finding posts");

    const { lang, pageId } = req.query;

    const postsFound = await posts.get({
      pageId,
      lang,
    });

    return res.status(200).json(postsFound);
  } catch (err) {
    return error({ res, err });
  }
};
