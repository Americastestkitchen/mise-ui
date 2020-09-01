import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, font, fontSize, lineHeight, withThemes } from '../../../../styles';

const NumericMenuTheme = {
  default: css`
    label {
      align-items: center;
      cursor: pointer;
      display: flex;
      font: ${fontSize.md}/1.38 ${font.pnr};
      margin-bottom: 1.2rem;
      padding: 0.4rem 1.3rem;
      position: relative;
      white-space: nowrap;
    }

    input {
      display: none;
    }
  `,
  kidsSearch: css`
    label {
      background-color: ${color.greySmoke};
      border-radius: 1rem;
      color: ${color.black};
      line-height: ${lineHeight.xlg};

      &:hover {
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      }
    }

    .ais-NumericMenu-item--selected {
      label {
        background-color: ${color.jade};
        color: ${color.white};
      }

      &:hover {
        label {
          color: ${color.white};
        }
      }
    }
  `,
};

const NumericMenu = styled.div`
  ${withThemes(NumericMenuTheme)}
`;

const SearchNumericMenu = ({ items, refine }) => (
  <NumericMenu className="ais-NumericMenu">
    <ul className="ais-NumericMenu-list">
      {items.filter(i => i.label !== 'All' && i.noRefinement).map(item => (
        <li
          className={`ais-NumericMenu-item${item.isRefined && ' ais-NumericMenu-item--selected'}`}
          key={item.value}
        >
          <label
            className="ais-NumericMenu-label"
            htmlFor={`numeric-item-${item.value}`}
          >
            <input
              checked={item.isRefined}
              className="ais-NumericMenu-radio"
              id={`numeric-item-${item.value}`}
              onChange={(evt) => {
                evt.preventDefault();
                refine(item.value);
              }}
              name="NumericMenu"
              type="radio"
            />
            <span className="ais-NumericMenu-labelText">
              {item.label}
            </span>
          </label>
        </li>
      ))}
    </ul>
  </NumericMenu>
);

SearchNumericMenu.propTypes = {
  /** Refinement filter values from algolia */
  items: PropTypes.array.isRequired,
  /** Apply the filter */
  refine: PropTypes.func.isRequired,
};

export default SearchNumericMenu;
