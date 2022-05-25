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
  > div {
    margin-right: 16px;
  }
`;

const StyledTitle = styled(Title)`
  > span {
    margin: 8px 0 0 6px;
  }
`;

const Subtitle = styled.span`
  font: italic 1.6rem/1.25 ${font.mwr};
`;

const MadeForYouCarousel = ({ results, title, subtitle }) => {
  if (results.length === 0) {
    return (
      <>
        <StyledTitle>
          {title} <Sticker type="priority" text="new" />
        </StyledTitle>
        <Divider showDivider />
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
