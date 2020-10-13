import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { color, withThemes } from '../../../styles';

const LinearGradientTheme = {
  default: css`
    background-blend-mode: multiply;
    background-image: ${({ angle, startColor, endColor, stop }) => `linear-gradient(${angle}deg, ${color[startColor]} 0, ${color[endColor]} ${stop})`};

    .jet-gradient & {
      ${({ angle, stop }) => `background-image: linear-gradient(${angle}deg, rgba(8, 8, 8, 0) 0, rgba(8, 8, 8, 1) ${stop});`}
    }

    .gunmetal-gradient & {
      ${({ angle, stop }) => `background-image: linear-gradient(${angle}deg, rgba(38, 38, 38, 0) 0, rgba(38, 38, 38, 1) ${stop});`}
    }

    .asphalt-gradient & {
      ${({ angle, stop }) => `background-image: linear-gradient(${angle}deg, rgba(25, 25, 25, 0) 0, rgba(25, 25, 25, 1) ${stop});`}
    }

    .whitesmoke-gradient & {
      ${({ angle, stop }) => `background-image: linear-gradient(${angle}deg, rgba(245, 245, 245, 0) 0, rgba(245, 245, 245, 1) ${stop});`}
    }
  `,
  dark: css`
    background-image: ${({ angle, stop }) => `linear-gradient(${angle}deg, rgba(38, 38, 38, 0) 0, rgba(38, 38, 38, 1) ${stop})`};
  `,
};

/**
 * Simple linear gradient component. There are many variations to the
 * css syntax for gradients. This component provides a simple direction
 * gradient with a start and end color.
 */
const LinearGradientEl = styled.div.attrs(({ position }) => ({
  className: `linear-gradient${position ? ` ${position}` : ''}`,
}))`${withThemes(LinearGradientTheme)}`;

const LinearGradient = props => (
  <LinearGradientEl
    {...props}
  />
);

LinearGradient.propTypes = {
  /**  Angle of the gradient - ex: 180 */
  angle: PropTypes.string,
  /** Color used for the end of the gradient */
  endColor: PropTypes.string,
  /** left or right */
  position: PropTypes.string,
  /** Color used for the start of the gradient */
  startColor: PropTypes.string,
  /** Where the gradient stops */
  stop: PropTypes.string,
};

LinearGradient.defaultProps = {
  angle: 0,
  endColor: 'gunmetal',
  position: null,
  startColor: 'transparentGunmetal',
  stop: '70%',
};

/** @component */
export default LinearGradient;
