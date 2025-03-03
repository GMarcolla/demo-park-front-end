export interface RetornoPaginado<T> {
  content: T[];
  first: boolean;
  last: boolean;
  size: number;
  totalElements: number;
  totalPages: number;
  page: number;
  pageElements: number;
}
