import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, font, fontSize, lineHeight, withThemes } from '../../../../styles';

const TitleTheme = {
  default: css`
    font: 700 ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    transition: color 0.2s ease;

    @media(hover: hover) {
      &:hover {
        color: ${color.darkTeal};
      }
    }
  `,
  cco: css`
    @media(hover: hover) {
      &:hover {
        color: ${color.denim};
      }
    }
  `,
  cio: css`
    @media(hover: hover) {
      &:hover {
        color: ${color.squirrel};
      }
    }
  `,
  dark: css`
    @media(hover: hover) {
      &:hover {
        color: ${color.silver};
      }
    }
  `,
};
const StyledTitle = styled.p`
  ${withThemes(TitleTheme)};
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
