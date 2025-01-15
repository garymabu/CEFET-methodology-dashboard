import { Table } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledTable = styled(Table)`
  background-color: ${(props) => props.theme.colors.lightPurple};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const StyledTableHead = styled.thead``;

export const StyledTableRow = styled.tr`
  border: 1px solid ${(props) => props.theme.colors.tableBorder};
`;

export const StyledTableHeading = styled.th<{ width?: string }>`
  font-size: ${(props) => props.theme.sizes.fontSizes.tableHeading};
  font-weight: bold;
  font-family: 'Hind', sans-serif;
  ${(props) => props.width && `width: ${props.width};`}
  text-align: left;
`;

export const StyledTableDataCell = styled.td<{ width?: string, verticalAlign?: string }>`
  --bs-table-bg: ${(props) => props.theme.colors.tableDataGray};
  --bs-table-striped-bg: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.sizes.fontSizes.tableBody};
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.verticalAlign && `vertical-align: ${props.verticalAlign};`}
  color: ${(props) => props.theme.colors.white};
`;

export const StyledTableBody = styled.tbody``;
