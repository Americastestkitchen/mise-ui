import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { cssThemedColor, cssThemedHoverColor } from '../../styles/mixins';
import { color, font, spacing, withThemes } from '../../styles';

const ShowMoreLessInitial = styled.ul``;
const ShowMoreLessRest = styled.ul``;

export const ShowMoreLessButtonTheme = {
  default: css`
    font: 1.2rem/1 ${font.pnb};
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

export type ShowMoreLessProps = {
  id: string;
  initialCount: number;
  items: JSX.Element[];
};

const ShowMoreLess = ({
  id,
  initialCount,
  items,
}: ShowMoreLessProps) => {
  const [hidden, setHidden] = useState(true);
  const initialItems = items.slice(0, initialCount);
  const restItems = items.slice(initialCount);

  return (
    <div>
      <ShowMoreLessInitial>
        {initialItems.map(item => item)}
      </ShowMoreLessInitial>
      <ShowMoreLessRest
        data-testid="show-more-rest-items"
        hidden={hidden}
        id={`show-hide--${id}`}
      >
        {restItems.map(item => item)}
      </ShowMoreLessRest>
      {!!restItems.length && (
        <ShowMoreLessButton
          aria-controls={`show-hide--${id}`}
          aria-expanded={!hidden}
          aria-label={hidden ? 'Show more' : 'Show less'}
          className="show-more-less__button"
          onClick={() => { setHidden(!hidden); }}
        >
          {hidden ? '+ Show More' : '- Show Less'}
        </ShowMoreLessButton>
      )}
    </div>
  );
};

export default ShowMoreLess;
