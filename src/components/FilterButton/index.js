import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../styles';
import Filter from '../DesignTokens/Icon/svgs/Filter';

const StyledFilterButton = styled.button`
  color: ${color.eclipse};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
  padding: ${spacing.xsm};
`;

const StyledFilter = styled(Filter)`
  margin-left: ${spacing.xsm};
  width: 1.7rem;
`;

const FilterButton = ({ className, onClick }) => (
  <StyledFilterButton
    className={className}
    onClick={onClick}
  >
    Filter
    <StyledFilter />
  </StyledFilterButton>
);

FilterButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

FilterButton.defaultProps = {
  className: null,
  onClick: null,
};

export default FilterButton;
