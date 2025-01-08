import {
  IClearButton,
  IExportButton,
  ISubmitButton,
  IArrowUpButton,
  IBackButton,
  CloseButton,
  GreenButtonProps,
} from './interfaces';
import { texts } from './constants';
import {
  StyledClearFilterButton,
  StyledSubmitFilterButton,
  StyledExportButton,
  Spacer,
  StyledArrowUpButton,
  StyledBackButton,
  StyledXButton,
  StyledGreenButton,
} from './style';
import Form from 'react-bootstrap/Form';
import { InputType } from '@/app/interfaces/util/inputType';
import FileIcon from '../Icon/File';
import ArrowUp from '../Icon/BoxArrowUp';
import X from '../Icon/X';


export const ClearFilterButton: React.FC<IClearButton> = (props) => {
  const { onClearFilter } = props;

  const { clearFilterText } = texts;

  return (
    <StyledClearFilterButton onClick={onClearFilter}>
      {clearFilterText}
    </StyledClearFilterButton>
  );
};

export const SubmitFilterButton: React.FC<ISubmitButton> = (props) => {
  const { onSubmit } = props;

  const { applyFilterText } = texts;

  return (
    <StyledSubmitFilterButton
      as={Form.Control}
      value={applyFilterText}
      type={InputType.SUBMIT}
      onClick={onSubmit}
    />
  );
};

export const ExportButton: React.FC<IExportButton> = (props) => {
  const { onExport } = props;

  const { applyExportText } = texts;

  return (
    <StyledExportButton onClick={onExport}>
      <FileIcon />
      <Spacer />
      {applyExportText}
    </StyledExportButton>
  );
};

export const ArrowUpButton: React.FC<IArrowUpButton> = (props) => {
  const { onClick } = props;

  return (
    <StyledArrowUpButton onClick={onClick}>
      <ArrowUp />
    </StyledArrowUpButton>
  );
};

export const BackButton: React.FC<IBackButton> = (props) => {
  const { onClick } = props;
  const { voltarText } = texts;

  return (
    <StyledBackButton onClick={onClick}>
      <Spacer />
      {voltarText}
    </StyledBackButton>
  );
};

export const XButton: React.FC<CloseButton> = (props) => {
  const { onClick } = props;

  return (
    <StyledXButton onClick={onClick}>
      <X />
    </StyledXButton>
  );
};

export const GreenButton : React.FC<GreenButtonProps> = (props) => {
  const { onClick, children, selected } = props;

  return (
    <StyledGreenButton selected={selected} onClick={onClick}>
      {children}
    </StyledGreenButton>
  );
};