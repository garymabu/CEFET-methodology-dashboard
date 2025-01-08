import styled, { css } from 'styled-components';
import { Pagination } from 'react-bootstrap';

export const StyledPagination = styled(Pagination)`
  /* box-shadow: 0px 2px 2px #0000003d; */
  margin-bottom: 0;
`;

const commonPaginationStyle = css`
  --bs-pagination-color: ${(props) => props.theme.colors.black};
  --bs-pagination-active-bg: ${(props) => props.theme.colors.black};
  /* box-shadow: 0px 2px 10px 0px #0000003d; */
`;

export const StyledPaginationFirstItem = styled(Pagination.Item)`
  ${commonPaginationStyle}
  .page-link {
    box-shadow: 0px 2px 4px 1px #0000003d;
  }
  
`;

export const StyledPaginationLastItem = styled(Pagination.Item)`
  ${commonPaginationStyle}
  .page-link {
    box-shadow: 1px 2px 4px 0px #0000003d;
  }
`;

export const StyledPaginationPrevious = styled(Pagination.Item)`
  ${commonPaginationStyle}
  box-shadow: 0px 2px 4px 0px #0000003d;
`;

export const StyledPaginationNext = styled(Pagination.Item)`
  ${commonPaginationStyle}
  box-shadow: 0px 2px 4px 0px #0000003d;
`;

export const StyledPaginationItem = styled(Pagination.Item)`
  ${commonPaginationStyle}
  box-shadow: 0px 2px 4px 0px #0000003d;
`;
