import React from 'react';
import styled, { css } from 'styled-components';
import { md, xlg } from '../../../styles/breakpoints';
import { font, fontSize } from '../../../styles';
import { cssThemedColor } from '../../../styles/mixins';

const LabelWrapper = styled.div`
  max-width: 33.3rem;
  padding: 2.4rem 2.3rem 1.9rem 1rem;
  text-align: left;
  text-transform: none;

  ${md(css`
    max-width: 69.6rem;
    padding: 2.4rem 2.4rem 2.1rem 1.6rem;
  `)}

  ${xlg(css`
    max-width: 63.2rem;
    padding: 2.4rem 2.4rem 2.0rem 2.4rem;
  `)}
`;

const FinePrintTitle = styled.h3`
  ${cssThemedColor}
  font: ${fontSize.xl}/2.6rem ${font.pnb};
  letter-spacing: normal;
  min-height: 3.3rem;
  width: 100%;
`;

const FinePrintSubtitle = styled.span`
  ${cssThemedColor}
  font: ${fontSize.md}/normal ${font.pnr};
  letter-spacing: normal;
  min-height: 2rem;
  width: 100%: 
`;

export type FinePrintLabelProps = {
  subtitle: string;
  title: string;
};

const FinePrintLabel = ({
  subtitle,
  title,
}: FinePrintLabelProps) => (
  <LabelWrapper>
    <FinePrintTitle>{title}</FinePrintTitle>
    <FinePrintSubtitle>{subtitle}</FinePrintSubtitle>
  </LabelWrapper>
);

export default FinePrintLabel;
