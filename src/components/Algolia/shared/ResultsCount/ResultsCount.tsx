import React from 'react';
import styled, { css } from 'styled-components';
import { connectStats } from 'react-instantsearch-dom';
import { md, lg } from '../../../../styles/breakpoints';
import { cssThemedColor } from '../../../../styles/mixins';
import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

const StatsWrapperTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};

    ${md(css`
      float: left;
    `)}
  `,
  kidsSearch: css`
    color: ${color.black};
    font: 2.2rem/${lineHeight.sm} ${font.cwf};
    letter-spacing: 1.2px;
    margin-right: 1rem;
    text-transform: lowercase;

    ${lg(css`
      font-size: 2rem;
    `)}
  `,
};

const StatsWrapper = styled.p`
  ${cssThemedColor}
  ${withThemes(StatsWrapperTheme)}
`;

export type StatsProps = { nbHits: number; }

export const Stats = ({ nbHits }: StatsProps) => (
  <StatsWrapper className="search-results-count" role="status">
    {`${nbHits.toLocaleString()} Result${nbHits !== 1 ? 's' : ''}`}
  </StatsWrapper>
);

const CustomStats = connectStats(Stats);

export default CustomStats;
