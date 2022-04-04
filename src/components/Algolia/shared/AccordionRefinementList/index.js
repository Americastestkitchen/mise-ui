import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connectRefinementList } from 'react-instantsearch-dom';

import RefinementList2 from '../RefinementList2';
import Accordion from '../../../Accordion';
import { cssThemedHoverColor } from '../../../../styles/mixins';
import { color, mixins, withThemes } from '../../../../styles';

const StyledAccordionTheme = {
  atk: css`
    .accordion-item__button {
      @media(hover: hover) {
          &:hover {
            .accordion-item__icon {
              svg {
                fill: ${color.mint};
              }
            }
          }
        }
      }
    }
  `,
  cco: css`
    .accordion-item__button {
      @media(hover: hover) {
          &:hover {
            .accordion-item__icon {
              svg {
                fill: ${color.denim};
              }
            }
          }
        }
      }
    }
  `,
  cio: css`
    .accordion-item__button {
      @media(hover: hover) {
          &:hover {
            .accordion-item__icon {
              svg {
                fill: ${color.squirrel};
              }
            }
          }
        }
      }
    }
  `,
};

const StyledAccordion = styled(Accordion)`
  .accordion-ref-list__heading,
  legend {
    ${cssThemedHoverColor}
  }

  .accordion-ref-list__heading {
    max-width: 18rem;
  }

  ${withThemes(StyledAccordionTheme)}
`;

const AccordionRefinementList = ({
  attribute,
  icon,
  iconSize,
  initialCount,
  items,
  showHideLabel,
  ...restProps
}) => (
  items && items.length > 0 ? (
    <StyledAccordion
      icon={icon}
      iconSize={iconSize}
      label={() => <h3 className="accordion-ref-list__heading">{showHideLabel}</h3>}
    >
      <RefinementList2
        attribute={attribute}
        initialCount={initialCount}
        items={items}
        {...restProps}
      />
    </StyledAccordion>
  ) : null
);

AccordionRefinementList.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /* Name of icon */
  icon: PropTypes.string,
  /* Size of icon */
  iconSize: PropTypes.oneOf(['default', 'large']),
  /** Number of menu items to show by default */
  initialCount: PropTypes.number,
  /** Refinement filter values from algolia */
  items: PropTypes.array.isRequired,
  /** Used to pass click functionality from jarvis etc. */
  handleClick: PropTypes.func,
  /** 'Title' of the list that will be put into clickable show/hide button */
  showHideLabel: PropTypes.string.isRequired,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
};

AccordionRefinementList.defaultProps = {
  handleClick: null,
  icon: null,
  iconSize: 'default',
  initialCount: 3,
  transformItems: null,
};

export default connectRefinementList(AccordionRefinementList);
