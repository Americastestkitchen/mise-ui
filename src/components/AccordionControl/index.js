import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, withThemes } from '../../styles';
import { Plus } from '../DesignTokens/Icon/svgs';

const AccordionSvgWrapperTheme = {
  default: css`
    height: 2rem;
    max-height: 2rem;
    max-width: 2rem;
    width: 2rem;

    svg {
      height: 100%;
      transition: all 0.2s ease;
      width: 100%;

      ${({ isExpanded }) => (isExpanded ? `
        transform: rotate(90deg);

        rect {
          &:first-child {
            opacity: 0;
          }
        }
      ` : '')}
    }
  `,
  play: css`
    border: 1px solid ${color.black};
    height: 3rem;
    max-height: 3rem;
    max-width: 3rem;
    width: 3rem;
  `,
  atk: css`
    background-color: ${color.white};
    border: 2px solid ${color.black};
    border-radius: 50%;
    height: 3rem;
    max-height: 3rem;
    max-width: 3rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    width: 3rem;
  `,
};

const AccordionSvgWrapperEl = styled.div.attrs({
  className: 'accordion-item__icon',
})`
  ${withThemes(AccordionSvgWrapperTheme)}
`;

const AccordionControl = ({ iconSize, isExpanded }) => (
  <AccordionSvgWrapperEl
    isExpanded={isExpanded}
  >
    <Plus size={iconSize} />
  </AccordionSvgWrapperEl>
);

AccordionControl.propTypes = {
  iconSize: PropTypes.oneOf(['default', 'large']),
  isExpanded: PropTypes.bool.isRequired,
};

AccordionControl.defaultProps = {
  iconSize: 'default',
};

export default AccordionControl;
