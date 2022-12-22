// Confirm whether provided page is valid, given the totalPage
export function isValidPage(page: number, totalPages: number) {
  return totalPages && page >= 1 && page <= totalPages;
}
