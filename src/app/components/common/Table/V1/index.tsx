import { v4 as uuidv4 } from 'uuid';
import ITable, {
  RenderableTableCellProps,
  TableBodyProps,
  TableHeadProps,
  TableHeadingType,
} from './interface';
import {
  StyledTable,
  StyledTableBody,
  StyledTableDataCell,
  StyledTableHead,
  StyledTableHeading,
  StyledTableRow,
} from '../style';

const Table: React.FC<ITable> = (props) => {
  const { data, headers, responsive, size, variant } = props;

  return (
    <StyledTable
      striped
      responsive={responsive}
      size={size}
      variant={variant}
      bordered
    >
      <TableHead headers={headers} />
      <TableBody headers={headers} data={data} />
    </StyledTable>
  );
};
export default Table;

export const TableHead: React.FC<TableHeadProps> = (props) => {
  const { headers } = props;

  const maxSize = headers
    .map((item) => item.size ?? 1)
    .reduce((prev, current) => prev + current);

  return (
    <StyledTableHead>
      <StyledTableRow>
        {headers
          .sort((prev, current) => (prev.order ?? 0) - (current.order ?? 0))
          .map(({ name, size }) => (
            <StyledTableHeading
              key={name}
              width={`${(size ?? 1 / maxSize).toFixed(2)}%`}
            >
              {name}
            </StyledTableHeading>
          ))}
      </StyledTableRow>
    </StyledTableHead>
  );
};

export const TableBody: React.FC<TableBodyProps> = (props) => {
  const { data, headers } = props;

  const rows: RenderableTableCellProps[][] = data.map((rowObj) =>
    Object.entries(rowObj)
      .map(([key, value]) => {
        const header: TableHeadingType = headers.find(
          (header) => header.key == key
        ) ?? { name: '', key: '' };
        return [value, header?.size ?? 1, header?.key, header.order ?? 0];
      })
      .sort(
        (prevOrderObj, currentOrderObj) =>
          Number(prevOrderObj[3]) - Number(currentOrderObj[3])
      )
      .map(
        ([data, size, key]) => ({ data, size, key } as RenderableTableCellProps)
      )
  );

  const maxSize = headers
    .map((item) => item.size ?? 1)
    .reduce((prev, current) => prev + current);

  return (
    <StyledTableBody>
      {rows.map((row) => (
        <StyledTableRow key={uuidv4()}>
          {row.map(({ data, size, key }) => (
            <StyledTableDataCell
              key={key ?? uuidv4()}
              width={`${(size ?? 1 / maxSize).toFixed(2)}%`}
            >
              {data}
            </StyledTableDataCell>
          ))}
        </StyledTableRow>
      ))}
    </StyledTableBody>
  );
};
