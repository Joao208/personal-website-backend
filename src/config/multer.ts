import path from "path";
import { Request } from "express";
import { BodyPropertyError } from "errors-stack";
import { Readable } from "stream";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

interface File {
  key?: string;
  originalname: string;
  mimetype: string;
  fieldname: string;
  size: number;
  encoding: string;
  stream: Readable;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

export interface ReqFile extends Request {
  file?: File;
}

const storage = multerS3({
  s3: new aws.S3(),
  bucket: "joaobarros",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read",
  key: (_req, _file, cb) => {
    cb(null, Date.now().toString());
  },
});

export const multerConfig = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (_req: Request, file: File, cb: any) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new BodyPropertyError("Invalid file type."));
    }
  },
};
