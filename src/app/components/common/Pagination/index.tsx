import DoubleLeftArrow from '../Icon/DoubleLeftArrow';
import DoubleRightArrow from '../Icon/DoubleRightArrow';
import LeftArrow from '../Icon/LeftArrow';
import RightArrow from '../Icon/RightArrow';
import IPagination from './interface';
import { StyledPagination, StyledPaginationFirstItem, StyledPaginationItem, StyledPaginationLastItem, StyledPaginationNext, StyledPaginationPrevious } from './style';

const firstPage = 1;
const defaultItemsInExibition = 6;
const filler = '...';

const Pagination: React.FC<IPagination> = (props) => {
  const {
    page,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChangePage = ()=>{},
    pages = 1,
    numbersInExibition
  } = props;

  const itemsInExibition = numbersInExibition || defaultItemsInExibition;

  const isFirstPage = firstPage === page;
  const isLastPage = pages === page;
  const lowerLimit = ((page - Math.floor(itemsInExibition / 2)) - 1) >= firstPage ? (page - (itemsInExibition / 2)) - 1 : 0;
  const upperLimit = (page + Math.ceil(itemsInExibition / 2) - 2);

  return (
    <StyledPagination>
      <StyledPaginationFirstItem
        onClick={() => onChangePage(firstPage)}
        disabled={isFirstPage}
      >
        <DoubleLeftArrow />
      </StyledPaginationFirstItem>
      <StyledPaginationPrevious
        onClick={() => onChangePage((page - 1) <= firstPage ? firstPage : (page - 1))}
        disabled={isFirstPage}
      >
        <LeftArrow />
      </StyledPaginationPrevious>
      <StyledPaginationItem onClick={() => onChangePage(firstPage)} active={isFirstPage}>{firstPage}</StyledPaginationItem>
      {
        lowerLimit + 1 > (firstPage) &&
        <StyledPaginationItem disabled>
          {filler}
        </StyledPaginationItem>
      }
      {
        Array.from(new Array(pages))
          .map((_, i) => {
            i = i + 1;
            return i;
          })
          .slice(1, -1)
          .slice(lowerLimit, upperLimit)
          .map((i) => {
            return (
              <StyledPaginationItem key={i} onClick={() => onChangePage(i)} active={i === page}>
                {i}
              </StyledPaginationItem>
            );
          })
      }
      {
        upperLimit + 3 <= pages &&
        <StyledPaginationItem disabled>
          {filler}
        </StyledPaginationItem>
      }
      {
        pages > firstPage
        && <StyledPaginationItem
          active={isLastPage}
          onClick={() => onChangePage(pages)}
        >
          {pages}
        </StyledPaginationItem>
      }
      <StyledPaginationNext
        disabled={isLastPage}
        onClick={() => onChangePage((page + 1) <= pages ? (page + 1) : pages)}
      >
        <RightArrow />
      </StyledPaginationNext>
      <StyledPaginationLastItem
        disabled={isLastPage}
        onClick={() => onChangePage(pages)}
      >
        <DoubleRightArrow />
      </StyledPaginationLastItem>
    </StyledPagination >
  );
};

export default Pagination;