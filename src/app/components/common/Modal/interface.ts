import { ReactDefaultProps } from '@/app/interfaces/util/reactProps';

interface ModalProps extends ReactDefaultProps {
  size?: 'sm' | 'lg' | 'xl';
  animation?: boolean;
  show?: boolean;
  centered?: boolean;
  onHide?: () => void;
}

export default ModalProps;