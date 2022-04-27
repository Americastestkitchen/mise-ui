import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import BaseCarousel from '../BaseCarousel';
import EmptyState from './EmptyState';
import MadeForYouCard from '../../Cards/MadeForYouCard';

const CarouselWrapper = styled.div`
  margin-bottom: 70px;

  > div {
    margin-right: 20px;
  }
`;

const MadeForYouCarousel = ({ results, username }) => {
  const titleName = `Made for ${username}`;

  if (results.length === 0) {
    return <EmptyState title={titleName} />;
  }

  return (
    <BaseCarousel title={titleName} showDivider>
      {results.map((props, index) => (
        <CarouselWrapper key={index}>
          <MadeForYouCard index={index} {...props} />
        </CarouselWrapper>
      ))}
    </BaseCarousel>
  );
};

MadeForYouCarousel.propTypes = {
  username: PropTypes.string.isRequired,
  results: PropTypes.array,
};

MadeForYouCarousel.defaultProps = {
  results: [],
};

export default MadeForYouCarousel;
