import prisma from "../../../config/prisma";
import { DataInterface } from "./create";

export const create = async (data: DataInterface) => {
  return prisma.project.create({
    data,
  });
};
