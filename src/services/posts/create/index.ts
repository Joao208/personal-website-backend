import { DataInterface } from "./create";

export const create = async (data: DataInterface, prisma: any) => {
  return prisma.post.create({
    data: { ...data, createdAt: new Date() },
  });
};
