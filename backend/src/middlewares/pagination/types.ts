export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export interface Pagination {
  page: number;
  size: number;
  limit: number;
  orderBy?: string;
  order?: SortOrder;
}
