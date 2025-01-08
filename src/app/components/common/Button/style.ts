import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';

const buttonEssentialStyle = css`
  cursor: pointer;
`;

export const StyledClearFilterButton = styled(Button)`
  ${buttonEssentialStyle}
  background-color: ${(props) => props.theme.colors.buttonGray};
  color: ${(props) => props.theme.colors.clearFilterButtonBlack};
  font-size: ${(props) => props.theme.sizes.fontSizes.button};
  border: 1px solid ${(props) => props.theme.colors.buttonGray};
`;

export const StyledSubmitFilterButton = styled(Button)`
  ${buttonEssentialStyle}
  background-color: ${(props) => props.theme.colors.brightGreen};
  border: 1px solid ${(props) => props.theme.colors.brightGreen};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.fontSizes.button};
  margin-left: 8px;
  width: unset;
  :hover {
    background-color: ${(props) =>
    props.theme.colors.bootstrapColors.blackBlue};
    color: ${(props) => props.theme.colors.white};
  }
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledExportButton = styled(Button)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.greenishBlue};
  font-size: ${(props) => props.theme.sizes.fontSizes.button};
  border: 1px solid ${(props) => props.theme.colors.greenishBlue};
`;

export const Spacer = styled.div`
  margin-right: 3px;
`;

export const StyledReloadButton = styled(Button)`
  ${buttonEssentialStyle}
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.brightGreen};
  border: 3px solid ${(props) => props.theme.colors.brightGreen};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.fontSizes.button};
  :hover {
    background-color: ${(props) =>
    props.theme.colors.bootstrapColors.blackBlue};
    color: ${(props) => props.theme.colors.white};
  }
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledArrowUpButton = styled(Button)`
${buttonEssentialStyle}
 background-color: ${(props) => props.theme.colors.brightGreen};
  border: 3px solid ${(props) => props.theme.colors.brightGreen};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.fontSizes.button};
  :hover {
    background-color: ${(props) =>
    props.theme.colors.bootstrapColors.blackBlue};
    color: ${(props) => props.theme.colors.white};
  }
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledBackButton = styled(Button)`
  ${buttonEssentialStyle}
  background-color: ${(props) => props.theme.colors.tableGray};
  color: ${(props) => props.theme.colors.labelBlack};
  font-size: ${(props) => props.theme.sizes.fontSizes.button};
  border: 1px solid ${(props) => props.theme.colors.tableGray};
  min-width: 100px;
`;

export const StyledXButton = styled(Button)`
  ${buttonEssentialStyle}
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.brightGreen};
  font-size: ${(props) => props.theme.sizes.fontSizes.tableBody};
  border: 2px solid ${(props) => props.theme.colors.brightGreen};
`;

export const StyledGreenButton = styled(Button) <{ selected?: boolean }>`
  ${buttonEssentialStyle}
  font-weight: bold;
  background-color: ${(props) => props.theme.colors[props.selected ? 'brightGreen' : 'white']};
  border: 1px solid ${(props) => props.theme.colors.brightGreen};
  color: ${(props) => props.theme.colors[props.selected ? 'white' : 'brightGreen']};
  font-size: ${(props) => props.theme.sizes.fontSizes.realTinyContent};
  border-radius: 0;
  height: 100%;
  :hover {
    background-color: ${(props) => props.theme.colors.brightGreen};
    color: ${(props) => props.theme.colors.white};
    --bs-btn-hover-bg: ${(props) => props.theme.colors.brightGreen};
  }
`;