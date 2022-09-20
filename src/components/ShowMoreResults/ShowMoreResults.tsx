import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import Button from '../Buttons/Button/Button';

export type CustomShowMoreResultsProps = {
  className?: string;
  hasMore?: boolean;
  refineNext: () => void;
  resultsCount?: number;
  resultType?: string;
}

const CustomShowMoreResults = ({
  className,
  hasMore = true,
  refineNext,
  resultsCount,
  resultType = 'result',
}: CustomShowMoreResultsProps) => (
  <Button
    className={className}
    disabled={!hasMore}
    onClick={refineNext}
  >
    Show {resultsCount ? `${resultsCount}` : ''} more {resultType}s
  </Button>
);

const AlgoliaShowMoreResults = connectInfiniteHits(CustomShowMoreResults);

export interface ShowMoreResultsProps extends CustomShowMoreResultsProps {
  isAlgolia?: boolean;
}

const ShowMoreResults = ({
  className,
  hasMore = true,
  isAlgolia = true,
  refineNext,
  resultsCount,
  resultType,
}: ShowMoreResultsProps) => {
  const restProps = {
    className,
    hasMore,
    refineNext,
    resultsCount,
    resultType,
  };

  return isAlgolia ? (
    <AlgoliaShowMoreResults {...restProps} />
  ) : (
    <CustomShowMoreResults {...restProps} />
  );
};

export default ShowMoreResults;
