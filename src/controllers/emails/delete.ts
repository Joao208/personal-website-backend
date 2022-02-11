import { Request, Response } from "express";
import prisma from "../../config/prisma";
import { error, logger } from "../../services";
import * as email from "../../services/emails";

export const edelete = async (req: Request, res: Response) => {
  try {
    logger.info("[Delete Emails] Delete subscription");

    await email.edelete(req.query.email);

    return res.status(200).json("Inscrição encerrada com sucesso!");
  } catch (err) {
    return error({ res, err });
  }
};
