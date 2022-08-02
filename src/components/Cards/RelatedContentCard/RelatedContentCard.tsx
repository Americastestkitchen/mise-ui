import React, { ComponentProps, PropsWithChildren, useContext, useEffect, useState } from 'react';
import styled, { css, DefaultTheme, ThemeContext, ThemeProvider } from 'styled-components';
import { font, color, withThemes, mixins } from '../../../styles';
import { md, untilMd } from '../../../styles/breakpoints';
import { cssThemedColor, cssThemedFontAccentColorAlt, cssThemedLink } from '../../../styles/mixins';
import useMedia from '../../hooks/useMedia';
import AffiliateLink from '../shared/AffiliateLink/AffiliateLink';

const mobileCard = untilMd;
const desktopCard = md;

const mapPropsToThemeContext = (
  props: Partial<RelatedContentCardProps>,
) => (
  theme: DefaultTheme,
) => ({ ...theme, props });

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
  justify-content: space-between;
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

const Headline = styled.span`
  ${cssHeadlineFont}
  margin-bottom: ${({ theme }) => (theme.props.withButton ? '4px' : '8px')};
`;

const Title = styled.span`
  ${cssTitleFont}
  margin-bottom: 8px;
  ${mobileCard(css`
    ${mixins.truncateLineClamp(3)}
  `)}
  ${desktopCard(css`
    ${mixins.truncateLineClamp(1)}
  `)}
`;

const Body = styled.span`
  ${cssBodyFont}
  ${mobileCard(css`
    display: none;
  `)}
  margin-bottom: 8px;
`;

const LinkText = styled.a`
  ${cssLinkTextFont}
`;

const LinkWrapper = styled.div`
  padding-top: 8px;
  ${({ theme }) => theme.props.withButton && mobileCard(css`
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 135px;
    max-height: 145px;
    padding: 8px 12px;
  `)}
  ${desktopCard(css`
    max-height: 200px;
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

type WideCardWrapperProps = PropsWithChildren<{ src: string | undefined }> &
  ComponentProps<typeof Card>;

export function Wrapper({ src, children, ...anchorProps }: WideCardWrapperProps) {
  const theme = useContext(ThemeContext);
  const isMobile = useMedia('(max-width: 767px)');
  const offset = theme.siteKey === 'cco' ? -20 : 0;
  const [imageSize, setImageSize] = useState(200);
  useEffect(() => {
    if (src) {
      if (isMobile) {
        setImageSize(145 + offset);
      } else {
        setImageSize(200 + offset);
      }
    }
  }, [isMobile, src, offset]);

  return (
    <Card {...anchorProps}>
      {/* hide image if one is not provided, content shifts to left */}
      {src && (
        <ImageWrapper>
          <img
            width={imageSize}
            height={imageSize}
            aria-hidden="true"
            src={src}
            alt=""
          />
        </ImageWrapper>
      )}
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
  src?: string;
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
    <WideCard.Wrapper
      href={href}
      src={src}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ThemeProvider theme={mapPropsToThemeContext({ withButton })}>
        <WideCard.Headline>{headline}</WideCard.Headline>
        <WideCard.Title as="h4">{title}</WideCard.Title>
        <WideCard.Body>{body}</WideCard.Body>
        <WideCard.LinkWrapper>
          {!!link && !!withButton ? (
            <WideCard.AffiliateLink text={link} url={buttonHref || href} />
          ) : (
            <WideCard.LinkText>{link}</WideCard.LinkText>
          )}
        </WideCard.LinkWrapper>
      </ThemeProvider>
    </WideCard.Wrapper>
  );
}
