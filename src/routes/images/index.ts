import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../../config/multer";
import * as Images from "../../controllers/images";
import { requireToken } from "../../middlewares";

const routes = Router();

routes.post(
  "/images",
  requireToken,
  multer(multerConfig).single("file"),
  Images.create
);

export default routes;
