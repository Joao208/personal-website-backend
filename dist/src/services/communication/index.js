"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.communication = void 0;
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var __1 = require("..");
var newpost_1 = require("../../templates/newpost");
var SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: "us-east-2",
};
var AWS_SES = new aws_sdk_1.default.SES(SES_CONFIG);
var sendEmail = function (_a) {
    var recipientEmail = _a.recipientEmail, title = _a.title, subtitle = _a.subtitle, cover = _a.cover, PostId = _a.PostId, EmailId = _a.EmailId;
    var params = {
        Source: "joao@joaobarros.blog",
        Destination: {
            ToAddresses: [recipientEmail],
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: (0, newpost_1.newPost)({
                        title: title,
                        subtitle: subtitle,
                        cover: encodeURI(cover),
                        PostId: PostId,
                        EmailId: EmailId,
                    }),
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Hello internauta!",
            },
        },
    };
    __1.logger.info("[sendEmail] Sending email to ".concat(recipientEmail));
    return AWS_SES.sendEmail(params).promise();
};
exports.communication = {
    sendEmail: sendEmail,
};
