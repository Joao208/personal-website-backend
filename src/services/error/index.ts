import { Response } from "express";
import { logger } from "..";

export const error = ({ res, err }: { res: Response; err: any }) => {
  logger.error(err);

  return res
    .status(err?.status || 400)
    .json(err?.message || "Internal Server Error");
};
