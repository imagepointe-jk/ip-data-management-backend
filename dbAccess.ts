import { defaultPerPage } from "./constants";
import { prisma } from "./prismaClient";
import { DesignsQuery } from "./sharedTypes";

const standardDesignIncludes = {
  designSubcategories: true,
  designTags: true,
  designType: true,
  image: true,
  defaultBackgroundColor: true,
};

export async function getDesigns(query: DesignsQuery) {
  const { pageNumber, perPage, designType } = query;
  const countPerPage = perPage || defaultPerPage;
  return prisma.design.findMany({
    include: standardDesignIncludes,
    where: {
      designType: {
        name: designType,
      },
    },
    take: countPerPage,
    skip: pageNumber ? countPerPage * (pageNumber - 1) : 0,
  });
}

export async function getSingleDesign(designId: number) {
  return prisma.design.findUnique({
    where: {
      id: designId,
    },
    include: standardDesignIncludes,
  });
}
