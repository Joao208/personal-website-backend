import AWS from "aws-sdk";
import { logger } from "..";
import { newPost } from "../../templates/newpost";

const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "us-east-2",
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendEmail = ({
  recipientEmail,
  title,
  subtitle,
  cover,
  PostId,
  EmailId,
}: {
  recipientEmail: string;
  title: string;
  subtitle: string;
  cover: string;
  PostId: string;
  EmailId: string;
}) => {
  const params = {
    Source: "joao@joaobarros.blog",
    Destination: {
      ToAddresses: [recipientEmail],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: newPost({
            title,
            subtitle,
            cover: encodeURI(cover),
            PostId,
            EmailId,
          }),
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Hello internauta!`,
      },
    },
  };

  logger.info(`[sendEmail] Sending email to ${recipientEmail}`);

  return AWS_SES.sendEmail(params).promise();
};

export const communication = {
  sendEmail,
};
