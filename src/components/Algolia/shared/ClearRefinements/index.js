import React from 'react';
import PropTypes from 'prop-types';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import styled, { css } from 'styled-components';

import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../../../styles';

const StyledClearRefinementsTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
    margin-bottom: ${spacing.xsm};

    &[disabled] {
      display: none;
    }
  `,
  atk: css`
    color: ${color.eclipse};

    &:hover {
      color: ${color.darkTeal};
      cursor: pointer;
    }
  `,
  cco: css`
    color: ${color.black};

    &:hover {
      color: ${color.denim};
      cursor: pointer;
    }
  `,
  cio: css`
    color: ${color.cork};

    &:hover {
      color: ${color.squirrel};
      cursor: pointer;
    }
  `,
  kidsSearch: css`
    background-color: ${color.greySmoke};
    border-radius: 1rem;
    color: ${color.black};
    float: left;
    padding: 0.3rem 1rem 0.4rem;

    &:hover {
      color: ${color.jade};
    }
  `,
};

const StyledClearRefinements = styled.button`
  ${withThemes(StyledClearRefinementsTheme)}
`;

export const CustomClearRefinements = ({ handleClick, items, refine }) => (
  <StyledClearRefinements
    className="clear-refinements-button"
    disabled={!items.length}
    onClick={() => {
      refine(items);
      if (handleClick) handleClick();
    }}
    type="button"
  >
    Clear filters
  </StyledClearRefinements>
);

CustomClearRefinements.propTypes = {
  handleClick: PropTypes.func,
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

CustomClearRefinements.defaultProps = {
  handleClick: null,
};

export default connectCurrentRefinements(CustomClearRefinements);
