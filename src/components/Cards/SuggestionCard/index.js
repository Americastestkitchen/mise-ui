import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import LoadingSuggestionCard from './components/LoadingSuggestionCard';
import SuggestionCardAction from './components/SuggestionCardAction';
import SuggestionCardActions from './components/SuggestionCardActions';
import SuggestionCardBadge from './components/SuggestionCardBadge';
import SuggestionCardContent from './components/SuggestionCardContent';
import SuggestionCardContentInner from './components/SuggestionCardContentInner';
import RecipeAttributions from './components/RecipeAttributions';
import SuggestionCardImage from './components/SuggestionCardImage';
import SuggestionCardSubTitle from './components/SuggestionCardSubTitle';
import SuggestionCardTitle from './components/SuggestionCardTitle';
import SuggestionCardWrapper from './components/SuggestionCardWrapper';
import SuggestionCardStickers from './components/SuggestionCardStickers';
import ActionSummaryItem from '../../ActionSummaryItem';
import { FavoriteRibbon } from '../../DesignTokens/Icon';
import { Close } from '../../DesignTokens/Icon/svgs';
import { color } from '../../../styles';

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
}) => (
  <SuggestionCardWrapper
    data-idx={dataIdx}
  >
    <SuggestionCardImage
      data-testid={`suggestion-img-${Boolean(imageUrl)}`}
      imageUrl={imageUrl}
      href={href}
    >
      <SuggestionCardBadge
        type={siteKey}
      />
      <SuggestionCardActions>
        <div className="button-container">
          <SuggestionCardAction
            className="favorite-action remove-cell"
            data-event-name="RECOMMENDATION_ADDED"
            data-document-title={title}
            data-favoritable-id={objectId}
            data-object-id={objectId}
            data-origin-site={siteKey}
            data-testid="suggestion-action__favorite"
            aria-label="save recipe suggestion"
          >
            <FavoriteRibbon
              ariaHidden
              ariaLabel=" "
              className="favorite-ribbon"
              fill={color.white}
            />
          </SuggestionCardAction>
          <span>Save</span>
        </div>
        <div className="button-container">
          <SuggestionCardAction
            className="skip remove-cell"
            data-document-title={title}
            data-event-name="RECOMMENDATION_REJECTED"
            data-href={href}
            data-object-id={objectId}
            data-testid="suggestion-action__skip"
            aria-label="reject recipe suggestion"
          >
            <Close
              ariaHidden
              ariaLabel=" "
              fill={color.eclipse}
            />
          </SuggestionCardAction>
          <span>Pass</span>
        </div>
      </SuggestionCardActions>
    </SuggestionCardImage>
    <SuggestionCardContent>
      <SuggestionCardContentInner>
        {stickers.length > 0 ? (
          <SuggestionCardStickers
            stickers={stickers}
          />
        ) : null}
        <SuggestionCardTitle
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
        <RecipeAttributions
          // eslint-disable-next-line
          aria-label={`${avgRating > 0 ? `${avgRating} star${avgRating === 1 ? '' : 's'} ${numRatings} rating${numRatings === 1 ? '' : 's'}` : ''} ${comments ? `${comments} comment${comments === 1 ? '' : 's'}` : ''}`}
          aria-hidden={!avgRating && !comments}
          role="presentation"
          tabIndex={!avgRating && !comments ? '-1' : '0'}
        >
          <ThemeProvider theme={{ siteKey: 'atk' }}>
            {avgRating && numRatings && (
              <ActionSummaryItem icon="star">
                <div aria-hidden="true"><strong>{avgRating}</strong>&nbsp;<span>{`(${numRatings})`}</span></div>
              </ActionSummaryItem>
            )}
            {comments && (
              <ActionSummaryItem icon="comment">
                <strong aria-hidden="true">{comments}</strong>
              </ActionSummaryItem>
            )}
          </ThemeProvider>
        </RecipeAttributions>
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
};

SuggestionCard.defaultProps = {
  avgRating: null,
  comments: null,
  imageUrl: null,
  numRatings: null,
  subtitle: null,
  stickers: [],
};

SuggestionCard.Loading = LoadingSuggestionCard;

export default SuggestionCard;
