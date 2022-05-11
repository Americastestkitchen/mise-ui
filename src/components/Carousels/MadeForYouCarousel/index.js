import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { font } from '../../../styles';
import { Title, Divider } from '../BaseCarousel/styled-elements';
import BaseCarousel from '../BaseCarousel';
import EmptyState from './EmptyState';
import MadeForYouCard from '../../Cards/MadeForYouCard';
import Sticker from '../../Cards/shared/Sticker';

const CarouselWrapper = styled.div`
  margin-bottom: 70px;

  > div {
    margin-right: 20px;
  }
`;

const StyledTitle = styled(Title)`
  display: flex;
  align-items: center;

  span {
    margin-bottom: 0;
  }
`;

const Subtitle = styled.span`
  font: italic 1.6rem/1.25 ${font.mwr};
`;

const MadeForYouCarousel = ({ results, title, subtitle }) => {
  if (results.length === 0) {
    return (
      <>
        <Subtitle>{subtitle}</Subtitle>
        <StyledTitle>
          {title} <Sticker type="priority" text="new" />
        </StyledTitle>
        <EmptyState />
      </>
    );
  }

  return (
    <>
      <Subtitle>{subtitle}</Subtitle>
      <BaseCarousel
        header={(
          <StyledTitle>
            {title} <Sticker type="priority" text="new" />
          </StyledTitle>
        )}
        showDivider
      >
        {results.map((props, index) => (
          <CarouselWrapper key={index}>
            <MadeForYouCard index={index} {...props} />
          </CarouselWrapper>
        ))}
      </BaseCarousel>
    </>
  );
};

MadeForYouCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  results: PropTypes.array,
};

MadeForYouCarousel.defaultProps = {
  results: [],
};

export default MadeForYouCarousel;
