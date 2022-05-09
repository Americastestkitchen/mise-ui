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
  flex-wrap: wrap;

  span.sticker {
    margin-bottom: 0;
    display: block !important;
    margin-left: 0;
  }

  span.suggestioncardstickers-intro {
    font-family: ${font.pnr};
    font-size: ${fontSize.md};
    color: ${color.eclipse};
    margin: 0.8rem 0.8rem 0.8rem 0;
  }

  ${breakpoint('md')`
    justify-content: flex-start;
    align-items: center;
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
