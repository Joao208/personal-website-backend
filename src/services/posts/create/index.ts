import prisma from "../../../config/prisma";
import { DataInterface } from "./create";

export const create = async (data: DataInterface) => {
  return prisma.post.create({
    data: { ...data, createdAt: new Date() },
  });
};
