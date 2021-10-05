import React from 'react';
import styled from 'styled-components';

import ImageCollage from './index';
import { grid } from '../../../../styles';

const CollageFrame = styled.div`
  width: ${grid.columnWidth};
`;

export default {
  title: 'Components/Cards/shared/ImageCollage',
  component: ImageCollage,
};

export const Default = () => (
  <CollageFrame>
    <ImageCollage
      imageAlt="Cats doing cat things"
      imageUrl={[
        'https://placekitten.com/272/272',
        'https://placekitten.com/272/272',
        'https://placekitten.com/272/272',
        'https://placekitten.com/272/272',
      ]}
    />
  </CollageFrame>
);
