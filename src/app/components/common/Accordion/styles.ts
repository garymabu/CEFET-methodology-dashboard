import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';

export const StyledRow = styled(Row)``;

export const StyledCol = styled(Col)`
  display: flex;
  font-weight: 700;
`;

export const StyledAccordion = styled(Accordion)`
  box-shadow: 0px 2px 6px #00000057;
  background-color: ${(props) => props.theme.colors.white};
`;

export const StyledAccordionHeader = styled(Accordion.Header)`
  font-size: ${(props) => props.theme.sizes.fontSizes.title};
  --bs-accordion-active-bg: ${(props) => props.theme.colors.white};
  --bs-accordion-active-color: ${(props) => props.theme.colors.black};
`;
export const StyledAccordionCollapse = styled(Accordion.Item)`
  font-size: ${(props) => props.theme.sizes.fontSizes.body};
`;

export const StyledAccordionBody = styled(Accordion.Body)``;
