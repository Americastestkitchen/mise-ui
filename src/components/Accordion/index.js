import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { ChefHat, Content, Cookbook, Knife, Plus, Sort, Time } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize, letterSpacing, spacing, withThemes } from '../../styles';

const AccordionDivWrapper = styled.div``;
const AccordionFieldsetWrapper = styled.fieldset``;

const AccordionButtonTheme = {
  default: css`
    align-items: center;
    border: none;
    display: flex;
    font: ${fontSize.md}/1 ${font.pnb};
    justify-content: space-between;
    letter-spacing: ${letterSpacing.md};
    padding: 0.2rem ${spacing.xxsm} 0.2rem 0;
    text-transform: uppercase;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        cursor: pointer;

        svg {
          fill: ${color.mint};
        }
      }
    }

    ${breakpoint('xlg')`
      width: 85%;
    `}
  `,
  kidsSearch: css`
    font: 2.5rem/1 ${font.cwf};
    letter-spacing: 2.5px;
    text-transform: lowercase;

    @media(hover: hover) {
      &:hover {
        cursor: pointer;

        svg,
        svg path {
          fill: ${color.jade};
        }
      }
    }

    ${breakpoint('xlg')`
      width: 100%;
    `}
  `,
  play: css`
    background-color: ${color.white};
    border-radius: 2rem;
    font-size: ${fontSize.lg};
    height: 4rem;
    letter-spacing: normal;
    max-width: 73.7rem;
    padding: 0 1.6rem;
    text-transform: capitalize;
    width: 100%;

    svg {
      rect {
        fill: ${color.mint};
        stroke: ${color.mint};
      }
    }

    ${breakpoint('xlg')`
      width: 100%;
    `}
  `,
  light: css`
  `,
};

const AccordionButton = styled.button`
  ${withThemes(AccordionButtonTheme)}
`;

const AccordionLabelWrapperTheme = {
  default: css`
    align-items: flex-end;
    display: flex;

    ${({ hasIcon }) => (
    hasIcon ? `
      legend {
        display: inline-block;
        margin-right: ${spacing.xsm};
        max-width: 11.25rem;
        text-align: left;
      }
    ` : ''
  )}

    svg {
      flex-shrink: 0;
      height: 1.4rem;
      margin-bottom: 0.2rem;
      width: 1.6rem;
    }
  `,
  kidsSearch: css`
    flex-direction: row-reverse;

    legend {
      max-width: none;
    }

    svg {
      height: 1.6rem;
      margin-right: 0.5rem;
      width: 1.8rem;

      &:not(.sort-icon) {
        height: 2rem;
        width: auto;
      }
    }
  `,
};

const AccordionLabelWrapper = styled.div`
  ${withThemes(AccordionLabelWrapperTheme)}
`;

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
    height: 3rem;
    max-height: 3rem;
    max-width: 3rem;
    width: 3rem;
  `,
};

const AccordionSvgWrapper = styled.div`
  ${withThemes(AccordionSvgWrapperTheme)}
`;

const AccordionContent = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

const icons = {
  chefHat: ChefHat,
  content: Content,
  cookbook: Cookbook,
  knife: Knife,
  sort: Sort,
  time: Time,
};

function Accordion({
  children,
  icon,
  iconSize,
  isFieldset,
  isHidden,
  label,
}) {
  const [hidden, toggleHidden] = useState(isHidden);
  const AccordionWrapper = isFieldset ? AccordionFieldsetWrapper : AccordionDivWrapper;
  const Icon = icon ? icons[icon] : null;

  return (
    <AccordionWrapper>
      <AccordionButton
        aria-controls={`show-hide--${label.split(' ').join('')}`}
        aria-expanded={!hidden}
        className="show-hide__expand-collapse-button"
        onClick={() => toggleHidden(!hidden)}
      >
        {
          isFieldset ? (
            <AccordionLabelWrapper hasIcon={icon}>
              <legend>{label}</legend>
              {Icon ? <Icon className={`show-hide__icon--${icon}`} /> : null}
            </AccordionLabelWrapper>
          ) : <span className="accordion__label">{label}</span>
        }
        <AccordionSvgWrapper isExpanded={!hidden}>
          <Plus size={iconSize} />
        </AccordionSvgWrapper>
      </AccordionButton>
      <AccordionContent
        data-testid="accordion-content"
        id={`show-hide--${label.split(' ').join('')}`}
        hidden={hidden ? true : null}
      >
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
}

Accordion.propTypes = {
  /** Content that will be hidden by expand collapse behavior. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** Unique id string for svg icon to render next to label */
  icon: PropTypes.string,
  /* Size of icon */
  iconSize: PropTypes.oneOf(['default', 'large', 'extraLarge']),
  /** For accessability we need a fieldset version of this component. */
  isFieldset: PropTypes.bool,
  /** Sets initial state of the hidden content. */
  isHidden: PropTypes.bool,
  /** Clickable text that appears in button next to plus/minus icon. */
  label: PropTypes.string.isRequired,
};

Accordion.defaultProps = {
  icon: null,
  iconSize: 'default',
  isFieldset: false,
  isHidden: false,
};

export default Accordion;
