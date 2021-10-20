import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { cards, color, fontSize, spacing } from '../../../styles';
import Image from '../shared/Image';

import Title from '../shared/Title';

const RelatedSmallCardWrapper = styled.article`
  width: ${cards.standard.width.lg};
  height: 7.6rem;
  max-width: ${cards.standard.width.lg};
  display: flex;
  align-items: center;
  background-color: ${color.gunmetal};
  padding: 0 ${spacing.xsm} 0 0;

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

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${spacing.xsm};

  .no-image & {
    padding-left: ${spacing.xsm};;
  }
`;

const StyledTitle = styled(Title)`
  font-size: ${fontSize.md};
  color: ${color.white};
`;

const RelatedSmallCard = ({
  dataAttrs,
  imageAlt,
  imageUrl,
  onClick,
  target,
  title,
  href,
}) => {
  return (
    <RelatedSmallCardWrapper
      className={`related__small-card${imageUrl ? '' : ' no-image'}`}
      {...dataAttrs}
    >
      { imageUrl ? (
        <ImageWrapper>
          <a
            tabIndex="-1"
            href={href}
            onClick={onClick}
            rel={target && target === '_blank' ? 'noopener noreferrer' : null}
            target={target}
          >
            <Image
              aria-hidden="true"
              imageAlt={imageAlt}
              imageUrl={imageUrl}
            />
          </a>
        </ImageWrapper>
      ) : null }
      <TitleWrapper>
        <a
          href={href}
          onClick={onClick}
          rel={target && target === '_blank' ? 'noopener noreferrer' : null}
          target={target}
        >
          <StyledTitle title={title} />
        </a>
      </TitleWrapper>
    </RelatedSmallCardWrapper>
  );
};


RelatedSmallCard.propTypes = {
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
};



export default React.memo(RelatedSmallCard, (prev, next) => (
  prev.href === next.href
));