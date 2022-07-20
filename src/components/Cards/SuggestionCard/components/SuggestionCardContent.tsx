import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { font, fontSize, mixins, lineHeight, color } from '../../../../styles';

export const SuggestionCardContent = styled.div.attrs({
  className: 'suggestion-card__content',
})`
  flex: 1 0 0;
  font: ${fontSize.sm}/1.43 ${font.mwr};
  position: relative;

  ${breakpoint('md')`
    align-self: center;
  `}
`;

export const SuggestionCardContentInner = styled.div.attrs({
  className: 'suggestion-card__content-inner',
})`
  padding: 0 0 0 2.5rem;
  min-width: 26.6rem;
  width: 26.6rem;
  max-width: 30rem;
  text-align: center;
  margin: 2rem 0;

  ${breakpoint('md')`
    text-align: left;
    max-width: 30rem;
  `}

  .recipe-attributions {
    justify-content: center;

    ${breakpoint('md')`
      justify-content: flex-start;
    `}
  }
`;

export const SuggestionCardTitle = styled.a.attrs({
  className: 'suggestion-card__title',
})`
  color: ${color.eclipse};
  font-family: ${font.pnb};
  font-size: 2rem;
  line-height: ${lineHeight.md};
  margin: 1rem 0;
  ${mixins.truncateLineClamp(2)};

  &:focus {
    ${mixins.focusIndicator('#3d3d3d', '2px')}
  }

  ${breakpoint('md')`
    font-size: ${fontSize.xl};
  `}

  &:hover {
    color: ${color.grayishCyan};
  }
`;

export const SuggestionCardSubTitle = styled.span.attrs({
  className: 'suggestion-card__sub-title',
})`
  display: block;
  font-style: italic;
  margin-bottom: 1rem;
  ${mixins.truncateLineClamp(1)}
`;
