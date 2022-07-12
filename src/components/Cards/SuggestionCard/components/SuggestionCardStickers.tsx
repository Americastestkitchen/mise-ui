import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled from 'styled-components';
import Sticker from '../../shared/Sticker';
import { StickerItem } from '..';
import { font, fontSize, color, mixins } from '../../../../styles';

const SitckersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  span.sticker {
    margin-bottom: 0;
    display: block !important;
    margin-left: 0;
    ${mixins.truncate(24)}
  }

  span.suggestioncardstickers-intro {
    font-family: ${font.pnr};
    font-size: ${fontSize.md};
    color: ${color.eclipse};
    margin: 3px 10px 0 0;
  }

  ${breakpoint('md')`
    justify-content: flex-start;
    align-items: center;
  `}
`;

const SuggestionCardStickers = ({ stickers }: {stickers: StickerItem[]}) => (
  <SitckersContainer>
    <span className="suggestioncardstickers-intro">You might like:</span>
    {
      stickers.map(({ text, type }) => (
        <Sticker
          className="sticker"
          key={text}
          type={type}
          text={text}
        />
      ))
    }
  </SitckersContainer>
);

export default SuggestionCardStickers;
