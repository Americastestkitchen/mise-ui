import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import AccordionControl from '../AccordionControl';
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
  atk: css`
    display: block;
    letter-spacing: inherit;
    padding: 0;
    position: relative;
    text-align: inherit;
    text-transform: none;

    ${breakpoint('xlg')`
      width: 100%;
    `}
  `,
  light: css`
  `,
};

const AccordionButton = styled.button.attrs({
  className: 'accordion-item__button',
})`
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

const AccordionLabelWrapper = styled.div.attrs({
  className: 'accordion-item__label',
})`
  ${withThemes(AccordionLabelWrapperTheme)}
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

const Legend = ({ children }) => (
  <legend>{children}</legend>
);

Legend.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function Accordion({
  children,
  icon,
  iconSize,
  id,
  isFieldset,
  isHidden,
  label: Label,
}) {
  const [hidden, toggleHidden] = useState(isHidden);
  const AccordionWrapper = isFieldset ? AccordionFieldsetWrapper : AccordionDivWrapper;
  const Icon = icon ? icons[icon] : null;
  let idVal = id;
  if (!idVal && typeof Label === 'string') {
    idVal = Label?.split(' ')?.join('');
  }

  const isLabelString = typeof Label === 'string';
  let labelEl;
  if (isFieldset) {
    labelEl = isLabelString ? <Legend>{Label}</Legend> : <Label />;
  } else {
    labelEl = isLabelString ? Label : <Label />;
  }

  useEffect(() => {
    if (typeof dry !== 'undefined') {
      // eslint-disable-next-line no-undef
      dry.events.subscribe('accordion:toggle', val => toggleHidden(val));
    }
  }, []);

  return (
    <AccordionWrapper>
      <AccordionButton
        aria-controls={`show-hide--${idVal}`}
        aria-expanded={!hidden}
        className="show-hide__expand-collapse-button"
        onClick={() => toggleHidden(curr => !curr)}
      >
        {
          isFieldset ? (
            <AccordionLabelWrapper hasIcon={icon}>
              {labelEl}
              {Icon ? <Icon className={`show-hide__icon--${icon}`} /> : null}
            </AccordionLabelWrapper>
          ) : labelEl
        }
        <AccordionControl
          iconSize={iconSize}
          isExpanded={!hidden}
        />
      </AccordionButton>
      <AccordionContent
        data-testid="accordion-content"
        id={`show-hide--${idVal}`}
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
  /** HTML attribute */
  id: PropTypes.string,
  /** For accessability we need a fieldset version of this component. */
  isFieldset: PropTypes.bool,
  /** Sets initial state of the hidden content. */
  isHidden: PropTypes.bool,
  /** Clickable text that appears in button next to plus/minus icon. */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Accordion.defaultProps = {
  icon: null,
  iconSize: 'default',
  id: null,
  isFieldset: false,
  isHidden: false,
};

export default Accordion;
