import {
  EyeFill,
  ChevronDoubleLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDoubleRight,
  FileEarmarkFill,
  ChevronUp,
  ChevronDown,
  BoxArrowUpRight,
  X,
  CheckCircleFill,
  ArrowRight,
  ArrowLeft,
} from 'react-bootstrap-icons';
import styled from 'styled-components';

export const StyledEyeIcon = styled(EyeFill)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
  position: relative;
  top: 2px;
`;

export const StyledDoubleLeftArrow = styled(ChevronDoubleLeft)`
  height: ${(props) => props.theme.sizes.iconSizes.small};
  width: ${(props) => props.theme.sizes.iconSizes.small};
`;

export const StyledLeftArrow = styled(ChevronLeft)`
  height: ${(props) => props.theme.sizes.iconSizes.small};
  width: ${(props) => props.theme.sizes.iconSizes.small};
`;

export const StyledRightArrow = styled(ChevronRight)`
  height: ${(props) => props.theme.sizes.iconSizes.small};
  width: ${(props) => props.theme.sizes.iconSizes.small};
`;

export const StyledDoubleRightArrow = styled(ChevronDoubleRight)`
  height: ${(props) => props.theme.sizes.iconSizes.small};
  width: ${(props) => props.theme.sizes.iconSizes.small};
`;

export const StyledFile = styled(FileEarmarkFill)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
`;

export const StyledUpArrow = styled(ChevronUp)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
`;

export const StyledDownArrow = styled(ChevronDown)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
`;
export const StyledBoxArrowUp = styled(BoxArrowUpRight)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
  position: relative;
  top: 2px;
`;
export const StyledX = styled(X)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
`;

export const StyledCheckCircleFill = styled(CheckCircleFill)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
`;

export const StyledBigCheckCircleFill = styled(CheckCircleFill)`
  height: ${(props) => props.theme.sizes.iconSizes.veryBig};
  width: ${(props) => props.theme.sizes.iconSizes.veryBig};
  color: ${(props) => props.theme.colors.brightGreen};
  background-color: ${(props) => props.theme.colors.white};
`;

export const StyledStraightRightArrow = styled(ArrowRight)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
  color: ${(props) => props.theme.colors.brightGreen};
`;

export const StyledStraightLeftArrow = styled(ArrowLeft)`
  height: ${(props) => props.theme.sizes.iconSizes.medium};
  width: ${(props) => props.theme.sizes.iconSizes.medium};
  color: ${(props) => props.theme.colors.brightGreen};
`;