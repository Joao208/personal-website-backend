import { Response } from "express";
import { ReqFile } from "../../config/multer";
import { logger } from "../../services";
import { error } from "../../services/error";

export const create = async (req: ReqFile, res: Response) => {
  try {
    logger.info("[Create Images] Create new image and return url");

    return res.status(200).json(req.file);
  } catch (err) {
    return error({ res, err });
  }
};
