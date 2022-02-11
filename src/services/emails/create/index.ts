import prisma from "../../../config/prisma";

export const create = async (email: string | undefined) => {
  if (!email) return;

  return prisma.subscriptions.create({
    data: { email, createdAt: new Date() },
  });
};
