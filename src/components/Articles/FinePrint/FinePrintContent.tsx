import React from 'react';
import styled, { css } from 'styled-components';
import { md, xlg } from '../../../styles/breakpoints';
import { font, fontSize } from '../../../styles';
import { cssThemedColor, cssThemedLink, cssArticleBoxStyles } from '../../../styles/mixins';

const ContentWrapper = styled.div`
  ${cssThemedColor}
  ${cssArticleBoxStyles}

  a {
    ${cssThemedLink}
  }

  font: ${fontSize.md}/2.4rem ${font.pnr};
  margin-bottom: 3rem;
  max-width: 100%;
  padding: 0 0.4rem 2.6rem 1rem;

  ${md(css`
    padding: 0.8rem 3.2rem 2.4rem 1rem;
  `)}

  ${xlg(css`
    padding: 0.8rem 3rem 3rem 2.4rem;
  `)}
`;

export type FinePrintContentProps = { content: string; };

const FinePrintContent = ({ content }: FinePrintContentProps) => (
  <ContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
);

export default FinePrintContent;
