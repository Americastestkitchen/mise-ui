import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, fontSize, spacing } from '../../../styles';
import Image from '../shared/Image';
import ActionSummaryItem from '../../ActionSummaryItem';

import Title from '../shared/Title';
import Sticker from '../shared/Sticker';

const RelatedSmallCardWrapper = styled.article`
  width: ${cards.standard.width.lg};
  height: 7.6rem;
  height: ${props => (props.description || props.avgRating
    ? '9rem' : '7.6rem'
  )};
  max-width: ${cards.standard.width.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.gunmetal};
  color: white;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  ${props => (props.description || props.avgRating
    ? 'min-width: 9rem; max-width: 9rem;'
    : 'min-width: 7.6rem; max-width: 7.6rem'
  )};

  a img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

`;

const ContentWrapper = styled.div`
  margin: 1rem 1.5rem;
`;

const StyledTitle = styled(Title)`
  font-size: ${fontSize.sm};
  color: ${color.white};
  line-height: 1.44;
`;

const Description = styled.p`
  font-size: ${fontSize.sm};
  margin: 0.5rem 0;
`;

const RecipeAttribution = styled.div`
  color: ${color.eclipse};
  display: flex;
  margin: 0.3rem 0 0.6rem 0;

  .action-summary {
    color: ${color.eclipse};
    font-size: ${fontSize.sm};
  }

  .icon--star {
    margin-right: 1.6rem;
  }
`;

const StyledSticker = styled(Sticker)`
  position: absolute;
  bottom: 0px;
  left: 0px;

  ${breakpoint('xs', 'lg')`
    border-radius: 0.5rem;
    line-height: 1rem;
    height: 1rem;
    font-size: ${fontSize.xxsm};
  `}
`;

const RelatedSmallCard = ({
  dataAttrs,
  description,
  imageAlt,
  imageUrl,
  onClick,
  sticker,
  target,
  title,
  href,
  avgRating,
  comments,
  numRatings,
}) => (
  <RelatedSmallCardWrapper
    data-testid="related-small-card"
    className={`related__small-card${imageUrl ? '' : ' no-image'}`}
    {...dataAttrs}
    description={description}
    avgRating={avgRating}
  >
    { imageUrl ? (
      <ImageWrapper
        description={description}
        avgRating={avgRating}
      >
        <a
          tabIndex="-1"
          href={href}
          onClick={onClick}
          rel={target && target === '_blank' ? 'noopener noreferrer' : null}
          target={target}
        >
          <Image
            itemProp="image"
            aria-hidden="true"
            imageAlt={imageAlt}
            imageUrl={imageUrl}
            height="100px"
            width="100px"
          />
        </a>
        {sticker ? (
          <StyledSticker
            type="priority"
            text="new"
          />
        ) : null}
      </ImageWrapper>
    ) : null }
    <ContentWrapper>
      <a
        href={href}
        onClick={onClick}
        rel={target && target === '_blank' ? 'noopener noreferrer' : null}
        target={target}
        itemProp="name"
      >
        <StyledTitle avgRating={avgRating} description={description} title={title} />
      </a>
      {description ? (
        <Description>
          {description}
        </Description>
      ) : null}
      <RecipeAttribution
          // eslint-disable-next-line
        aria-label={`${avgRating > 0 ? `${avgRating} star${avgRating === 1 ? '' : 's'} ${numRatings} rating${numRatings === 1 ? '' : 's'}` : ''} ${comments ? `${comments} comment${comments === 1 ? '' : 's'}` : ''}`}
        aria-hidden={!avgRating && !comments}
        role="presentation"
        tabIndex={!avgRating && !comments ? '-1' : '0'}
      >
        {avgRating && comments && (
          <ThemeProvider theme={{ siteKey: 'atk' }}>
            <ActionSummaryItem icon="star">
              <div aria-hidden="true"><strong>{avgRating}</strong>&nbsp;<span>{`(${numRatings})`}</span></div>
            </ActionSummaryItem>
            <ActionSummaryItem icon="comment">
              <strong aria-hidden="true">{comments}</strong>
            </ActionSummaryItem>
          </ThemeProvider>
        )}
      </RecipeAttribution>
    </ContentWrapper>
  </RelatedSmallCardWrapper>
);

RelatedSmallCard.propTypes = {
  avgRating: PropTypes.number,
  comments: PropTypes.number,
  description: PropTypes.string,
  dataAttrs: PropTypes.object,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  numRatings: PropTypes.number,
  onClick: PropTypes.func,
  sticker: PropTypes.bool,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
};

RelatedSmallCard.defaultProps = {
  avgRating: null,
  comments: null,
  description: null,
  dataAttrs: null,
  imageAlt: '',
  imageUrl: '',
  target: null,
  numRatings: null,
  onClick: null,
  sticker: null,
};

export default React.memo(RelatedSmallCard, (prev, next) => (
  prev.href === next.href
));
