import { Request, Response } from "express";
import { logger } from "../../services";
import { sendAllRecipients } from "../../services/communication/sendAllRecipients";
import { error } from "../../services/error";
import * as posts from "../../services/posts";

export const create = async (req: Request, res: Response) => {
  try {
    logger.info("[Create Posts] Create new post");

    const post = await posts.create(req.body);

    await sendAllRecipients({
      title: post?.title,
      subtitle: post?.subtitle,
      cover: post?.cover,
      PostId: post?.id,
    });

    return res.status(200).json(post);
  } catch (err: any) {
    return error({ res, err });
  }
};
