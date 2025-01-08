import { IInput } from './interface';
import {
  InputFeedback,
  InputLabel as _InputLabel,
  InputWrapper,
  StyledInput,
} from './style';

const Input: React.FC<IInput> = (props) => {
  const {
    as: asProp,
    feedbackMessage,
    onChange,
    value,
    isValid,
    label,
    name,
    type,
    impersonationObj,
    customInputLabel,
  } = props;

  const InputLabel = customInputLabel || _InputLabel;
  return (
    <InputWrapper as={asProp} {...(impersonationObj ?? {})}>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isValid={isValid}
        isInvalid={typeof isValid === 'boolean' && !isValid}
      />
      {feedbackMessage && (
        <InputFeedback type={feedbackMessage.type}>
          {feedbackMessage.message}
        </InputFeedback>
      )}
    </InputWrapper>
  );
};

export default Input;
