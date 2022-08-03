import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css } from 'styled-components';

import FeatureCard from '../FeatureCard/FeatureCard';
import StandardCard from '../StandardCard/StandardCard';
import TallCard from '../TallCard/TallCard';

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
      align-items: flex-end;
      display: flex;
      margin-bottom: 1.2rem;
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
    white-space: nowrap;

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
    letter-spacing: ${letterSpacing.cta};
    margin-bottom: ${spacing.xsm};
    overflow: hidden;
    padding-bottom: 0.3rem;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      color: ${color.silver};
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

type CardWrapperProps = {
  ctaText?: string,
  ctaUrl?: string,
  item: any; // TODO: redefine unknown when card improvements are made
  onClick?(): void,
  title: string,
  type: 'feature' | 'standard' | 'tall',
}

export default function CardWrapper({
  ctaText,
  ctaUrl,
  item,
  onClick,
  title,
  type = 'feature',
}: CardWrapperProps) {
  const El = typeMap[type];

  return (
    <CardWrapperWrapper onClick={onClick}>
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
}
