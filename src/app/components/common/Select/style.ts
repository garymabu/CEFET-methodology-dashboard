import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

export const SelectWrapper = styled(Form.Group)``;

export const SelectLabel = styled(Form.Label)`
  font-size: ${(props) => props.theme.sizes.fontSizes.inputSize};
  margin-bottom: 0.1rem;
`;

export const StyledSelect = styled(Form.Select)``;

export const SelectFeedback = styled(Form.Control.Feedback)``;

export const StyledOption = styled.option``;
