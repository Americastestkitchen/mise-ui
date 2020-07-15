import React from 'react';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import Button from '../Buttons/Button';

const ShowMoreResults = ({
  className,
  hasMore,
  refineNext,
  resultsCount,
}) => (
  <Button
    className={className}
    disabled={!hasMore}
    onClick={refineNext}
  >
    Show {`${resultsCount}`} more results
  </Button>
);

ShowMoreResults.propTypes = {
  className: PropTypes.string,
  hasMore: PropTypes.bool,
  refineNext: PropTypes.func.isRequired,
  resultsCount: PropTypes.number.isRequired,
};

ShowMoreResults.defaultProps = {
  className: '',
  hasMore: true,
};

const CustomShowMoreResults = connectInfiniteHits(ShowMoreResults);

export default CustomShowMoreResults;
