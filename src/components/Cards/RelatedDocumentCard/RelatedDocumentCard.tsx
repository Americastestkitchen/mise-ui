import React from 'react';
import styled, { css } from 'styled-components';
import { color, font, fontSize, letterSpacing, lineHeight, mixins, spacing, withThemes } from '../../../styles';
import { md } from '../../../styles/breakpoints';
import { cssThemedColor, cssThemedLink } from '../../../styles/mixins';
import Badge from '../../Badge/Badge';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker/Sticker';
import { StickerType, StickerContentType } from '../Cards';

const RelatedDocCardWrapper = styled.a.attrs({
  className: 'related-document-card',
})`
  background-color: ${color.white};
  display: flex;
  ${withThemes({
    cco: css`
      ${mixins.ccoReviewSetBorder()}
    `,
  })}
`;

const RelatedDocCardContent = styled.div.attrs({
  className: 'related-document-card',
})`
  ${cssThemedColor}
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  justify-content: center;
  padding: 1.3rem;

  ${md(css`
    padding: ${spacing.md} ${spacing.xlg} ${spacing.sm};
  `)}
`;

const RelatedDocCardImageWrapper = styled.div.attrs({
  className: 'related-document-card__image',
})`
  align-items: center;
  display: flex;
  flex: 0 0 clamp(50%, 16.5rem, 50%);
  position: relative;
  width: clamp(50%, 16.5rem, 50%);

  img {
    display: block
  }

  ${md(css`
    flex-basis: 20.8rem;
    width: 20.8rem;
  `)}
`;

const RelatedDocCardAttribution = styled.span.attrs({
  className: 'related-document-card__attribution',
})`
  display: none;
  font: 1.2rem/${lineHeight.md} ${font.pnb};
  margin-bottom: ${spacing.xsm};
  letter-spacing: ${letterSpacing.lg};
  text-transform: uppercase;

  ${md(css`
    display: block;
  `)}
`;

const RelatedDocCardTitle = styled.h4.attrs({
  className: 'related-document-card__title',
})`
  font: ${fontSize.md}/${lineHeight.md} ${font.pnb};
  margin-bottom: ${spacing.xsm};

  ${md(css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  `)}

  span {
    ${cssThemedLink}
  }
`;

const RelatedDocCardSubtitle = styled.span.attrs({
  className: 'related-document-card__subtitle',
})`
  display: none;
  font: ${fontSize.md}/${lineHeight.md} ${font.pnr};

  ${md(css`
    align-self: flex-start;
    display: inline-block;
  `)}
`;

const StickerGroup = styled.div.attrs({
  className: 'related-document-card__stickers',
})`
  .related-document-card__image & {
    bottom: 0;
    left: 0;
    position: absolute;
  }
`;

const StyledBadge = styled(Badge)`
  left: ${spacing.xsm};
  position: absolute;
  top: ${spacing.xsm};
`;

export type RelatedDocumentCardProps = {
  attribution?: string;
  contentType: StickerContentType;
  href: string;
  imageUrl: string;
  onClick: () => void;
  siteKey: ThemeSiteKey;
  stickers?: StickerType[];
  subtitle?: string;
  target?: string;
  title: string;
}

const RelatedDocumentCard = ({
  attribution = '',
  contentType,
  href,
  imageUrl,
  onClick = () => {},
  siteKey,
  stickers = [],
  subtitle = '',
  target = '',
  title,
}: RelatedDocumentCardProps) => {
  let stickerContent = null;
  if (stickers && stickers.length > 0) {
    stickerContent = (
      <StickerGroup>
        {stickers.map(({ text, type }) => (
          <Sticker
            key={text}
            contentType={contentType}
            type={type}
            text={text}
          />
        ))}
      </StickerGroup>
    );
  }

  return (
    <RelatedDocCardWrapper
      href={href}
      onClick={onClick}
      rel={target && target === '_blank' ? 'noopener noreferrer' : ''}
      target={target}
    >
      {imageUrl && (
        <RelatedDocCardImageWrapper>
          <StyledBadge
            type={siteKey}
          />
          <Image
            imageAlt=""
            imageUrl={imageUrl}
            lazy={false}
          />
          {stickerContent}
        </RelatedDocCardImageWrapper>
      )}
      <RelatedDocCardContent>
        {!imageUrl && stickerContent}
        {attribution && (
          <RelatedDocCardAttribution>
            {attribution}
          </RelatedDocCardAttribution>
        )}
        <RelatedDocCardTitle>
          <span>{title}</span>
        </RelatedDocCardTitle>
        {subtitle && (
          <RelatedDocCardSubtitle>
            {subtitle}
          </RelatedDocCardSubtitle>
        )}
      </RelatedDocCardContent>
    </RelatedDocCardWrapper>
  );
};

export default RelatedDocumentCard;
