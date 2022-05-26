import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import LoadingSuggestionCard from './components/LoadingSuggestionCard';
import SuggestionCardAction from './components/SuggestionCardAction';
import SuggestionCardActions from './components/SuggestionCardActions';
import SuggestionCardBadge from './components/SuggestionCardBadge';
import SuggestionCardContent from './components/SuggestionCardContent';
import SuggestionCardContentInner from './components/SuggestionCardContentInner';
import { UserAttributions } from '../shared/UserAttributions';
import SuggestionCardImage from './components/SuggestionCardImage';
import SuggestionCardSubTitle from './components/SuggestionCardSubTitle';
import SuggestionCardTitle from './components/SuggestionCardTitle';
import SuggestionCardWrapper from './components/SuggestionCardWrapper';
import SuggestionCardStickers from './components/SuggestionCardStickers';
import { Save, Close2 } from '../../DesignTokens/Icon';

const SuggestionCard = ({
  href,
  dataIdx,
  imageUrl,
  objectId,
  siteKey,
  subtitle,
  stickers,
  title,
  avgRating,
  comments,
  numRatings,
  resourceType,
}) => (
  <SuggestionCardWrapper
    data-idx={dataIdx}
  >
    <SuggestionCardImage
      data-testid={`suggestion-img-${Boolean(imageUrl)}`}
      imageUrl={imageUrl}
      href={href}
      aria-label={`Go to the ${title} recipe`}
    >
      <SuggestionCardBadge
        type={siteKey}
      />
      <SuggestionCardActions>
        <div className="button-container">
          <SuggestionCardAction
            className="remove-cell primary-hover"
            data-event-name="RECOMMENDATION_REJECTED"
            data-document-title={title}
            data-href={href}
            data-document-url={href}
            data-document-type={resourceType}
            data-object-id={objectId}
            data-origin-site={siteKey}
            data-testid="suggestion-action__skip"
            aria-label="reject recipe suggestion"
          >
            <Close2 />
          </SuggestionCardAction>
          <span>Pass</span>
        </div>
        <div className="button-container">
          <SuggestionCardAction
            className="favorite-action remove-cell primary-hover"
            data-event-name="RECOMMENDATION_ADDED"
            data-document-title={title}
            data-favoritable-id={objectId}
            data-document-url={href}
            data-document-type={resourceType}
            data-object-id={objectId}
            data-origin-site={siteKey}
            data-testid="suggestion-action__favorite"
            aria-label="save recipe suggestion"
          >
            <Save className="favorite-ribbon" />
          </SuggestionCardAction>
          <span>Save</span>
        </div>
      </SuggestionCardActions>
    </SuggestionCardImage>
    <SuggestionCardContent>
      <SuggestionCardContentInner>
        {stickers ? (
          <SuggestionCardStickers
            stickers={stickers}
          />
        ) : null}
        <SuggestionCardTitle
          aria-label={`Go to the ${title} recipe`}
          data-testid="suggestion-title"
          href={href}
        >
          {title}
        </SuggestionCardTitle>
        {subtitle && (
          <SuggestionCardSubTitle
            data-testid="suggestion-sub-title"
          >
            {subtitle}
          </SuggestionCardSubTitle>
        )}
        <ThemeProvider theme={{ siteKey: 'atk' }}>
          <UserAttributions
            avgRating={avgRating}
            commentsCount={comments}
            numRatings={numRatings}
          />
        </ThemeProvider>
      </SuggestionCardContentInner>
    </SuggestionCardContent>
  </SuggestionCardWrapper>
);

SuggestionCard.propTypes = {
  avgRating: PropTypes.number,
  comments: PropTypes.number,
  href: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  numRatings: PropTypes.number,
  objectId: PropTypes.string.isRequired,
  siteKey: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  stickers: PropTypes.array,
  title: PropTypes.string.isRequired,
  dataIdx: PropTypes.number.isRequired,
  resourceType: PropTypes.string.isRequired,
};

SuggestionCard.defaultProps = {
  avgRating: null,
  comments: 0,
  imageUrl: null,
  numRatings: null,
  subtitle: null,
  stickers: null,
};

SuggestionCard.Loading = LoadingSuggestionCard;

export default SuggestionCard;
