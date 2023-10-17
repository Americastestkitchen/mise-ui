import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectRefinementList } from 'react-instantsearch-dom';

import RefinementFilter2 from '../RefinementFilter2';
import { cssThemedColor, cssThemedLink } from '../../../../styles/mixins';
import { font, fontSize } from '../../../../styles';

const ToggleRefinementWrapper = styled.div`
  width: fit-content;

  .refinement-filter__wrapper {
    label {
      ${cssThemedColor}
      ${cssThemedLink}
      font: 700 (${fontSize.md}/1.05 )${font.pnb};
    }

    &:hover {
      label {
        ${cssThemedColor}
      }
    }
  }

  .refinement-filter__checkmark {
    top: 0.4rem;
  }
`;

const ToggleRefinement = ({
  attribute,
  label,
  value,
  ...restProps
}) => (
  <ToggleRefinementWrapper className="toggle-refinement">
    <RefinementFilter2
      attribute={attribute}
      filterType="toggleRefinement"
      includeCount={false}
      label={label}
      value={value}
      {...restProps}
    />
  </ToggleRefinementWrapper>
);

ToggleRefinement.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /** Filter label */
  label: PropTypes.string.isRequired,
  /** Value of filter to be used for refining results. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array], PropTypes.string).isRequired,
};

export default connectRefinementList(ToggleRefinement);
