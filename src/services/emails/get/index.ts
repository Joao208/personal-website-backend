export const get = async (prisma: any) => {
  return prisma.subscriptions.findMany();
};
