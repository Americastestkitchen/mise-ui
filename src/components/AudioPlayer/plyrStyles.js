import breakpoint from 'styled-components-breakpoint';
import { css } from 'styled-components';
import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
} from '../../styles';

const plyrStyles = css`
  .plyr {
    font: 700 (${fontSize.lg}/${lineHeight.lg} )${font.pnb};
  }

  .plyr--audio {
    .plyr__controls {
      background-color: transparent;
      color: ${color.white};
      padding: 0%;
    }
  }

  .plyr__controls__item.plyr__progress__container {
    width: 100%;
  }

  .plyr__progress {
    input {
      background: ${color.silver};
      border-radius: 0;
      position: absolute;
      left: 0;
      height: 4px;
      outline: none;
      top: 0;
      width: 100%;
      -webkit-appearance: none;
      -webkit-transition: .2s;
      transition: opacity .2s;

      &::-webkit-slider-runnable-track{
        background-image: linear-gradient(to right, white var(--value, 0), transparent var(--value, 0));
        height: 4px;
      }

      &::-webkit-slider-thumb {
        display: none;
      }
    }
  }

  .plyr__progress__buffer,
  .plyr__tooltip,
  .plyr__controls__item.plyr__time--current.plyr__time,
  .plyr__controls__item.plyr__time--duration.plyr__time {
    display: none;
  }

  ${breakpoint('xlg')`
    .plyr__controls {
      align-items: center;
      background-color: transparent;
      color: ${color.white};
      display: flex;
    }

    .plyr__progress {
      display: flex;

      input {
        margin: auto ${spacing.xsm};
        position: initial;
        width: 31.2rem;

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background-color: ${color.white};
          border-radius: 20px;
          cursor: pointer;
          display: block;
          height: 8px;
          display:flex;
          margin-top: -2px;
          align-items: center;
          width: 11px;
        }

        &::-moz-range-thumb {
          -webkit-appearance: none;
          appearance: none;
          background-color: ${color.white};
          border-radius: 20px;
          cursor: pointer;
          display: block;
          height: 8px;
          width: 11px;
        }
      }
    }

    .plyr__controls__item.plyr__time--duration.plyr__time {
      display: block;

      &::before {
        display: none;
      }
    }

    .plyr__controls__item.plyr__time--current.plyr__time {
      display: block;
      order: -1;
    }
  `}
`;

export default plyrStyles;
