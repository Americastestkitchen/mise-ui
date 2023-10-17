import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { cssThemedColor, cssThemedHoverColor } from '../../styles/mixins';
import { color, font, spacing, withThemes } from '../../styles';

const ShowMoreLessInitial = styled.ul``;
const ShowMoreLessRest = styled.ul``;

export const ShowMoreLessButtonTheme = {
  default: css`
    font: 700 (1.2rem/1 )${font.pnb};
    letter-spacing: 1.2px;
    padding: ${spacing.xsm} 0;
    text-transform: uppercase;
  `,
  kidsSearch: css`
    color: ${color.nobel};

    &:hover {
      color: ${color.jade};
    }
  `,
};

const ShowMoreLessButton = styled.button`
  ${cssThemedColor}

  @media(hover: hover) {
    &:hover {
      ${cssThemedHoverColor}
    }
  }

  ${withThemes(ShowMoreLessButtonTheme)}
`;

const ShowMoreLess = ({ initialCount, items, id }) => {
  const [hidden, toggleHidden] = useState(true);
  const initialItems = items.slice(0, initialCount);
  const restItems = items.slice(initialCount);

  return (
    <div>
      <ShowMoreLessInitial>
        {initialItems.map(item => item)}
      </ShowMoreLessInitial>
      <ShowMoreLessRest
        data-testid="show-more-rest-items"
        hidden={hidden || null}
        id={`show-hide--${id}`}
      >
        {restItems.map(item => item)}
      </ShowMoreLessRest>
      {!!restItems.length && (
        <ShowMoreLessButton
          aria-controls={`show-hide--${id}`}
          aria-expanded={!hidden}
          className="show-more-less__button"
          onClick={() => { toggleHidden(!hidden); }}
          aria-label={hidden ? 'Show More' : 'Show Less'}
        >
          {hidden ? '+ Show More' : '- Show Less'}
        </ShowMoreLessButton>
      )}
    </div>
  );
};

ShowMoreLess.propTypes = {
  /** Unique id for this ShowMoreLess. */
  id: PropTypes.string.isRequired,
  /** Initial number of 'items' that render before clicking 'Show More'. */
  initialCount: PropTypes.number.isRequired,
  /** The list of 'items' to render. */
  items: PropTypes.array.isRequired,
};

export default ShowMoreLess;
