import { DesignsQuery } from "./types";

export function parseDesignsQuery(query: any): DesignsQuery {
  const {
    perPage: perPageQuery,
    pageNumber: pageNumberQuery,
    designType: designTypeQuery,
  } = query;

  const perPage = !isNaN(+`${perPageQuery}`) ? +`${perPageQuery}` : undefined;
  const pageNumber = !isNaN(+`${pageNumberQuery}`)
    ? +`${pageNumberQuery}`
    : undefined;
  const designType = decodeURIComponent(designTypeQuery);

  return {
    perPage,
    pageNumber,
    designType,
  };
}
