export interface Pagination {
  page: number,
  size: number,
  filter: {
    lastName: string
  }
}

export interface PaginationResponse {
  pageable: {
    pageNumber: number,
    pageSize: number
  },
  totalElements: number
}
