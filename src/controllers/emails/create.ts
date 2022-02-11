import { Response } from "express";
import { ReqFile } from "../../config/multer";
import { logger } from "../../services";
import { error } from "../../services/error";
import * as email from "../../services/emails";
import { ReqEmail } from "../../middlewares";
import prisma from "../../config/prisma";

// @ts-ignore
interface ReqEmailController extends ReqFile, ReqEmail {}

export const create = async (req: ReqEmailController, res: Response) => {
  try {
    logger.info("[Create Emails] Create subscription");

    const subscription = await email.create(req.email, prisma);

    return res.status(200).json(subscription);
  } catch (err) {
    return error({ res, err });
  }
};
