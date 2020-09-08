import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import FeatureCard from '../FeatureCard';
import StandardCard from '../StandardCard';
import TallCard from '../TallCard';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../styles';

const CardWrapperWrapperTheme = {
  default: css`
  `,
};

const CardWrapperWrapper = styled.div.attrs({
  className: 'card-wrapper',
})`${withThemes(CardWrapperWrapperTheme)}`;


const CardWrapperInfoWrapperTheme = {
  default: css`
    ${breakpoint('lg')`
      align-items: center;
      display: flex;
      margin-bottom: ${spacing.xsm};
    `}
  `,
};

const CardWrapperInfoWrapper = styled.div.attrs({
  className: 'card-wrapper__info',
})`${withThemes(CardWrapperInfoWrapperTheme)}`;

const CardWrapperTitleTheme = {
  default: css`
    font: ${fontSize.xl}/1 ${font.pnb};
    margin-bottom: ${spacing.xsm};

    ${breakpoint('lg')`
      font-size: ${fontSize.xxl};
      margin-bottom: 0;
      margin-right: ${spacing.sm};
    `}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const CardWrapperTitle = styled.h3.attrs({
  className: 'card-wrapper__title',
})`${withThemes(CardWrapperTitleTheme)}`;


const CardWrapperCtaTheme = {
  default: css`
    display: block;
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnr};
    letter-spacing: ${letterSpacing.xlg};
    margin-bottom: ${spacing.xsm};
    text-transform: uppercase;

    &:hover {
      color: ${color.mint};
    }

    ${breakpoint('lg')`
      font-size: ${fontSize.md};
      margin-bottom: 0;
    `}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const CardWrapperCta = styled.a.attrs({
  className: 'card-wrapper__cta',
})`${withThemes(CardWrapperCtaTheme)}`;

const typeMap = {
  feature: FeatureCard,
  standard: StandardCard,
  tall: TallCard,
};

const CardWrapper = ({
  ctaText,
  ctaUrl,
  item,
  title,
  type,
}) => {
  const El = typeMap[type] || FeatureCard;

  return (
    <CardWrapperWrapper>
      <CardWrapperInfoWrapper>
        <CardWrapperTitle>
          {title}
        </CardWrapperTitle>
        {ctaText && ctaUrl && (
          <CardWrapperCta href={ctaUrl}>
            {`${ctaText} >`}
          </CardWrapperCta>
        )}
      </CardWrapperInfoWrapper>
      <El
        {...item}
      />
    </CardWrapperWrapper>
  );
};

CardWrapper.propTypes = {
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['standard', 'feature', 'tall']).isRequired,
};

CardWrapper.defaultProps = {
  ctaText: null,
  ctaUrl: null,
};

export default CardWrapper;
