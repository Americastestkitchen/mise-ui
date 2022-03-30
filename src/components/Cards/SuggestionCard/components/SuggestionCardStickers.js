import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled from 'styled-components';
import { StyledSticker } from '../../StandardCard';
import { font, fontSize, color } from '../../../../styles';

const SitckersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span.sticker {
    margin-bottom: 0;
    display: block !important;
  }

  span.suggestioncardstickers-intro {
    font-family: ${font.pnr};
    font-size: ${fontSize.md};
    color: ${color.eclipse};
  }

  ${breakpoint('md')`
    justify-content: flex-start;
  `}
`;

const SuggestionCardStickers = ({ stickers }) => (
  <SitckersContainer>
    <span className="suggestioncardstickers-intro">You might like:</span>
    {
      stickers.map(({ text, type }) => (
        <StyledSticker
          className="sticker"
          key={text}
          type={type}
          text={text}
        />
      ))
    }
  </SitckersContainer>
);

SuggestionCardStickers.propTypes = {
  stickers: PropTypes.array.isRequired,
};

export default SuggestionCardStickers;
