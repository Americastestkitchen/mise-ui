import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css } from 'styled-components';

import Badge from '../../Badge/Badge';
import Image from '../shared/Image';
import { color, mixins, spacing, withThemes } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';

/** WRAPPER */
const LoadingRelatedDocumentCardTheme = {
  default: css`
    background-color: ${color.white};
    display: flex;
  `,
};
const LoadingRelatedDocumentCardEl = styled.div.attrs({
  className: 'related-document-card',
})`${withThemes(LoadingRelatedDocumentCardTheme)}`;

/** CONTENT */
const LoadingRelatedDocumentCardContentTheme = {
  default: css`
    ${mixins.loadingGradientAnimation('40rem', color.whiteSmoke, color.greySmoke)};
    color: ${color.eclipse};
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    justify-content: center;
    padding: 1.3rem;

    .mask-1,
    .mask-2,
    .mask-3 {
      background-color: ${color.white};
      height: ${spacing.xsm};
      margin-bottom: ${spacing.xsm};
      position: relative;
    }

    .mask-2 {
      height: ${spacing.sm};
    }

    .mask-3 {
      height: ${spacing.md};
    }

    ${breakpoint('md')`
      padding: ${spacing.md} ${spacing.xlg} ${spacing.sm};
    `}
  `,
};
const LoadingRelatedDocumentCardContent = styled.div.attrs({
  className: 'related-document-card',
})`${withThemes(LoadingRelatedDocumentCardContentTheme)}`;

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

const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};
`;

type LoadingRelatedDocumentCardProps = {
  hasImage: boolean
  imageAspectRatio: string,
  siteKey: ThemeSiteKey,
}

const LoadingRelatedDocumentCard = ({
  hasImage = true,
  imageAspectRatio,
  siteKey,
}: LoadingRelatedDocumentCardProps) => (
  <LoadingRelatedDocumentCardEl>
    {hasImage && (
      <RelatedDocumentImageWrapper>
        <StyledBadge
          type={siteKey}
        />
        <Image
          imageAlt="loading-related-img"
          imageUrl={getImageUrl(
            'ATK-S20_20190523_09-46-54_41671_ojahbg',
            'placeholder',
            { aspectRatio: imageAspectRatio },
          )}
          lazy={false}
        />
      </RelatedDocumentImageWrapper>
    )}
    <LoadingRelatedDocumentCardContent>
      <div className="animated-background">
        <div className="mask-1" />
        <div className="mask-2" />
        <div className="mask-3" />
      </div>
    </LoadingRelatedDocumentCardContent>
  </LoadingRelatedDocumentCardEl>
);

export default LoadingRelatedDocumentCard;
