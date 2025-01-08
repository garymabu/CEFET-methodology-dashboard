import { IAccordion } from './interface';
import {
  StyledAccordion,
  StyledAccordionBody,
  StyledAccordionCollapse,
  StyledAccordionHeader,
  StyledCol,
  StyledRow,
} from './styles';

const activeEventKey = '1';
const closedEventKey = '0';

export const Accordion: React.FC<IAccordion> = (props) => {
  const {
    as: asProp,
    open,
    onClick,
    children,
    title,
  } = props;

  // const
  const eventKey = open ? activeEventKey : closedEventKey;

  const killPropagation = (e: React.MouseEvent<HTMLElement>) => { e.stopPropagation(); };

  return (
    <div>
      <StyledAccordion activeKey={eventKey} as={asProp} >
        <StyledAccordionCollapse eventKey={activeEventKey}>
          <StyledAccordionHeader onClick={onClick}>
            <StyledRow>
              <StyledCol>
                {title}
              </StyledCol>
            </StyledRow>
          </StyledAccordionHeader>
          <StyledAccordionBody onClick={killPropagation}>
            {children}
          </StyledAccordionBody>
        </StyledAccordionCollapse>
      </StyledAccordion>
    </div>
  );
};
export default Accordion;
