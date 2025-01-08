import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const StyledModalBody = styled(Modal.Body)`
  font-size: ${(props) => props.theme.sizes.fontSizes.tableBody};
  color: ${(props) => props.theme.colors.titleBlack};
`;

export const StyledModalTitle = styled(Modal.Title)`
  font-size: ${(props) => props.theme.sizes.fontSizes.subTitle};
  color: ${(props) => props.theme.colors.labelBlack};
`;

export const StyledModal = styled(Modal)``;

export const StyledModalHeader = styled(Modal.Header)``;

export const StyledModalFooter = styled(Modal.Footer)``;