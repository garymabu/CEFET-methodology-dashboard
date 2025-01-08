import { ReactDefaultProps } from '@/app/interfaces/util/reactProps';

type ClickHandlerType = (event: unknown) => void;

export interface IClearButton {
  onClearFilter?: ClickHandlerType;
}

export interface ISubmitButton {
  onSubmit?: ClickHandlerType;
}

export interface IExportButton {
  onExport?: ClickHandlerType;
}

export interface IReloadButton {
  onReload?: ClickHandlerType;
}

export interface IArrowUpButton {
  onClick?: ClickHandlerType;
}

export interface IBackButton {
  onClick?: ClickHandlerType;
}

export interface CloseButton {
  onClick?: ClickHandlerType;
}

export interface Button {
  onClick?: ClickHandlerType;
}

export interface GreenButtonProps extends ReactDefaultProps {
  onClick?: ClickHandlerType;
  selected?: boolean;
}