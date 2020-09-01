import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { color, withThemes } from '../../../styles';

const LinearGradientTheme = {
  default: css`
    background-blend-mode: multiply;
    background-image: ${({ angle, startColor, endColor, stop }) => `linear-gradient(${angle}deg, ${color[startColor]}, ${color[endColor]} ${stop})`};

    .jet-gradient & {
      background-image: ${({ angle, stop }) => `linear-gradient(${angle}deg, ${color.transparentBlack}, ${color.jet} ${stop})`};
    }

    .asphalt-gradient & {
      background-image: ${({ angle, stop }) => `linear-gradient(${angle}deg, ${color.transparentBlack}, ${color.asphalt} ${stop})`};
    }
  `,
  dark: css`
    background-image: ${({ angle, stop }) => `linear-gradient(${angle}deg, transparent, ${color.gunmetal} ${stop})`};
  `,
};

/**
 * Simple linear gradient component. There are many variations to the
 * css syntax for gradients. This component provides a simple direction
 * gradient with a start and end color.
 */
const LinearGradientEl = styled.div.attrs({
  className: 'linear-gradient',
})`
  ${withThemes(LinearGradientTheme)}
`;

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
  /** Color used for the start of the gradient */
  startColor: PropTypes.string,
  /** Where the gradient stops */
  stop: PropTypes.string,
};

LinearGradient.defaultProps = {
  angle: 0,
  endColor: 'gunmetal',
  startColor: 'transparentWhite',
  stop: '70%',
};

/** @component */
export default LinearGradient;
