import React, { ComponentPropsWithoutRef, PropsWithChildren, useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { font, color, withThemes, mixins } from '../../../styles';
import AffiliateLink from '../shared/AffiliateLink';
import Image from '../shared/Image';

const themeHighlight = css`
  ${withThemes({
    default: css`background-color: ${color.seaSalt};`,
    atk: css`background-color: ${color.seaSalt};`,
    cco: css`background-color: ${color.cornflower};`,
    cio: css`background-color: ${color.sand};`,
  })}
`;

const themedUnderline = css`
  ${withThemes({
    default: css`background-image: linear-gradient(transparent 91%, ${color.turquoise} 91%);`,
    atk: css`background-image: linear-gradient(transparent 91%, ${color.turquoise} 91%);`,
    cco: css`background-image: linear-gradient(transparent 91%, ${color.havelockBlue} 91%);`,
    cio: css`background-image: linear-gradient(transparent 91%, ${color.dijon} 91%);`,
  })}
`;

const cssHeadlineFont = css`
  font-family: ${font.pnb};
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 1.92px;
  text-transform: uppercase;
  ${withThemes({
    default: css`color: ${color.darkTeal};`,
    atk: css`color: ${color.darkTeal};`,
    cco: css`color: ${color.denim};`,
    cio: css`color: ${color.squirrel};`,
  })}
`;

const cssTitleFont = css`
  font-family: ${font.pnb};
  font-size: 18px;
  line-height: 1.17;
  color: ${color.eclipse};
`;

const cssBodyFont = css`
  font-family: ${font.pnr};
  font-size: 16px;
  line-height: 1.25;
  ${withThemes({
    default: css`color: ${color.eclipse};`,
    cio: css`color: ${color.cork};`,
  })}
`;

const cssLinkTextFont = css`
  font-family: ${font.pnb};
  font-size: 16px;
  line-height: 1.13;
  color: ${color.eclipse};
  transition: background-color 0.2s ease-in-out 0s;
  ${themedUnderline}
  &:hover {
    ${themeHighlight}
  }
`;

const cssLeadingCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const cssCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.span`
  ${cssHeadlineFont}
  margin-bottom: 8px;
`;

const Title = styled.span`
  ${cssTitleFont}
  margin-bottom: 8px;
`;

const Body = styled.span`
  ${cssBodyFont}
  ${mixins.truncateLineClamp(3)}
  margin-bottom: 8px;
`;

const LinkText = styled.a`
  ${cssLinkTextFont}
  padding: 4px 0;
`;

const LinkWrapper = styled.div`
  padding-top: 8px;
`;

const ImageWrapper = styled.div`
  ${cssCenter}
  flex-shrink: 0;
  height: 200px;
  width: 200px;
`;

const Content = styled.div`
  ${cssLeadingCenter}
  padding: 16px;
`;

const Card = styled.a`
  ${cssCenter}
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
  const imageSize = theme.siteKey === 'cco' ? 180 : 200;

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
    <WideCard.Wrapper href={href} src={src}>
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
    </WideCard.Wrapper>
  );
}
