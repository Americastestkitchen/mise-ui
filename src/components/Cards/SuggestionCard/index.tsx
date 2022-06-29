import React from 'react';
import { ThemeProvider } from 'styled-components';

import LoadingSuggestionCard from './components/LoadingSuggestionCard';
import { color } from '../../../styles';
import { UserAttributions } from '../shared/UserAttributions';
import { BadgeType } from '../../Badge/Badge';
import {
  SuggestionCardImg,
  SuggestionCardBadge,
} from './components/SuggestionCardImage';
import SuggestionCardWrapper from './components/SuggestionCardWrapper';
import SuggestionCardStickers from './components/SuggestionCardStickers';
import { Save, Close2 } from '../../DesignTokens/Icon';

import {
  SuggestionCardActionsWrapper,
  SuggestionCardAction,
} from './components/SuggestionCardActions';
import {
  SuggestionCardContent,
  SuggestionCardContentInner,
  SuggestionCardSubTitle,
  SuggestionCardTitle,
} from './components/SuggestionCardContent';

export type Stickeritem = {
  type: string,
  text: string,
}

export type SuggestionCardProps = {
  avgRating?: number | null,
  comments?: number,
  href: string,
  imageUrl?: string,
  numRatings?: number | null,
  objectId: string,
  siteKey: string,
  subtitle?: string,
  stickers?: Stickeritem[],
  title: string,
  dataIdx?: number,
  resourceType: string,
}

export const SuggestionCard = ({
  href,
  dataIdx = 0,
  imageUrl = '',
  objectId,
  siteKey,
  subtitle = '',
  stickers = [],
  title,
  avgRating,
  comments = 0,
  numRatings,
  resourceType,
}: SuggestionCardProps) => {
  const Site: string = siteKey;
  const siteBadge: BadgeType = Site as BadgeType;
  return (
    <SuggestionCardWrapper
      data-idx={dataIdx}
    >
      <SuggestionCardImg
        data-testid={`suggestion-img-${imageUrl}`}
        imageUrl={imageUrl}
        href={href}
        aria-label={`Go to the ${title} recipe`}
      >
        <SuggestionCardBadge
          type={siteBadge}
        />
        <SuggestionCardActionsWrapper>
          <div className="button-container">
            <SuggestionCardAction
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
              className="favorite-action"
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
              <Save className="favorite-ribbon" fill={color.eclipse} />
            </SuggestionCardAction>
            <span>Save</span>
          </div>
        </SuggestionCardActionsWrapper>
      </SuggestionCardImg>
      <SuggestionCardContent>
        <SuggestionCardContentInner>
          {Boolean(stickers.length !== 0) && (
            <SuggestionCardStickers
              stickers={stickers}
            />
          )}
          <SuggestionCardTitle
            aria-label={`Go to the ${title} recipe`}
            data-testid="suggestion-title"
            href={href}
          >
            {title}
          </SuggestionCardTitle>
          {Boolean(subtitle) && (
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
              className="recipe-attributions"
            />
          </ThemeProvider>
        </SuggestionCardContentInner>
      </SuggestionCardContent>
    </SuggestionCardWrapper>
  );
};

SuggestionCard.Loading = LoadingSuggestionCard;
