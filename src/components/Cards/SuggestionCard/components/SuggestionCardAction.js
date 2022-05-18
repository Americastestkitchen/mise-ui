import styled from 'styled-components';

import { color, spacing } from '../../../../styles';

const SuggestionCardAction = styled.button.attrs({
  className: 'suggestion-card__button',
})`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: white;
  padding: 10px;
  box-shadow:  0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: ${spacing.xsm};


  svg {

    &.favorite-ribbon {
      height: 13px;
      width: 9.3px;
    }
    &.close {
      height: 1.2rem;
      width: 1.2rem;
    }
  }

  &.skip {

    svg g {
      stroke: ${color.eclipse};
      stroke-width: 2.5;
    }

    @media(hover: hover) {
      &:hover {
        background-color: ${color.eclipse};
        border: 1px solid ${color.eclipse};
        color: ${color.white};

        svg g {
          stroke: ${color.white};
        }
      }
    }
  }

  &.favorite-action {

    svg path.outer-stroke {
      stroke: ${color.eclipse};
      stroke-width: 4;
    }

    @media(hover: hover) {
      &:hover {
        background-color: ${color.darkerMint};

        svg path.outer-stroke {
          stroke: ${color.white};
        }
      }
    }

    &:not(.favorited) {
      svg {
        .favorite-ribbon__ribbon {
          display: none;
        }
      }
    }

    &.favorited {
      [class*="vertical-line"],
      [class*="horizontal-line"] {
        stroke: white;
      }
    }
  }
`;

export default SuggestionCardAction;
