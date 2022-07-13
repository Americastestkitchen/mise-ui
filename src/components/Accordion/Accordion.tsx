import React, { useEffect, useState, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { xlg } from '../../styles/breakpoints';

import AccordionControl from '../AccordionControl/AccordionControl';
import { ChefHat, Content, Cookbook, Knife, Sort, Time } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize, letterSpacing, mixins, spacing, withThemes } from '../../styles';

export type IconSize = 'default' | 'large' | 'extraLarge';
export type LabelElement = () => JSX.Element;
export type Icon = 'chefHat' | 'content'| 'cookbook'| 'knife'| 'sort'| 'time';

export type DefaultAccordion = {
  children: ReactNode | ReactNode[];
  icon?: Icon;
  iconSize?: IconSize;
  id?: string;
  isFieldset?: boolean;
  isHidden?: boolean;
  label: string | LabelElement;
  onClick?(): void;
}

// AccordionWrapper 2
const AccordionWrapper = styled.div.attrs({
  className: 'accordion-content-wrapper',
})`
  &:focus-within {
    box-shadow: none !important;
  }

  .accordion-item__button {
    &:focus {
      box-shadow: none !important;
      ${mixins.focusIndicator()}
    }
  }

  .search-page & {
    &:focus-within {
      box-shadow: none;

      > button:focus {
        ${mixins.focusIndicator(color.eclipse)};
      }
    }
  }
`;

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
    &:focus {
      ${mixins.focusIndicator()}
    }

    @media(hover: hover) {
      &:hover {
        cursor: pointer;
      }
    }

    ${xlg(css`
      width: 85%;
    `)}
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

    ${xlg(css`
      width: 100%;
    `)}
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

    ${xlg(css`
      width: 100%;
    `)}
  `,
  atk: css`
    display: block;
    letter-spacing: inherit;
    padding: 0;
    position: relative;
    text-align: inherit;
    text-transform: none;

    [class*="Browse"] & {
      color: ${color.eclipse};
      letter-spacing: ${letterSpacing.md};
      text-transform: uppercase;
    }

    ${breakpoint('xlg')`
      width: 100%;
    `}

    @media(hover: hover) {
      &:hover {
        .accordion-item__icon {
          border-color: ${color.nobel};
          height:3.6rem;
          width: 3.6rem;
          max-height:3.6rem;
          max-width: 3.6rem;

          svg {
            fill: ${color.nobel};
          }
        }
      }
    }
  `,
  cco: css`
    display: block;
    letter-spacing: inherit;
    padding: 0;
    position: relative;
    text-align: inherit;
    text-transform: none;

    [class*="Browse"] & {
      color: ${color.black};
      letter-spacing: ${letterSpacing.md};
      text-transform: uppercase;
    }

    ${xlg(css`
      width: 100%;
    `)}

    @media(hover: hover) {
      &:hover {
        .accordion-item__icon {
          border-color: ${color.denim};
          height:3.6rem;
          width: 3.6rem;
          max-height:3.6rem;
          max-width: 3.6rem;

          svg {
            fill: ${color.denim};
          }
        }
      }
    }
  `,
  cio: css`
    display: block;
    letter-spacing: inherit;
    padding: 0;
    position: relative;
    text-align: inherit;
    text-transform: none;

    [class*="Browse"] & {
      color: ${color.cork};
      letter-spacing: ${letterSpacing.md};
      text-transform: uppercase;
    }

    ${breakpoint('xlg')`
      width: 100%;
    `}

    @media(hover: hover) {
      &:hover {
        .accordion-item__icon {
          border-color: ${color.squirrel};
          height:3.6rem;
          width: 3.6rem;
          max-height:3.6rem;
          max-width: 3.6rem;

          svg {
            fill: ${color.squirrel};
          }
        }
      }
    }
  `,
  light: css`
  `,
};

const AccordionButton = styled.button`
  ${withThemes(AccordionButtonTheme)}
`;

const AccordionLabelWrapperTheme = {
  default: css<{hasIcon: boolean}>`
    align-items: flex-end;
    display: flex;

    ${({ hasIcon }) => (hasIcon && css`
      .show-hide__button-label {
        display: inline-block;
        margin-right: ${spacing.xsm};
        max-width: 11.25rem;
        text-align: left;
      }
    `)}

    svg {
      flex-shrink: 0;
      height: 1.4rem;
      margin-bottom: 0.2rem;
      width: 1.6rem;
    }
  `,
  kidsSearch: css`
    flex-direction: row-reverse;

    .show-hide__button-label {
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
})<{hasIcon?: Icon}>`
  ${withThemes(AccordionLabelWrapperTheme)}
`;

const AccordionFieldsetContent = styled.fieldset`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};

  @media print {
    display: block !important;
  }
`;

const AccordionDivContent = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};

  @media print {
    display: block !important;
  }
`;

const icons = {
  chefHat: ChefHat,
  content: Content,
  cookbook: Cookbook,
  knife: Knife,
  sort: Sort,
  time: Time,
};

const StyledLegend = styled.legend`
  ${mixins.visuallyHidden};
`;

type DefaultLegend = {
  children: string | ReactNode | ReactNode[];
}
const Legend = ({ children }: DefaultLegend) => (
  <StyledLegend>{children}</StyledLegend>
);

export default function Accordion({
  children,
  icon,
  iconSize = 'default',
  id,
  isFieldset = false,
  isHidden = false,
  label: Label,
  onClick,
}: DefaultAccordion) {
  const [hidden, toggleHidden] = useState(isHidden);
  const AccordionContent = (
    isFieldset ? AccordionFieldsetContent : AccordionDivContent
    ) as React.ElementType;
  const Icon = icon ? icons[icon] : null;
  let idVal = id;
  if (!idVal && typeof Label === 'string') {
    idVal = Label?.split(' ')?.join('');
  }

  const isLabelString = typeof Label === 'string';
  let labelEl;
  labelEl = isLabelString ? Label : <Label />;

  if (typeof Label === 'object') {
    labelEl = Label;
  }

  useEffect(() => {
    if (typeof window.dry !== 'undefined') {
      window.dry.events.subscribe('accordion:toggle', (val: boolean) => toggleHidden(val));
    }
  }, []);

  return (
    <AccordionWrapper>
      <AccordionButton
        aria-controls={`show-hide--${idVal}`}
        aria-expanded={!hidden}
        className="accordion-item__button show-hide__expand-collapse-button"
        onClick={() => {
          toggleHidden(curr => !curr);
          if (onClick) { onClick(); }
        }}
      >
        {
          isFieldset ? (
            <AccordionLabelWrapper hasIcon={icon}>
              <span className="show-hide__button-label">{labelEl}</span>
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
        {isFieldset ? <Legend>{Label}</Legend> : null}
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
}
