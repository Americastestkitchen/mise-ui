import React from 'react';
// import cx from 'classnames';
import { FeedTypes } from '../cards/types/cardType';

export type FeedProps = {
  onClick?(): void;
  feed: FeedTypes[];
}

const HomepageFeed = ({onClick, feed}: FeedProps) => {
  return (
    <div>
      {feed.map((card, index: number) => {
        return ( 
          <div>
            {card.documentType === 'recipe' && (
              <p key={index}>This will use the {card.documentType} card component.</p>
            )}
            {card.documentType === 'article' && (
              <p key={index}>This will use the {card.documentType} card component.</p>
            )}
            {card.documentType === 'howTo' && (
              <p key={index}>This will use the {card.documentType} card component.</p>
            )}
            {card.documentType === 'reviews' && (
              <p key={index}>This will use the {card.documentType} card component.</p>
            )}
            {card.documentType === 'magazine' && (
              <p key={index}>This will use the {card.documentType} card component.</p>
            )}
            {card.documentType === 'episode' && (
              <p key={index}>This will use the {card.documentType} card component.</p>
            )}
            {card.documentType === 'video' && (
              <p key={index}>This will use the {card.documentType} card component.</p>
            )}
          </div>
        )
      })
    }
    </div>
  )
}

export default HomepageFeed