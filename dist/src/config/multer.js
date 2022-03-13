"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
var path_1 = __importDefault(require("path"));
var errors_stack_1 = require("errors-stack");
var multer_s3_1 = __importDefault(require("multer-s3"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var storage = (0, multer_s3_1.default)({
    s3: new aws_sdk_1.default.S3(),
    bucket: "joaobarros",
    contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: function (_req, _file, cb) {
        cb(null, Date.now().toString());
    },
});
exports.multerConfig = {
    dest: path_1.default.resolve(__dirname, "..", "..", "tmp", "uploads"),
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: function (_req, file, cb) {
        var allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif",
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new errors_stack_1.BodyPropertyError("Invalid file type."));
        }
    },
};
