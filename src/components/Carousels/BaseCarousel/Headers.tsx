import React from 'react';
import styled, { css } from 'styled-components';
import { mixins, font, withThemes, color } from '../../../styles';
import { Intro, Title, Topic } from './styled-elements';
import { cssThemedColor, cssThemedFontAccentColorAlt } from '../../../styles/mixins';
import { InferStyledTypes } from '../../../styles/utility-types';

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

const Layout = styled.span`
  vertical-align: middle;
  ${Title} {
    display: inline-block;
    margin-right: 16px;
  }
`;

const Svg = styled.svg`
  margin-left: 5px;
  fill: none;
  stroke: inherit;
  stroke-linecap: round;
  stroke-miterlimit: 10;
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
    <Layout>
      <Title {...titleProps}>{title}</Title>
      {linkText && (
        <Link {...linkProps}>
          {linkText}
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="4.279"
            height="10.978"
            viewBox="0 0 4.279 10.978"
            aria-hidden="true"
            focusable="false"
            role="img"
          >
            <path data-name="Path 2" d="m0 0 3 4.8-3 4.8" transform="translate(.689 .689)" />
          </Svg>
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
