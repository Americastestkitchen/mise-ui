import React from 'react';
import styled, { css } from 'styled-components';
import { xlg } from '../../../styles/breakpoints';
import Accordion from '../../Accordion/Accordion';
import FinePrintContent from './FinePrintContent';
import FinePrintLabel from './FintPrintLabel';

import { color, mixins, withThemes } from '../../../styles';

const FinePrintWrapperTheme = {
  default: css`
    background-color: ${color.white};
    margin-bottom: 3rem;
    max-width: 100%;
  
    ${xlg(css`
      ${mixins.articlesWidth('default')};
    `)}
  
    .accordion-item__button {
      position: relative;
      width: 100%;
    }
  `,
  cco: css`
    ${mixins.ccoReviewSetBorder()}
  `,
};

const FinePrintWrapper = styled.div`
  ${withThemes(FinePrintWrapperTheme)}
`;

export type FinePrintProps = {
  content: string;
  id?: string;
  isHidden?: boolean;
  onClick?: () => void;
  subtitle: string;
  title: string;
};

const FinePrint = ({
  content,
  id = '',
  isHidden = false,
  onClick = () => {},
  subtitle,
  title,
}: FinePrintProps) => (
  <FinePrintWrapper>
    <Accordion
      id={id || `fine-print__acordion--${title}`}
      iconSize="large"
      isHidden={isHidden}
      label={() => <FinePrintLabel subtitle={subtitle} title={title} />}
      onClick={onClick}
    >
      <FinePrintContent content={content} />
    </Accordion>
  </FinePrintWrapper>
);

export default FinePrint;
