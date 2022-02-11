export const edelete = async (id: any, prisma: any) => {
  return prisma.subscriptions.delete({
    where: {
      id,
    },
  });
};
