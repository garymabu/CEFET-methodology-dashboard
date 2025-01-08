import ModalProps from './interface';
import { StyledModal, StyledModalBody, StyledModalFooter, StyledModalHeader, StyledModalTitle } from './style';

const Modal : React.FC<ModalProps> = (props) => {
  const {
    size,
    animation,
    show,
    centered,
    children,
    onHide,
  } = props;

  return(
    <StyledModal
      size={size}
      animation={animation}
      show={show}
      centered={centered}
      onHide={onHide}
    >
      {children}
    </StyledModal>
  );
};

export const ModalHeader = StyledModalHeader;

export const ModalTitle = StyledModalTitle;

export const ModalBody = StyledModalBody;

export const ModalFooter = StyledModalFooter;

export default Modal;