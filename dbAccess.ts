import { defaultPerPage } from "./constants";
import { prisma } from "./prismaClient";
import { DesignsQuery } from "./types";

export async function getDesigns(query: DesignsQuery) {
  const { pageNumber, perPage } = query;
  const countPerPage = perPage || defaultPerPage;
  return prisma.design.findMany({
    include: {
      designSubcategories: true,
      designTags: true,
      designType: true,
      image: true,
      defaultBackgroundColor: true,
    },
    take: countPerPage,
    skip: pageNumber ? countPerPage * (pageNumber - 1) : 0,
  });
}
