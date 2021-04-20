import { cards, color } from './index';

export default {
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
};
