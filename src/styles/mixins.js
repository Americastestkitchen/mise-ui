import { css } from 'styled-components';
import { cards, color, font, fontSize } from './index';

export const themeValue = (prop, val) => props => (props.theme[prop] && props.theme[prop][val])
  || val;

export const withThemes = siteTheme => (
  css`${() => siteTheme.default || ''};${props => siteTheme[props.theme.siteKey]};${props => siteTheme[props.theme.mode]}`
);

function focusIndicator(outlineColor = color.eclipse, outlineOffset = '3px') {
  return css`
    outline: 2px dotted ${outlineColor};
    outline-offset: ${outlineOffset};
  `;
}

export default {
  themeValue,
  withThemes,
  focusIndicator,
  /**
   * Handles max-width style for Articles components.
   * @param  {String} widthType ['default', 'wide']
   * @return {String}           CSS Text
   */
  articlesWidth(widthType) {
    return widthType === 'default' ? 'max-width: 63.2rem;' : 'max-width: 84.8rem;';
  },

  articlesBoxLists(siteKey = '') {
    let numberColor = color.eclipse;
    let bulletColor = color.eclipse;

    if (siteKey === 'cco') {
      numberColor = color.black;
      bulletColor = color.black;
    } else if (siteKey === 'cio') {
      numberColor = color.cork;
      bulletColor = color.cork;
    }

    return `
      ol {
        padding: 0;
        position: relative;

        li {
          counter-increment: li;
          padding-left: 16px;

          &::before {
            position: absolute;
            left: 0;
            content: counter(li)".";
            color: ${numberColor};
            font: ${fontSize.sm}/1.5 ${font.pnb};
            display: inline-block;
            margin-top: 0.2rem;
            min-width: 1.8rem;
          }
        }
      }

      ul {
        li {
          align-items: flex-start;
          margin-bottom: 1rem;
          padding-left: 1.2rem;
          position: relative;

          &:last-child {
            margin-bottom: 0;
          }

          &::before {
            border-radius: 4px;
            content: ' ';
            background-color: ${bulletColor};
            left: 0;
            margin: 1rem 0.8rem 0 0;
            min-height: 4px;
            min-width: 4px;
            position: absolute;
          }
        }
      }
    `;
  },

  /**
   * TwoUp & ThreeUpImage Handle Sizing for Articles Photo Collection Component
   * @param {String} widthType  ['default, wide]
   * @returns {String}          CSS Text
   */

  articlesTwoUpImageCollection(widthType) {
    return (widthType === 'default')
      ? 'max-height: 30.8rem; max-width: 30.8rem;'
      : 'max-height: 41.3rem; max-width: 41.3rem;';
  },

  articlesThreeUpImageCollection(widthType) {
    return (widthType === 'default')
      ? 'max-height: 30.8rem; max-width: 20rem;'
      : 'max-height: 41.3rem; max-width: 26.8rem;';
  },

  styledLink(underlineColor, backgroundColor, textColor = 'inherit') {
    return `
      background-image: linear-gradient(transparent 91%, ${underlineColor} 91%);
      border: none;
      color: ${textColor};
      cursor: pointer;
      text-decoration: none;
      transition: background .2s ease-in-out;

      &:focus,
      &:active {
        color: ${textColor};
      }

      @media(hover: hover) {
        &:hover {
          background-color: ${backgroundColor};
        }
      }

      @media print {
        background-image: none !important;
        background-color: transparent !important;
        color-adjust: exact !important;
      }
    `;
  },

  styledLinkWithSiteKey(siteKey) {
    if (siteKey === 'atk') {
      return this.styledLink(color.turquoise, color.seaSalt);
    }
    if (siteKey === 'cco') {
      return this.styledLink(color.malibu, color.cornflower);
    }
    if (siteKey === 'cio') {
      return this.styledLink(color.dijon, color.sand);
    }
    return '';
  },

  ccoReviewSetBorder() {
    return 'border: solid 4px #F7F7F7;';
  },

  /**
   * Truncates text with ellipsis
   * @param  {Number} width optional - set the width of the element
   * @return {String}       CSS Text
   */
  truncate(width) {
    return `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      ${width ? `width: ${width}` : ''}
    `;
  },

  /**
   * Truncate text with ellipses (line clamp)
   * @param {Number} lines required - truncate after set number of lines
   * @returns {String} CSS Text
   */
  truncateLineClamp(lines) {
    return `
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: ${lines};
      -webkit-box-orient: vertical;
    `;
  },

  loadingGradientAnimation(
    width = cards.standard.width.lg,
    cardBackgroundColor = color.charcoal,
    gradientColor = color.black,
  ) {
    return `
      .animated-background {
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: loading;
        animation-timing-function: linear;
        background-color: ${cardBackgroundColor};
        background-image:
          linear-gradient(
            90deg,
            ${cardBackgroundColor} 0%,
            ${gradientColor} 50%,
            ${cardBackgroundColor} 100%
          );
        background-position: -${width} 0;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 100%;
        position: relative;
        -webkit-backface-visibility: hidden;
      }

      @keyframes loading {
        to {
          background-position: calc(${width} * 3) 0;
        }
      }
    `;
  },

  visuallyHidden() {
    return `
      border: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    `;
  },
};

