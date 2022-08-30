import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { color, font, fontSize, withThemes } from '../../../../styles';
import { untilXlg, xlg } from '../../../../styles/breakpoints';
import { cssThemedLink } from '../../../../styles/mixins';

type DecorationPosition = 'bottom' | 'top';

const ArticleFigcaptionTheme = {
  default: css<{ decorationPosition: DecorationPosition }>`
    color: ${color.mediumGray};
    font: ${fontSize.md}/1.5 ${font.pnb};
    position: relative;

    ${breakpoint('xs', 'xlg')`
      padding-bottom: 0.8rem;
    `}

    ${({ decorationPosition }) => (decorationPosition === 'bottom' ? 'padding-bottom: 0.8rem;' : 'padding-top: 0.8rem;')}

    &::after {
      content: '';
      display: block;
      height: 0.6rem;
      position: absolute;
      width: 1.6rem;

      ${untilXlg(css`bottom: 0;`)}
      ${({ decorationPosition }) => xlg(css`${decorationPosition === 'bottom' ? 'bottom: 0;' : 'top: 0;'}`)}
    }

    a {
      ${cssThemedLink}
    }
  `,
  atk: css`
    &::after {
      background-color: ${color.mint};
    }
  `,
  cco: css`
    &::after {
      background-color: ${color.denim};
    }
  `,
  cio: css`
    &::after {
      background-color: ${color.squirrel};
    }
  `,
};

const ArticleFigcaptionWrapper = styled.figcaption<{ decorationPosition: DecorationPosition }>`
  ${withThemes(ArticleFigcaptionTheme)}
`;

export type ArticleFigcaptionProps = {
  caption: string;
  decorationPosition: DecorationPosition;
  className?: string;
};

const ArticleFigcaption = ({ caption, decorationPosition, className }: ArticleFigcaptionProps) => (
  <ArticleFigcaptionWrapper
    className={className ? className : 'article-figcaption'}
    dangerouslySetInnerHTML={{ __html: caption }}
    decorationPosition={decorationPosition}
  />
);

export default ArticleFigcaption;
