export const get = async ({
  prisma,
  lang = "en",
}: {
  prisma: any;
  lang: any;
}) => {
  return prisma.project.findMany({ where: { lang } });
};
