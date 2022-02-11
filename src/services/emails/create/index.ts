export const create = async (email: string | undefined, prisma: any) => {
  if (!email) return;

  return prisma.subscriptions.create({
    data: { email, createdAt: new Date() },
  });
};
