import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, font, spacing, withThemes } from '../../styles';

const ShowMoreLessInitial = styled.div``;
const ShowMoreLessRest = styled.div``;

export const ShowMoreLessButtonTheme = {
  default: css`
    color: ${color.nobel};
    font: 1.2rem/1 ${font.pnb};
    letter-spacing: 1.2px;
    padding: ${spacing.xsm} 0;
    text-transform: uppercase;

    &:hover {
      color: ${color.mint};
    }
  `,
  kidsSearch: css`
    &:hover {
      color: ${color.jade};
    }
  `,
};

const ShowMoreLessButton = styled.button`
  ${withThemes(ShowMoreLessButtonTheme)}
`;

const ShowMoreLess = ({ initialCount, items, id }) => {
  const [hidden, toggleHidden] = useState(true);
  let initialItems = null;
  let restItems = null;
  if (items.length > initialCount) {
    initialItems = items.slice(0, initialCount);
    restItems = items.slice(initialCount);
  }
  return (
    <div>
      {
        initialItems && restItems ? (
          <>
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
            <ShowMoreLessButton
              aria-controls={`show-hide--${id}`}
              aria-expanded={!hidden}
              className="show-more-less__button"
              onClick={() => { toggleHidden(!hidden); }}
            >
              {hidden ? '+ Show More' : '- Show Less'}
            </ShowMoreLessButton>
          </>
        ) : (
          <>
            {items.map(item => item)}
          </>
        )
      }
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
