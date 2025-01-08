import { Table } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledTable = styled(Table)`
  background-color: ${(props) => props.theme.colors.tableGray};
  box-shadow: 0px 2px 6px #00000057;
`;

export const StyledTableHead = styled.thead``;

export const StyledTableRow = styled.tr``;

export const StyledTableHeading = styled.th<{ width?: string }>`
  font-size: ${(props) => props.theme.sizes.fontSizes.tableHeading};
  font-weight: bold;
  font-family: 'Hind', sans-serif;
  ${(props) => props.width && `width: ${props.width};`}
`;

export const StyledTableDataCell = styled.td<{ width?: string, verticalAlign?: string }>`
  --bs-table-bg: ${(props) => props.theme.colors.tableDataGray};
  --bs-table-striped-bg: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.sizes.fontSizes.tableBody};
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.verticalAlign && `vertical-align: ${props.verticalAlign};`}
  color: ${(props) => props.theme.colors.tableCellGray};
`;

export const StyledTableBody = styled.tbody``;
