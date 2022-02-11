import prisma from "../../../config/prisma";

export const get = async () => {
  return prisma.subscriptions.findMany();
};
