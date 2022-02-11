import prisma from "../../../config/prisma";

export const edelete = async (id: any) => {
  return prisma.subscriptions.delete({
    where: {
      id,
    },
  });
};
