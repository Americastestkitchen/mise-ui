import React from 'react';
import styled, { css } from 'styled-components';
import Cookbook from '../../DesignTokens/Icon/svgs/Cookbook';
import { mixins, font, withThemes, color } from '../../../styles';
import { Intro, Title, TitleWrapper, Topic } from './styled-elements';
import { cssThemedColor, cssThemedFontAccentColorAlt } from '../../../styles/mixins';
import { InferStyledTypes } from '../../../styles/utility-types';
import { ChevronThin } from '../../DesignTokens/Icon';
import { md, untilSm, untilMd } from '../../../styles/breakpoints';

const cssThemedStrokeAccentAlt = withThemes({
  default: css`stroke: ${color.darkTeal};`,
  atk: css`stroke: ${color.darkTeal};`,
  cco: css`stroke: ${color.denim};`,
  cio: css`stroke: ${color.squirrel};`,
});

const cssThemedStroke = withThemes({
  default: css`stroke: ${color.eclipse};`,
  atk: css`stroke: ${color.eclipse};`,
  cco: css`stroke: ${color.black};`,
  cio: css`stroke: ${color.cork};`,
});

/**
 * If link text is provided, we add spacing for title to wrap above
 *  the arrow buttons by a bit to match designs.
 */
const cssWrappingStyles = css`
  display: flex;
  flex-direction: column;
  ${TitleWrapper} {
    margin-bottom: 0.8rem;
  }
`;

const Layout = styled.span<{ hasLink: boolean }>`
  vertical-align: middle;

  ${TitleWrapper} {
    display: inline-flex;

    ${md(css`
      margin-right: 16px;
    `)}
  }

  ${({ hasLink }) => hasLink && untilMd(css`${cssWrappingStyles}`)}
`;

const Link = styled.a`
  ${untilSm(css`
    display: block;
    max-width: 20rem;
    white-space: pre-wrap;
  `)}
  white-space: nowrap;
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${font.pnr};
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 2.88px;
  margin: 0;
  ${cssThemedColor}
  ${cssThemedStroke}
  @media (hover: hover) {
    &:hover {
      ${cssThemedFontAccentColorAlt}
      ${cssThemedStrokeAccentAlt}
    }
  }
  &:focus-within {
    ${mixins.focusIndicator(color.eclipse, '5px')}
  }
`;

const SvgWrapper = styled.div`
  ${untilMd(css`display: none;`)}
  height: 1.9rem;
  display: inline-block;
  margin-right: 0.8rem;
  width: 2.6rem;

  svg {
    max-height: 100%;
    max-width: 100%;
  }
`;

export type LinkCarouselHeaderProps = {
  includeIcon?: boolean;
  title: string;
  linkText?: string;
  titleProps?: InferStyledTypes<typeof Title>;
  linkProps?: InferStyledTypes<typeof Link>;
};

export function LinkCarouselHeader({
  includeIcon,
  title,
  linkText,
  titleProps,
  linkProps,
}: LinkCarouselHeaderProps) {
  return (
    <Layout data-testid="link-carousel-header" hasLink={!!linkText}>
      <TitleWrapper>
        {
          includeIcon && (
            <SvgWrapper>
              <Cookbook fill={color.eclipse} />
            </SvgWrapper>
          )
        }
        <Title {...titleProps}>
          {title}
        </Title>
      </TitleWrapper>
      {linkText && (
        <Link {...linkProps}>
          {linkText}
          <ChevronThin />
        </Link>
      )}
    </Layout>
  );
}

type IntroCarouselHeaderProps = {
  title: string;
  /** Html string */
  intro?: string;
}

export function IntroCarouselHeader({ title, intro }: IntroCarouselHeaderProps) {
  return (
    <div data-testid="intro-carousel-header">
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      {!!intro && <Intro dangerouslySetInnerHTML={{ __html: intro }} />}
    </div>
  );
}

type TopicCarouselHeaderProps = {
  title: string;
  topic?: string;
}

export function TopicCarouselHeader({ title, topic }: TopicCarouselHeaderProps) {
  return (
    <div data-testid="topic-carousel-header">
      {!!topic && (
        <Topic>
          {topic}
        </Topic>
      )}
      <Title>{title}</Title>
    </div>
  );
}
