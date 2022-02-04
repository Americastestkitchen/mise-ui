import React from 'react';
import styled from 'styled-components';
import { color, fontSize, lineHeight, font } from '../../../../styles';
import type { InferStyledTypes } from '../../../../styles/utility-types';
import ActionSummaryItem from '../../../ActionSummaryItem';

const Wrapper = styled.div`
  display: flex;

  .icon--star {
    margin-right: 1.6rem;
  }
`;

export type UserAttributionsProps = InferStyledTypes<typeof Wrapper> & {
  avgRating?: number;
  numRatings?: number;
  commentsCount?: number;
};

export default function UserAttributions({
  avgRating,
  numRatings,
  commentsCount,
  ...styledProps
}: UserAttributionsProps) {
  const hasCommentsCount = typeof commentsCount === 'number';
  const hasRatings = typeof avgRating === 'number' && typeof numRatings === 'number';
  const hasNoData = !hasRatings && !hasCommentsCount;
  const avgRatingRound = hasRatings ? (Math.round(10 * avgRating) / 10).toFixed(1) : undefined;

  const ratingsAria = `${avgRating && avgRating > 0 ? `${avgRatingRound} star${avgRatingRound === '1.0' ? '' : 's'} ${numRatings} rating${numRatings === 1 ? '' : 's'}` : ''}`;
  const commentsAria = `${commentsCount ? `${commentsCount} comment${commentsCount === 1 ? '' : 's'}` : ''}`;

  return (
    <Wrapper
      aria-label={`${ratingsAria} ${commentsAria}`}
      aria-hidden={hasNoData}
      role="presentation"
      tabIndex={hasNoData ? -1 : 0}
      {...styledProps}
    >
      {hasRatings && (
        <ActionSummaryItem icon="star">
          <div aria-hidden="true"><strong>{avgRatingRound}</strong>&nbsp;<span>{`(${numRatings})`}</span></div>
        </ActionSummaryItem>
      )}
      {hasCommentsCount && (
        <ActionSummaryItem icon="comment">
          <strong aria-hidden="true">{commentsCount}</strong>
        </ActionSummaryItem>
      )}
    </Wrapper>
  );
}

export const StandardUserAttributions = styled(UserAttributions)`
  margin: 0.3rem 0 0.6rem 0;
`;

export const FeatureCardUserAttributions = styled(UserAttributions)`
  margin: 0.3rem 0 0.6rem 0;
  color: ${color.white};
  font: ${fontSize.md}/${lineHeight.md} ${font.pnb};

  .action-summary {
    color: ${color.white};
    path {
      fill: white !important;
    }
  }
`;
