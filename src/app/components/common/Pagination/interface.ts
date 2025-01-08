interface IPagination {
  page: number;
  pages?: number;
  onChangePage?: (newPage: number) => void;
  numbersInExibition?: number;
}

export default IPagination;
