import React from 'react';
import { StandardCard, VideoCard } from '../PeekCard/PeekCard';
import StandardPeekCard from '../PeekCard/StandardPeekCard/StandardPeekCard';
import MediaPeekCard from '../PeekCard/MediaPeekCard/MediaPeekCard';

export type FeedCard = StandardCard | VideoCard

export type FeedProps = {
  onClick?(): void;
  feed: FeedCard[];
}

const HomepageFeed = ({onClick, feed}: FeedProps) => {
  return (
    <div>
      {feed.map((card, index: number) => {
        return ( 
          <div key={index}>
            {card.cardType === 'standard' && (
              <StandardPeekCard card={card} />
            )}
            {card.cardType === 'video' && (
              <MediaPeekCard card={card} />
            )}
          </div>
        )
      })
    }
    </div>
  )
}

export default HomepageFeed