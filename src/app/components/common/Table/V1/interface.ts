import { ReactElement } from 'react';

type TableProps = TableHeadProps &
  TableBodyProps & {
    size?: 'sm';
    responsive?: boolean | string;
    variant?: string;
  };

export interface TableHeadProps {
  headers: TableHeadingType[];
}

export interface TableHeadingType {
  order?: number;
  size?: number;
  name?: string;
  key?: string;
}

export type TableDataCell = string | ReactElement | ReactElement[];

export type TableDataItem = object;

export interface TableBodyProps {
  data: TableDataItem[];
  headers: TableHeadingType[];
}

export interface RenderableTableCellProps {
  data: TableDataCell;
  size?: number;
  key?: string;
}

export default TableProps;
