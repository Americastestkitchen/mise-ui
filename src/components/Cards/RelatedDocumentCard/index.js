import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import Badge from '../../Badge/Badge';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  mixins,
  spacing,
  withThemes,
} from '../../../styles';

/** WRAPPER */
const RelatedDocumentCardTheme = {
  default: css`
    background-color: ${color.white};
    display: flex;
  `,
  cco: css`
    ${mixins.ccoReviewSetBorder()}
  `,
};
const RelatedDocumentCardEl = styled.a.attrs({
  className: 'related-document-card',
})`${withThemes(RelatedDocumentCardTheme)}`;

/** CONTENT */
const RelatedDocumentCardContentTheme = {
  default: css`
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    justify-content: center;
    padding: 1.3rem;

    ${breakpoint('md')`
      padding: ${spacing.md} ${spacing.xlg} ${spacing.sm};
    `}
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};
const RelatedDocumentCardContent = styled.div.attrs({
  className: 'related-document-card',
})`${withThemes(RelatedDocumentCardContentTheme)}`;

/** IMAGE WRAPPER */
const RelatedDocumentImageWrapperTheme = {
  default: css`
    align-items: center;
    display: flex;
    flex: 0 0 clamp(50%, 16.5rem, 50%);
    position: relative;
    width: clamp(50%, 16.5rem, 50%);

    img {
      display: block;
    }

    ${breakpoint('md')`
      flex-basis: 20.8rem;
      width: 20.8rem;
    `}
  `,
};
const RelatedDocumentImageWrapper = styled.div.attrs({
  className: 'related-document-card__image',
})`${withThemes(RelatedDocumentImageWrapperTheme)}`;

/** ATTRIBUTION */
const RelatedDocumentCardAttributionTheme = {
  default: css`
    display: none;
    font: 1.2rem/${lineHeight.md} ${font.pnb};
    margin-bottom: ${spacing.xsm};
    letter-spacing: ${letterSpacing.lg};
    text-transform: uppercase;

    ${breakpoint('md')`
      display: block;
    `}
  `,
};
const RelatedDocumentCardAttribution = styled.span.attrs({
  className: 'related-document-card__attribution',
})`${withThemes(RelatedDocumentCardAttributionTheme)}`;

/** TITLE */
const RelatedDocumentCardTitleTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.md} ${font.pnb};
    margin-bottom: ${spacing.xsm};

    ${breakpoint('md')`
      font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    `}
  `,
  atk: css`
    span {
      ${mixins.styledLinkWithSiteKey('atk')}
    }
  `,
  cco: css`
    span {
      ${mixins.styledLinkWithSiteKey('cco')}
    }
  `,
  cio: css`
    span {
      ${mixins.styledLinkWithSiteKey('cio')}
    }
  `,
};
const RelatedDocumentCardTitle = styled.h4.attrs({
  className: 'related-document-card__title',
})`${withThemes(RelatedDocumentCardTitleTheme)}`;

/** SUBTITLE */
const RelatedDocumentCardSubtitleTheme = {
  default: css`
    display: none;
    font: ${fontSize.md}/${lineHeight.md} ${font.pnr};

    ${breakpoint('md')`
      align-self: flex-start;
      display: inline-block;
    `}`,
};
const RelatedDocumentCardSubtitle = styled.span.attrs({
  className: 'related-document-card__subtitle',
})`${withThemes(RelatedDocumentCardSubtitleTheme)}`;

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
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};
`;

const RelatedDocumentCard = ({
  attribution,
  contentType,
  href,
  imageAspectRatio,
  imageUrl,
  onClick,
  siteKey,
  stickers,
  subtitle,
  target,
  title,
}) => {
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
    <RelatedDocumentCardEl
      href={href}
      onClick={onClick}
      rel={target && target === '_blank' ? 'noopener noreferrer' : null}
      target={target}
    >
      {imageUrl && (
        <RelatedDocumentImageWrapper>
          <StyledBadge
            type={siteKey}
          />
          <Image
            imageAlt=""
            aspectRatio={imageAspectRatio}
            imageUrl={imageUrl}
            lazy={false}
          />
          {stickerContent}
        </RelatedDocumentImageWrapper>
      )}
      <RelatedDocumentCardContent>
        {!imageUrl && stickerContent}
        {attribution && (
          <RelatedDocumentCardAttribution>
            {attribution}
          </RelatedDocumentCardAttribution>
        )}
        <RelatedDocumentCardTitle>
          <span>{title}</span>
        </RelatedDocumentCardTitle>
        {subtitle && (
          <RelatedDocumentCardSubtitle>
            {subtitle}
          </RelatedDocumentCardSubtitle>
        )}
      </RelatedDocumentCardContent>
    </RelatedDocumentCardEl>
  );
};

RelatedDocumentCard.propTypes = {
  attribution: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageAspectRatio: PropTypes.string,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  stickers: PropTypes.array,
  subtitle: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
};

RelatedDocumentCard.defaultProps = {
  attribution: null,
  imageAspectRatio: null,
  imageUrl: null,
  onClick: null,
  stickers: [],
  subtitle: null,
  target: null,
};

export default RelatedDocumentCard;
