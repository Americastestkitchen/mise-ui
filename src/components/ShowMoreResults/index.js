import React from 'react';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import Button from '../Buttons/Button/Button';

const CustomShowMoreResults = ({
  className,
  hasMore,
  refineNext,
  resultsCount,
  resultType,
}) => (
  <Button
    className={className}
    disabled={!hasMore}
    onClick={refineNext}
  >
    Show {resultsCount ? `${resultsCount}` : ''} more {resultType}s
  </Button>
);

CustomShowMoreResults.propTypes = {
  className: PropTypes.string,
  hasMore: PropTypes.bool,
  refineNext: PropTypes.func.isRequired,
  resultsCount: PropTypes.number,
  resultType: PropTypes.string,
};

CustomShowMoreResults.defaultProps = {
  className: '',
  hasMore: true,
  resultsCount: null,
  resultType: 'result',
};

const AlgoliaShowMoreResults = connectInfiniteHits(CustomShowMoreResults);

const ShowMoreResults = ({ isAlgolia, ...restProps }) => (
  isAlgolia ? (
    <AlgoliaShowMoreResults {...restProps} />
  ) : (
    <CustomShowMoreResults {...restProps} />
  )
);

ShowMoreResults.propTypes = {
  isAlgolia: PropTypes.bool,
  className: PropTypes.string,
  hasMore: PropTypes.bool,
  refineNext: PropTypes.func.isRequired,
  resultsCount: PropTypes.number,
  resultType: PropTypes.string,
};

ShowMoreResults.defaultProps = {
  isAlgolia: true,
  className: '',
  hasMore: true,
  resultsCount: null,
  resultType: 'result',
};

export default ShowMoreResults;
