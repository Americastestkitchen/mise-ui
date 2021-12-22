import PropTypes from 'prop-types';
import React from 'react';
import breakpoint from 'styled-components-breakpoint';
import styled, { css } from 'styled-components';
import { connectStats } from 'react-instantsearch-dom';

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

    ${breakpoint('md')`
      float: left;
    `}
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
  kidsSearch: css`
    color: ${color.black};
    font: 2.2rem/${lineHeight.sm} ${font.cwf};
    letter-spacing: 1.2px;
    margin-right: 1rem;
    text-transform: lowercase;

    ${breakpoint('lg')`
      font-size: 2rem;
    `}
  `,
};
const StatsWrapper = styled.p`
  ${withThemes(StatsWrapperTheme)}
`;

export const Stats = ({ nbHits }) => (
  <StatsWrapper className="search-results-count" role="status">
    {`${nbHits.toLocaleString()} Result${nbHits !== 1 ? 's' : ''}`}
  </StatsWrapper>
);

Stats.propTypes = {
  nbHits: PropTypes.number.isRequired,
};

const CustomStats = connectStats(Stats);

export default () => <CustomStats />;
