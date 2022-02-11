import { DataInterface } from "./create";

export const create = async (data: DataInterface, prisma: any) => {
  return prisma.project.create({
    data,
  });
};
