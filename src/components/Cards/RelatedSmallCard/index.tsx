import React from 'react';
import styled from 'styled-components';
import { cards, color, fontSize, spacing } from '../../../styles';
import Image from '../shared/Image/Image';

import Title from '../shared/Title/Title';

const RelatedSmallCardWrapper = styled.article`
  width: ${cards.standard.width.lg};
  height: 7.6rem;
  max-width: ${cards.standard.width.lg};
  display: flex;
  align-items: center;
  background-color: ${color.gunmetal};
`;

const ImageWrapper = styled.div`
  width: 7.6rem;
  max-width: 7.6rem;
  height: 100%;
  margin-right: ${spacing.sm};

  a img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

const TitleWrapper = styled.a`
  max-width: 17rem;

  .no-image & {
    padding-left: ${spacing.xsm};
  }
`;

const StyledTitle = styled(Title)`
  font-size: ${fontSize.md};
  color: ${color.white};
  line-height: 1.44;
`;

type SmallCardProps = {
  dataAttrs?: Record<string, unknown>,
  href: string,
  imageAlt?: string,
  imageUrl?: string,
  onClick?: () => void;
  target?:string,
  title: string,
}

const RelatedSmallCard = ({
  dataAttrs,
  imageAlt = '',
  imageUrl = '',
  onClick,
  target,
  title,
  href,
}: SmallCardProps) => (
  <RelatedSmallCardWrapper
    itemScope
    itemType="https://schema.org/Recipe"
    data-testid="related-small-card"
    className={`related__small-card${imageUrl ? '' : ' no-image'}`}
    {...dataAttrs}
  >
    { imageUrl ? (
      <ImageWrapper>
        <a
          tabIndex={-1}
          href={href}
          onClick={onClick}
          rel={target && target === '_blank' ? 'noopener noreferrer' : ''}
          target={target}
        >
          <Image
            aria-hidden="true"
            imageAlt={imageAlt}
            imageUrl={imageUrl}
            height="76px"
            width="76px"
          />
        </a>
      </ImageWrapper>
    ) : null }
    <TitleWrapper
      href={href}
      onClick={onClick}
      rel={target && target === '_blank' ? 'noopener noreferrer' : ''}
      target={target}
      itemProp="name"
    >
      <StyledTitle title={title} />
    </TitleWrapper>
  </RelatedSmallCardWrapper>
);

export default React.memo(RelatedSmallCard, (prev, next) => (
  prev.href === next.href
));
