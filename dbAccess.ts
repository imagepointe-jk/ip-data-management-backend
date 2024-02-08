import { defaultPerPage } from "./constants";
import { prisma } from "./prismaClient";
import { DesignsQuery } from "./types";

export async function getDesigns(query: DesignsQuery) {
  const { pageNumber, perPage, designType } = query;
  const countPerPage = perPage || defaultPerPage;
  return prisma.design.findMany({
    include: {
      designSubcategories: true,
      designTags: true,
      designType: true,
      image: true,
      defaultBackgroundColor: true,
    },
    where: {
      designType: {
        name: designType,
      },
    },
    take: countPerPage,
    skip: pageNumber ? countPerPage * (pageNumber - 1) : 0,
  });
}