export const cssThemedFont = withThemes({
  default: css`font-family: ${font.pnb};`,
  atk: css`font-family: ${font.pnb};`,
  cco: css`font-family: ${font.clb};`,
  cio: css`font-family: ${font.mwr};`,
});

/** Headers */
export const cssThemedFontBold = withThemes({
  default: css`font-family: ${font.pnb};`,
  atk: css`font-family: ${font.pnb};`,
  cco: css`font-family: ${font.clb};`,
  cio: css`
    font-family: ${font.mwr};
    font-weight: 700;
  `,
});

export const cssThemedColor = withThemes({
  default: css`color: ${color.eclipse};`,
  atk: css`color: ${color.eclipse};`,
  cco: css`color: ${color.black};`,
  cio: css`color: ${color.cork};`,
});

export const cssThemedBackground = withThemes({
  default: css`background: ${color.eclipse};`,
  atk: css`background: ${color.eclipse};`,
  cco: css`background: ${color.black};`,
  cio: css`background: ${color.cork};`,
});

export const cssThemedFontAccentColor = withThemes({
  default: css`color: ${color.tomato};`,
  atk: css`color: ${color.tomato};`,
  cco: css`color: ${color.denim};`,
  cio: css`color: ${color.squirrel};`,
});

export const cssThemedFontAccentColorAlt = withThemes({
  default: css`color: ${color.darkTeal};`,
  atk: css`color: ${color.darkTeal};`,
  cco: css`color: ${color.denim};`,
  cio: css`color: ${color.squirrel};`,
});

export const cssThemedBackgroundAccentColorAlt = withThemes({
  default: css`background: ${color.darkTeal};`,
  atk: css`background: ${color.darkTeal};`,
  cco: css`background: ${color.denim};`,
  cio: css`background: ${color.squirrel};`,
});

export const cssReduceColor = css`
  background-image: none !important;
  background-color: transparent !important;
  color-adjust: exact !important;
`;

export const cssThemedHighlight = withThemes({
  default: css`background-color: ${color.seaSalt};`,
  atk: css`background-color: ${color.seaSalt};`,
  cco: css`background-color: ${color.cornflower};`,
  cio: css`background-color: ${color.sand};`,
});

export const cssThemedUnderline = withThemes({
  default: css`background-image: linear-gradient(transparent 91%, ${color.turquoise} 91%);`,
  atk: css`background-image: linear-gradient(transparent 91%, ${color.turquoise} 91%);`,
  cco: css`background-image: linear-gradient(transparent 91%, ${color.malibu} 91%);`,
  cio: css`background-image: linear-gradient(transparent 91%, ${color.dijon} 91%);`,
});

/**
 * Updated version of styledLinkWithSiteKey.
 */
export const cssThemedLink = css`
  ${cssThemedUnderline}
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:focus, &:active {
    ${focusIndicator()}
  }

  @media(hover: hover) {
    &:hover {
      ${cssThemedHighlight}
    }
  }

  @media print {
    ${cssReduceColor}
  }
`;

/** Updated version of articlesBoxLists */
export const cssArticleBoxStyles = css`
  ol {
    padding: 0;
    li {
      display: flex;
      counter-increment: li;

      &::before {
        content: counter(li)".";
        ${cssThemedColor}
        font: ${fontSize.sm}/1.5 ${font.pnb};
        display: inline-block;
        margin-top: 0.2rem;
        min-width: 1.8rem;
      }
    }
  }

  ul {
    li {
      align-items: flex-start;
      margin-bottom: 1rem;
      padding-left: 1.2rem;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        border-radius: 4px;
        content: ' ';
        ${cssThemedBackground}
        left: 0;
        margin: 1rem 0.8rem 0 0;
        min-height: 4px;
        min-width: 4px;
        position: absolute;
      }
    }
  }
`;
