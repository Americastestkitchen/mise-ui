import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import ShowHide from './index';

export default {
  title: 'Components|ShowHide',
  component: ShowHide,
  decorators: [withKnobs],
};

const ShowHideWrapper = styled.div`
  max-width: 30rem;
`;

export const Default = () => (
  <ShowHideWrapper>
    <ShowHide label="button">
      <p>Hidden Content</p>
    </ShowHide>
  </ShowHideWrapper>
);
