import prisma from "../../../config/prisma";

export const get = async (lang: any = "pt") => {
  return prisma.project.findMany({ where: { lang } });
};
