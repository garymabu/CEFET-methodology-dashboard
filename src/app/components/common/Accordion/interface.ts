import { ComponentType } from 'react';
import { ReactDefaultProps } from '@/app/interfaces/util/reactProps';

export interface IAccordion extends ReactDefaultProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | ComponentType<any> | undefined;
  open: boolean;
  onClick?: () => void;
  title?: string;
}
