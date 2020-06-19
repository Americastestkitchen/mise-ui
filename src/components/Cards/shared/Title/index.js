import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight } from '../../../../styles';

const StyledTitle = styled.h3`
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  transition: color 0.2s ease;

  @media(hover: hover) {
    &:hover {
      color: ${color.mint};
    }
  }
`;

const Title = ({ className, title }) => (
  <StyledTitle
    className={className}
  >
    {title}
  </StyledTitle>
);

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  className: null,
};

export default Title;
