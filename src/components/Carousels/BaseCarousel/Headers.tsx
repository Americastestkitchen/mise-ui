import React from 'react';
import styled, { css } from 'styled-components';
import { mixins, font, withThemes, color } from '../../../styles';
import { Intro, Title, Topic } from './styled-elements';
import { cssThemedColor, cssThemedFontAccentColorAlt } from '../../../styles/mixins';
import { InferStyledTypes } from '../../../styles/utility-types';
import { ChevronThin } from '../../DesignTokens/Icon';
import { untilMd } from '../../../styles/breakpoints';

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
  ${Title} {
    display: block;
    margin-right: -32px; 
    margin-bottom: 8px;
  }
`;

const Layout = styled.span<{ hasLink: boolean }>`
  vertical-align: middle;
  ${Title} {
    display: inline-block;
    margin-right: 16px;
  }
  ${({ hasLink }) => hasLink && untilMd(css`${cssWrappingStyles}`)}
`;

const Link = styled.a`
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
    ${mixins.focusIndicator()}
  }
`;

export type LinkCarouselHeaderProps = {
  title: string;
  linkText: string;
  titleProps?: InferStyledTypes<typeof Title>;
  linkProps: InferStyledTypes<typeof Link>;
};

export function LinkCarouselHeader({
  title,
  linkText,
  titleProps,
  linkProps,
}: LinkCarouselHeaderProps) {
  return (
    <Layout hasLink={!!linkText}>
      <Title {...titleProps}>{title}</Title>
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
    <div>
      <Title>{title}</Title>
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
    <div>
      {!!topic && (
        <Topic>
          {topic}
        </Topic>
      )}
      <Title>{title}</Title>
    </div>
  );
}
