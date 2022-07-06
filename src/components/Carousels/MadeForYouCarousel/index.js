import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { font } from '../../../styles';
import { Title, Divider } from '../BaseCarousel/styled-elements';
import BaseCarousel from '../BaseCarousel';
import { useFlickityGroup } from '../BaseCarousel/useFlickity';
import { StandardSlide } from '../BaseCarousel/Slides';
import EmptyState from './EmptyState';
import MadeForYouCard from '../../Cards/MadeForYouCard';
import Sticker from '../../Cards/shared/Sticker';

const StyledSticker = styled(Sticker)`
  margin: 0 0 8px 0;
  display: block;
  width: 42px;
`;

const Subtitle = styled.span`
  font: italic 1.6rem/1.25 ${font.mwr};
`;

const MadeForYouCarousel = ({ results, title, subtitle }) => {
  if (results.length === 0) {
    return (
      <>
        <StyledSticker type="priority" text="new" />
        <Title>{title}</Title>
        <Divider showDivider />
        <EmptyState />
      </>
    );
  }

  return (
    <>
      <StyledSticker type="priority" text="new" />
      <Subtitle>{subtitle}</Subtitle>
      <BaseCarousel
        header={(<Title>{title}</Title>)}
        title="Smart Collections"
        showDivider
        useFlickityHook={useFlickityGroup}
      >
        {results.map((props, index) => (
          <StandardSlide key={index}>
            <MadeForYouCard index={index} {...props} />
          </StandardSlide>
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
