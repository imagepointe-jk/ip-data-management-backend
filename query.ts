import { DesignsQuery } from "./types";

export function parseDesignsQuery(query: any): DesignsQuery {
  const { perPage: perPageQuery, pageNumber: pageNumberQuery } = query;

  const perPage = !isNaN(+`${perPageQuery}`) ? +`${perPageQuery}` : undefined;
  const pageNumber = !isNaN(+`${pageNumberQuery}`)
    ? +`${pageNumberQuery}`
    : undefined;

  return {
    perPage,
    pageNumber,
  };
}
