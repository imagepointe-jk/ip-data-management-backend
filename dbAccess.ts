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
  const where = {
    designType: {
      name: designType,
    },
  };
  const [paginatedDesigns, allMatchingDesigns] = await prisma.$transaction([
    prisma.design.findMany({
      include: standardDesignIncludes,
      where,
      take: countPerPage,
      skip: pageNumber ? countPerPage * (pageNumber - 1) : 0,
    }),
    prisma.design.findMany({
      where,
    }),
  ]);

  return {
    designs: paginatedDesigns,
    totalResults: allMatchingDesigns.length,
  };
}

export async function getSingleDesign(designId: number) {
  return prisma.design.findUnique({
    where: {
      id: designId,
    },
    include: standardDesignIncludes,
  });
}
