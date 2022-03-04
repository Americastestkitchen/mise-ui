import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connectRefinementList } from 'react-instantsearch-dom';

import RefinementFilter2 from '../RefinementFilter2';
import mixins from '../../../../styles/mixins';
import { color, font, fontSize, withThemes } from '../../../../styles';

const ToggleRefinementWrapperTheme = {
  default: css`
    .refinement-filter__wrapper label {
      font: ${fontSize.md}/1.05 ${font.pnb};
      ${({ theme }) => (theme && theme.siteKey ? mixins.styledLinkWithSiteKey(theme.siteKey) : '')}
    }
  `,
  atk: css`
    color: ${color.eclipse};

    .refinement-filter__wrapper label {
      &:hover {
        color: ${color.eclipse};
      }
    }
  `,
  cco: css`
    color: ${color.black};

    .refinement-filter__wrapper label {
      &:hover {
        color: ${color.black};
      }
    }
  `,
  cio: css`
    color: ${color.cork};

    .refinement-filter__wrapper label {
      &:hover {
        color: ${color.cork};
      }
    }
  `,
};

const ToggleRefinementWrapper = styled.div`
  ${withThemes(ToggleRefinementWrapperTheme)}
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
