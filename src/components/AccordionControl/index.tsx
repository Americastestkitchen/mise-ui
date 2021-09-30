import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { color, withThemes } from '../../styles';
import { Plus } from '../DesignTokens/Icon/svgs';

const AccordionSvgWrapperTheme = {
  default: css<{ isExpanded: boolean }>`
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

    @media print {
      display: none;
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
    border: 2px solid ${color.eclipse};
    border-radius: 50%;
    height: 3rem;
    max-height: 3rem;
    max-width: 3rem;
    position: absolute;
    right: 2.5rem;
    top: 50%;
    transform: translate(50%, -50%);
    width: 3rem;

    @media(hover: hover) {
      &:hover {
        max-height: 3.6rem;
        max-width: 3.6rem;

        svg {
          fill: ${color.nobel};
        }
      }
    }

    ${breakpoint('md')`
      right: 0;
    `}
  `,
  cco: css`
    background-color: ${color.white};
    border: 2px solid ${color.black};
    border-radius: 50%;
    height: 3rem;
    max-height: 3rem;
    max-width: 3rem;
    position: absolute;
    right: 2.5rem;
    top: 50%;
    transform: translate(50%, -50%);
    width: 3rem;

    svg {
      fill: ${color.black};
    }

    @media(hover: hover) {
      &:hover {
        max-height: 3.6rem;
        max-width: 3.6rem;

        svg {
          fill: ${color.nobel};
        }
      }
    }

    ${breakpoint('md')`
      right: 0;
    `}
  `,
  cio: css`
    background-color: ${color.white};
    border: 2px solid ${color.cork};
    border-radius: 50%;
    height: 3rem;
    max-height: 3rem;
    max-width: 3rem;
    position: absolute;
    right: 2.5rem;
    top: 50%;
    transform: translate(50%, -50%);
    width: 3rem;
    
    svg {
      fill: ${color.cork};
    }

    @media(hover: hover) {
      &:hover {
        border-color: ${color.squirrel};
        max-height: 3.6rem;
        max-width: 3.6rem;

        svg {
          fill: ${color.squirrel};
        }
      }
    }

    ${breakpoint('md')`
      right: 0;
    `}
  `,
};

const AccordionSvgWrapperEl = styled.div.attrs({
  className: 'accordion-item__icon',
})<{ isExpanded: boolean }>`
  ${withThemes(AccordionSvgWrapperTheme)}
`;

const AccordionControlProps = {
  iconSize: PropTypes.oneOf(['default', 'large', 'extraLarge']),
  isExpanded: PropTypes.bool.isRequired,
};

const AccordionControl: React.FC<InferProps<typeof AccordionControlProps>> = ({
  iconSize,
  isExpanded,
}) => (
  <AccordionSvgWrapperEl
    isExpanded={isExpanded}
  >
    <Plus size={iconSize} />
  </AccordionSvgWrapperEl>
);

AccordionControl.propTypes = AccordionControlProps;

AccordionControl.defaultProps = {
  iconSize: 'default',
};

export default AccordionControl;
