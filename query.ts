import { DesignsQuery } from "./sharedTypes";

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
  const designType = designTypeQuery
    ? decodeURIComponent(designTypeQuery)
    : "Screen Print";

  return {
    perPage,
    pageNumber,
    designType,
  };
}
