export const get = async ({
  pageId,
  prisma,
  lang = "en",
}: {
  pageId: any;
  prisma: any;
  lang: any;
}) => {
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
