import { InternalServiceError } from "errors-stack";
import { communication } from ".";
import { logger } from "..";
import prisma from "../../config/prisma";
import * as emails from "../emails";

export const sendAllRecipients = async ({
  title,
  subtitle,
  cover,
  PostId,
}: {
  title: string;
  subtitle: string;
  cover: string;
  PostId: string;
}) => {
  logger.info("[sendAllRecipients] Sending emails for all recipients");

  const allRecipients = await emails.get(prisma);

  logger.info(
    `[sendAllRecipients] total of recipients ${allRecipients?.length}`
  );

  await prisma.sentEmail.create({ data: { PostId, createdAt: new Date() } });

  for (const { email, id } of allRecipients) {
    const postSent = await prisma.sentEmail.findFirst({ where: { PostId } });

    if (!postSent) {
      throw new InternalServiceError("Error in create new sent email");
    }

    if (postSent.emails.includes(email)) {
      logger.info(
        `[sendAllRecipients] Email already sended to ${email}, skipping`
      );

      continue;
    }

    await communication.sendEmail({
      recipientEmail: email,
      title,
      subtitle,
      cover,
      PostId,
      EmailId: id,
    });

    logger.info("[sendAllRecipients] Save email sended");

    await prisma.sentEmail.update({
      where: {
        id: postSent.id,
      },
      data: {
        emails: [email, ...postSent?.emails],
      },
    });
  }
};
