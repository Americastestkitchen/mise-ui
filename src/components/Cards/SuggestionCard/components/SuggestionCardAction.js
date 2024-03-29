import styled from 'styled-components';

import { color, mixins } from '../../../../styles';

const SuggestionCardAction = styled.button.attrs({
  className: 'suggestion-card__button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  box-shadow:  0 3px 6px 0 rgba(0, 0, 0, 0.16);

  &:focus {
    ${mixins.focusIndicator('#3d3d3d', '2px')}
  }

  ${mixins.onlySafari(`
    height: 41px;
  `)};

  ${mixins.onlyFirefox(`
    height: 41px;
    width: 41px;
  `)};

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

  &.primary-hover {
    @media(hover: hover) {
      &:hover {
        background-color: ${color.darkerMint};
        border: 1px solid ${color.darkerMint};
        color: ${color.white};

        svg g {
          stroke: ${color.white};
        }

        line, path {
          stroke: ${color.white};
        }
      }
    }
  }
`;

export default SuggestionCardAction;
