import React, { ComponentPropsWithoutRef, PropsWithChildren, useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { font, color, withThemes, mixins } from '../../../styles';
import { md, untilMd } from '../../../styles/breakpoints';
import { cssThemedColor, cssThemedFontAccentColorAlt, cssThemedLink } from '../../../styles/mixins';
import useMedia from '../../hooks/useMedia';
import AffiliateLink from '../shared/AffiliateLink';
import Image from '../shared/Image';

const mobileCard = untilMd;
const desktopCard = md;

const cssHeadlineFont = css`
  font-family: ${font.pnb};
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 1.92px;
  text-transform: uppercase;
  ${cssThemedFontAccentColorAlt}
`;

const cssTitleFont = css`
  font-family: ${font.pnb};
  font-size: 18px;
  line-height: 1.17;
  ${cssThemedColor}
`;

const cssBodyFont = css`
  font-family: ${font.pnr};
  font-size: 16px;
  line-height: 1.25;
  ${cssThemedColor}
`;

const cssLinkTextFont = css`
  font-family: ${font.pnb};
  font-size: 16px;
  line-height: 1.13;
  ${cssThemedColor}
  ${cssThemedLink}
`;

const cssCenterColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const cssCenterRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const cssCenterLeadingRow = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Headline = styled.span<{withButton?: boolean}>`
  ${cssHeadlineFont}
  margin-bottom: ${({ withButton }) => (withButton ? '6px' : '8px')};
`;

const Title = styled.span<{withButton?: boolean}>`
  ${cssTitleFont}
  margin-bottom: ${({ withButton }) => (withButton ? '6px' : '8px')};
  ${mobileCard(css`
    ${mixins.truncateLineClamp(3)}
  `)}
  ${desktopCard(css`
    ${mixins.truncateLineClamp(1)}
  `)}
`;

const Body = styled.span`
  ${cssBodyFont}
  ${mixins.truncateLineClamp(3)}
  ${mobileCard(css`
    display: none;
  `)}
  margin-bottom: 8px;
`;

const LinkText = styled.a`
  ${cssLinkTextFont}
`;

const LinkWrapper = styled.div<{withButton?: boolean}>`
  padding-top: 8px;
  ${({ withButton }) => withButton && mobileCard(css`
    padding-top: 0;
  `)}
`;

const ImageWrapper = styled.div`
  ${cssCenterRow}
  ${mobileCard(css`
    height: 145px;
    width: 145px;
  `)}
  ${desktopCard(css`
    height: 200px;
    width: 200px;
  `)}
  flex-shrink: 0;
`;

const Content = styled.div`
  ${cssCenterColumn}
  ${mobileCard(css`
    height: 145px;
    padding: 8px 12px;
  `)}
  ${desktopCard(css`
    height: 200px;
    padding: 16px;
  `)}
`;

const Card = styled.a`
  ${cssCenterLeadingRow}
  background-color: ${color.white};
  ${withThemes({
    cco: css`
      box-sizing: border-box;
      border: solid 3px ${color.wildSand};
    `,
  })}
`;

type WideCardWrapperProps = PropsWithChildren<{src: string}> & ComponentPropsWithoutRef<'a'>;

export function Wrapper({ src, children, ...anchorProps }: WideCardWrapperProps) {
  const theme = useContext(ThemeContext);
  const isMobile = useMedia('(max-width: 767px)');
  const base = isMobile ? 145 : 200;
  const offset = theme.siteKey === 'cco' ? -20 : 0;
  const imageSize = base + offset;

  return (
    <Card {...anchorProps}>
      <ImageWrapper>
        <Image
          width={imageSize}
          height={imageSize}
          aria-hidden="true"
          imageUrl={src}
          imageAlt=""
          lazy={false}
        />
      </ImageWrapper>
      <Content>{children}</Content>
    </Card>
  );
}

/** Composable component API or references for styled components classNames. */
export const WideCard = {
  Wrapper,
  Headline,
  Title,
  Body,
  LinkWrapper,
  LinkText,
  AffiliateLink,
};

export type RelatedContentCardProps = {
  /** Href attribute value for card link. */
  href: string;
  /**
   * Href attribute for AffiliateLink or text link.
   * Requires props.link to be provided.
   * If props.link is provided without this attribute, href will be used.
   */
  buttonHref?: string;
  /** Src attribute value for image. */
  src: string;
  /** Text content, 1st at top of card. */
  headline: string;
  /** Text content, 2nd from top of card. */
  title: string;
  /** Text content, 3rd from top of card. */
  body: string;
  /** If provided, render button or text link depending on withButton prop. */
  link?: string;
  /** Show button link instead of text link. */
  withButton?: boolean;
}

/** Preview helper, example implemenation, and validating exports */
export default function RelatedContentCard({
  href,
  buttonHref,
  src,
  headline,
  title,
  body,
  link,
  withButton,
}: RelatedContentCardProps) {
  return (
    <WideCard.Wrapper href={href} src={src} target="_blank" rel="noopener noreferrer">
      <WideCard.Headline withButton={withButton}>{headline}</WideCard.Headline>
      <WideCard.Title as="h4" withButton={withButton}>{title}</WideCard.Title>
      <WideCard.Body>{body}</WideCard.Body>
      <WideCard.LinkWrapper withButton={withButton}>
        {!!link && !!withButton ? (
          <WideCard.AffiliateLink text={link} url={buttonHref || href} />
        ) : (
          <WideCard.LinkText>{link}</WideCard.LinkText>
        )}
      </WideCard.LinkWrapper>
    </WideCard.Wrapper>
  );
}
