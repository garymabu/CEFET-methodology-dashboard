import { ISelect } from './interface';
import {
  SelectFeedback,
  SelectLabel as _SelectLabel,
  SelectWrapper,
  StyledOption,
  StyledSelect,
} from './style';

const Select: React.FC<ISelect> = (props) => {
  const {
    as: asProp,
    feedbackMessage,
    onChange,
    value,
    isValid,
    label,
    name,
    impersonationObj,
    options,
    defaultOption,
    customInputLabel,
  } = props;

  const SelectLabel = customInputLabel || _SelectLabel;
  return (
    <SelectWrapper
      as={asProp}
      {...(impersonationObj ?? {})}
    >
      {label && <SelectLabel>{label}</SelectLabel>}
      <StyledSelect
        name={name}
        value={value}
        onChange={onChange}
        isValid={isValid}
        isInvalid={typeof isValid === 'boolean' && !isValid}
      >
        {defaultOption && (
          <StyledOption
            disabled={!defaultOption.isAOption}
            value={defaultOption.value}
          >
            {defaultOption.name ?? defaultOption.value}
          </StyledOption>
        )}
        {options?.map((option) => {
          const { name: _name, value: optionValue } = option;
          return (
            <StyledOption key={optionValue} value={optionValue}>
              {_name ?? optionValue}
            </StyledOption>
          );
        })}
      </StyledSelect>
      {feedbackMessage && (
        <SelectFeedback type={feedbackMessage.type}>
          {feedbackMessage.message}
        </SelectFeedback>
      )}
    </SelectWrapper>
  );
};

export default Select;
