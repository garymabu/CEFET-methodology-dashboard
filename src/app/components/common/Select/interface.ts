import { ReactDefaultProps } from '@/app/interfaces/util/reactProps';
import { ComponentType } from 'react';
import IFeedbackMessage from '@/app/interfaces/util/bootstrapFeedbackMessage';
import Event from '@/app/interfaces/util/generalInputEvent';

export interface ISelect {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | ComponentType<any> | undefined;
  controlId?: string;
  name?: string;
  feedbackMessage?: IFeedbackMessage;
  onChange?: (val: Event) => void;
  value?: string | number;
  isValid?: boolean;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  impersonationObj?: any;
  options?: Option[];
  defaultOption?: IDefaultOption;
  customInputLabel?: React.FC<ReactDefaultProps>;
}

export interface Option {
  name?: string;
  value: string;
}

export interface IDefaultOption extends Option {
  isAOption?: boolean;
}
