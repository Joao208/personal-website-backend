import prisma from "../../../config/prisma";
import { GetParams } from "./get";

export const get = async ({ pageId, lang = "en" }: GetParams) => {
  if (pageId && pageId !== "undefined") {
    return prisma.post.findUnique({ where: { id: pageId } });
  }

  return prisma.post.findMany({
    where: { lang },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
};
