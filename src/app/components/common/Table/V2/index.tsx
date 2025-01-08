import { ReactDefaultProps } from '@/app/interfaces/util/reactProps';
import {
  StyledTable,
  StyledTableBody,
  StyledTableDataCell,
  StyledTableHead,
  StyledTableHeading,
  StyledTableRow,
} from '../style';
import { TableCellProps, TableHeaderProps, TableProps } from './interface';

export const Table: React.FC<TableProps> = ({
  children,
  bordered,
  responsive,
  striped,
  variant,
  size,
}) => {
  return <StyledTable
    striped={striped}
    responsive={responsive}
    size={size}
    variant={variant}
    bordered={bordered}
  >{children}</StyledTable>;
};

export const TableHeader: React.FC<ReactDefaultProps> = ({ children }) => {
  return <StyledTableHead>{children}</StyledTableHead>;
};

export const TableBody: React.FC<ReactDefaultProps> = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

export const TableRow: React.FC<ReactDefaultProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export const TableHeaderCell: React.FC<TableHeaderProps> = ({
  children,
  width,
  colSpan,
  rowSpan,
}) => {
  return (
    <StyledTableHeading rowSpan={rowSpan} colSpan={colSpan} width={width}>
      {children}
    </StyledTableHeading>
  );
};

export const TableCell: React.FC<TableCellProps> = (
  {
    children,
    colSpan,
    rowSpan,
    width,
    verticalAlignment
  }
) => (
  <StyledTableDataCell
    colSpan={colSpan}
    rowSpan={rowSpan}
    width={width}
    verticalAlign={verticalAlignment}
  >
    {children}
  </StyledTableDataCell>
);
