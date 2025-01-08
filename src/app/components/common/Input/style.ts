import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

export const InputWrapper = styled(Form.Group)``;

export const InputLabel = styled(Form.Label)`
  font-size: ${(props) => props.theme.sizes.fontSizes.inputSize};
  margin-bottom: 0.1rem;
`;

export const StyledInput = styled(Form.Control)``;

export const InputFeedback = styled(Form.Control.Feedback)``;
