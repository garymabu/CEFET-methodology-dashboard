import React, { ComponentType } from 'react';
import IFeedbackMessage from '@/app/interfaces/util/bootstrapFeedbackMessage';
import Event from '@/app/interfaces/util/generalInputEvent';

export interface IInput {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | ComponentType<any> | undefined;
  controlId?: string;
  name?: string;
  feedbackMessage?: IFeedbackMessage;
  onChange?: (val: Event) => void;
  value?: string | number;
  isValid?: boolean;
  label?: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  impersonationObj?: any;
  customInputLabel?: React.FC;
}
