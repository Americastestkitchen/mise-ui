import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import utils from '../../lib/utils';
import { fontSize, font, color, spacing } from '../../styles';
import Button from '../Buttons/Button';

const Wrapper = styled.div` 
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;

  ${breakpoint('md')`
    margin-bottom: 3rem;
  `}

  .show-more-results-button {
    margin-bottom: ${spacing.md};
    padding: 0;
    width: 100%;

    ${breakpoint('md')`
      max-width: 33.5rem;
    `}
  }
`;

const RemainingResultsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${breakpoint('xlg')`
    position: relative;
    width: 100%;
  `}
`;

const RemainingResultsText = styled.p`
  font: italic ${fontSize.lg}/1 ${font.mwr};
  margin-bottom: 3rem;

  ${breakpoint('xlg')`
    margin-bottom: 0;
  `}
`;

const BackToTopButton = styled.button`
  background-color: ${color.transparent};
  border: none;
  cursor: pointer;
  font: ${fontSize.lg}/1 ${font.pnb};
  color: ${color.eclipse};

  &:hover {
    color: ${color.grayishCyan};
  }

  ${breakpoint('xlg')`
    position: absolute;
    right: 0;
  `}
`;

const CustomStateResults = ({
  docType,
  focusNextId,
  hasMore,
  searchResults,
  pageSize,
  onClickMoreResults,
  onClickBackToTop,
}) => {
  // Assuming the first page will be number 1
  const { hitsPerPage, page, total } = searchResults || {};
  const remainingCount = total - page * pageSize;
  let buttonText = `SHOW ${pageSize} MORE RESULTS`;
  let remainingPre = 'are';
  let remainingPost = 's';
  if (remainingCount === 1) {
    remainingPre = 'is';
    remainingPost = '';
    buttonText = `SHOW ${remainingCount} MORE RESULT`;
  }

  const handleBackToTop = () => {
    if (onClickBackToTop) {
      onClickBackToTop();
      return;
    }

    utils.scrollTo(0, 750);
  };

  useEffect(() => {
    const additionalHits = document.getElementsByClassName('standard-card');
    if (page >= 1) {
      const refEl = additionalHits[hitsPerPage * page];
      const nextAnchor = refEl?.getElementsByClassName(
        'standard-card__anchor',
      )[1];
      // eslint-disable-next-line no-unused-expressions
      nextAnchor?.focus();
    }
  }, [focusNextId, hitsPerPage, page]);

  return (
    <Wrapper>
      {hasMore && (
        <Button
          className="show-more-results-button"
          onClick={onClickMoreResults}
        >
          {buttonText}
        </Button>
      )}
      <RemainingResultsWrapper>
        {hasMore && remainingCount > 0 && (
          <RemainingResultsText>
            There {`${remainingPre} `} <strong>{remainingCount}</strong>{' '}
            remaining {`${docType}${remainingPost}`}
          </RemainingResultsText>
        )}
        <BackToTopButton onClick={handleBackToTop}>
          Back to Top
        </BackToTopButton>
      </RemainingResultsWrapper>
    </Wrapper>
  );
};

CustomStateResults.propTypes = {
  docType: PropTypes.string.isRequired,
  focusNextId: PropTypes.number.isRequired,
  hasMore: PropTypes.bool.isRequired,
  pageSize: PropTypes.number.isRequired,
  onClickMoreResults: PropTypes.func.isRequired,
  searchResults: PropTypes.object.isRequired,
  onClickBackToTop: PropTypes.func,
};

CustomStateResults.defaultProps = {
  onClickBackToTop: null,
};

export default CustomStateResults;
