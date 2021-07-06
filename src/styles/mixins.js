import { cards, color } from './index';

export default {
  /**
   * Handles max-width style for Articles components.
   * @param  {String} widthType ['default', 'wide']
   * @return {String}           CSS Text
   */
  articlesWidth(widthType) {
    return widthType === 'default' ? 'max-width: 63.2rem;' : 'max-width: 84.8rem;';
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

  focusIndicator(outlineColor = color.eclipse) {
    return `
      outline: 2px dotted ${outlineColor};
      outline-offset: 3px;
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
