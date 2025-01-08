import { ReactDefaultProps } from '@/app/interfaces/util/reactProps';

export interface TableHeaderProps extends ReactDefaultProps {
  width?: string;
  colSpan?: number;
  rowSpan?: number;
}

export interface TableProps extends ReactDefaultProps {
  responsive?: boolean;
  striped?: boolean;
  bordered?: boolean;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'lg';
}

export interface TableCellProps extends ReactDefaultProps {
  verticalAlignment?: 'top' | 'middle' | 'bottom';
  colSpan?: number;
  rowSpan?: number;
  width?: string;
}